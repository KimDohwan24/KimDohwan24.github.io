---
layout: post
title: Token stateless
subtitle: 무상태 
categories: TIL
tags: [TIL]
---

## 문제 상황
- JWT 기반 인증 시스템을 구현하면서 로그아웃 기능을 추가하려 했습니다.
- 하지만 JWT는 기본적으로 서버가 상태를 저장하지 않는 무상태(stateless) 구조이기 때문에, 사용자가 로그아웃을 하더라도 서버는 해당 토큰이 유효한지 아닌지를 판단할 수 없습니다.
- 처음에는 이 문제를 해결하기 위해 Redis를 도입해 사용자의 토큰을 저장하고, 블랙리스트 방식으로 로그아웃 시 해당 토큰을 무효화하려고 했습니다.

### 고민한 점
- Redis에 토큰을 저장하면 로그아웃 처리를 쉽게 할 수 있고, 토큰 유효성 검사 시 블랙리스트에 있는지 체크하면 되므로 보안 측면에서 유리합니다.
- 하지만 이 방식은 결국 토큰 상태를 서버가 관리하게 되므로 JWT의 핵심인 무상태성(stateless)을 깨는 문제가 생깁니다.
- 또한 Redis 관리 부담, 토큰 만료 처리 로직, 블랙리스트 갱신 등 추가적인 복잡도가 생깁니다.

### 선택한 해결 방향

- 고민 끝에 다음과 같은 기준을 세웠습니다:

- 무상태성을 유지하는 방향을 우선시한다면:
1. Access Token의 만료 시간을 짧게 설정
2. Refresh Token을 사용해 토큰 재발급 API 제공
3. 로그아웃 시 클라이언트가 로컬 토큰을 삭제하는 방식

- 보안이 더 중요한 상황이라면:
1. Redis를 사용해 블랙리스트 방식으로 로그아웃된 토큰을 저장하고 인증 필터에서 차단

- 저는 이번 프로젝트에서는 무상태성을 유지하는 방향을 택하고, 보안을 강화할 필요가 있을 때 블랙리스트 방식을 보완적으로 도입하는 쪽으로 결정했습니다.



## Redis 블랙리스트를 활용한 JWT 로그아웃 처리 사례
- 배경 : JWT는 서버가 토큰을 저장하지 않기 때문에 무상태(stateless) 인증 방식입니다. 하지만 이로 인해 로그아웃 시 토큰을 서버 측에서 강제로 무효화할 수 없는 단점이 있습니다.
이를 해결하기 위해 Redis를 활용한 블랙리스트 방식을 적용했습니다.

### 구현 방식
1. 로그아웃 시 토큰을 Redis에 저장

```java
// 로그아웃 시 호출되는 서비스
public void logout(String accessToken) {
    long expiration = jwtUtil.getExpiration(accessToken); // 토큰의 남은 만료 시간 계산
    redisTemplate.opsForValue().set("BL:" + accessToken, "logout", expiration, TimeUnit.MILLISECONDS);
}
토큰 키 앞에 "BL:"를 붙여 블랙리스트로 식별

토큰의 남은 유효시간만큼 Redis에 저장 → 메모리 낭비 방지
```

2. JWT 필터에서 요청 토큰 확인

```java

String token = jwtUtil.resolveToken(request);

if (token != null && jwtUtil.validateToken(token)) {
    Boolean isBlacklisted = redisTemplate.hasKey("BL:" + token);
    if (Boolean.TRUE.equals(isBlacklisted)) {
        throw new JwtException("로그아웃된 토큰입니다.");
    }
}
요청이 들어올 때 Redis에서 블랙리스트 토큰인지 검사

로그아웃된 토큰이라면 인증 실패 처리
```

### 장점
- 서버가 토큰의 상태를 알 수 있어 로그아웃 구현이 가능
- RefreshToken 탈취 등 보안 문제 발생 시 즉시 차단 가능
- Redis의 TTL을 활용해 자동 만료 관리

### 단점
- 서버가 일부 상태를 저장하게 되어 무상태성(stateless) 손상
- Redis 의존성 증가 → 장애 시 인증 전체 영향
- 토큰마다 Redis 조회 필요 → 성능 부담 고려 필요


### 요약

| 기준         | 무상태 방식  | Redis 블랙리스트 | 토큰 버전 방식 |
| ---------- | ------- | ----------- | -------- |
| 무상태성 유지    | ✅ 매우 좋음 | ❌ 손상됨       | ❌ 손상됨    |
| 로그아웃 즉시 반영 | ❌ 불가능   | ✅ 가능        | ✅ 가능     |
| 구현 난이도     | ✅ 쉬움    | ⚠️ 중간       | ⚠️ 중간    |
| 보안 수준      | ⚠️ 보통   | ✅ 높음        | ✅ 높음     |

## 최종 결론
처음엔 Redis로 토큰을 관리하려 했지만, 이는 JWT의 무상태성을 해치기 때문에 Access Token은 짧게, Refresh Token으로 재발급 구조를 선택했습니다.
보안이 특히 중요한 서비스에서는 블랙리스트 방식도 함께 고려할 수 있습니다.