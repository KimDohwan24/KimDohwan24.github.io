---
layout: post
title: Json Web Token , Filter
subtitle: JWT, Filter
categories: TIL
tags: [TIL]
---

## Json Web Token 
- 사용자 인증 및 권한 부여에 널리 사용되는 토큰 기반 인증 방식이다.
- 클라이언트와 서버 간에 정보를 안전하게 전달하기 위한 `JSON` 기반의 암호화된 토큰이다.
- JWT는 세 파트로 나누어지며, 각 파트는 점(.)으로 구분하여 표현한다.

1) Header ( 헤더 ) : 해시 암호화 알고리즘과 토큰의 타입으로 구성

```
{
  "alg": "HS256",
  "typ": "JWT"
}
```
- alg: 서명에 사용할 알고리즘 (예: HMAC SHA256)
- typ: 토큰의 타입, 일반적으로 "JWT"

2) Payload ( 페이로드 ) : 내용, 즉 토큰에 담을 클레임(claim) 정보를 포함

```
{
  "sub": "user123",
  "name": "홍길동",
  "role": "USER",
  "exp": 1717032200
}
```

- `실제 데이터(클레임)`을 담고있는 부분

- 주요 클레임 : 
1. iss(issuer) : 발행자
2. exp(expiration time) : 만료시간
3. sub(subject) : 제목
4. iat(issued At) : 발행 시간
5. jti(JWT ID) : 토큰의 고유 식별자
6. 사용자 정의 클레임 ( 예 : role , email 등..)

3) Signature ( 서명 ) : 서명
```
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

- 서명은 토큰의 위변조 여부를 검증하는 데 사용됨
- 비밀 키(secret)를 사용해 생성 
- 서명을 통해 서버는 Token이 변조되지 않았음을 확인할 수 있다.

### JWT 동작 방식
1. 클라이언트의 로그인 요청
2. 로그인에 성공했다면 Header, Payload에 `Secret Key`를 사용하여 Signature를 만든다
- 이후 Base64로 Encoding한다
- 일반적으로 Cookie에 담아 클라이언트에게 JWT를 발급한다.
3. 발급받은 JWT를 저장 후 서버에 요청할 때 `Authorization` Header에 JWT를 담아 보낸다
4. 서버에서 JWT의 유효성 검사를 통해 통과한다면 인증에 성공하여 요청을 처리해준다.
- JWT 만요, 위변조 여부를 검사한다.