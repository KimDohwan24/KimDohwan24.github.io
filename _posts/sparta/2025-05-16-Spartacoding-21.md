---
layout: post
title: 객체지향 설계 
subtitle: OOD 
categories: TIL
tags: [TIL]
---

### 객체지향 설계 과정 ( OOD - Object-Oriented Design )

1. 요구사항을 찾고 세분화 한다
- 무엇을 만들건지 정의
- 기능과 제약사항 도출

2. 클래스 및 책임 도출 ( 도메인 모델링 )
- 핵심 개념을 분석해서 클래스와 메서드로 변환
- 클래스는 실세계 개념을 반영 ( User,Schedule ... )

3. 객체 관계 정의
- 객체 간 관계 설정 
1. 연관 ( Association )
2. 상속 ( Inheritance )
3. 집합 ( Aggregation )
4. 포함 ( Composition ) 


4. 설계 원칙 적용 ( SOLID 원칙 )
- S : 단일 책임 원칙 ( SRP )
- O : 개방 - 폐쇠 원칙 ( OCP ) 
- L : 리스코프 치환 원칙 ( LSP )
- I : 인터페이스 분리 원칙 ( ISP )
- D : 의존 역전 원칙 ( DIP )

5. 계층 구조 설계 ( Layered Architeture )
- Controller : 외부 요청 처리 ( Rest API )
- Service : 비즈니스 로직 처리
- Repository / DAO : 데이터 저장/조회
- Entity/DTO : 데이터 표현 모델

6. 디자인 패턴 적용
- 필요한 곳에 디자인 패턴 적용하여 재사용성과 유연성 확보

IOC/DI 란 ?

- IoC ( Inversion of Control , 제어의 역전 ) : 객체의 생성, 초기화, 생명주기 관리 등의 *제어권을 개발자가 아닌 프레임워크*가 갖는 것을 의미한다.

제어권을 개발자가 가지는 예시

```java
UserService userService = new UserService();
```

IoC 방식

```java
@Autowired
private UserService userService;
```

- DI ( Dependency Injection, 의존성 주입 ) : 객체가 필요로 하는 의존 객체를 직접 생성하지 않고, 외부에서 주입 받는 것
- 즉, DI는 IoC를 실현하는 구체적인 방법 중 하나이다.

| 구분      | 설명                                                   |
| ------- | ---------------------------------------------------- |
| 객체 생성   | `@Component`, `@Service`, `@Repository` 등을 보고 빈으로 등록 |
| 의존성 해결  | 필요한 객체를 찾아서 주입 (DI)                                  |
| 생명주기 관리 | 생성 ~ 소멸까지 Spring이 제어 (IoC)                          |

IoC/DI 요약

- IoC는 큰 개념, DI는 IoC의 실현 방식입니다.
- Spring에서는 IoC Container(ApplicationContext)가 객체를 생성하고, DI를 통해 필요한 객체를 알아서 주입해줍니다.
- 객체지향 원칙 중 **DIP(의존 역전 원칙)**을 자연스럽게 지키게 해줍니다.

| 구분      | 설명                                                   |
| ------- | ---------------------------------------------------- |
| 객체 생성   | `@Component`, `@Service`, `@Repository` 등을 보고 빈으로 등록 |
| 의존성 해결  | 필요한 객체를 찾아서 주입 (DI)                                  |
| 생명주기 관리 | 생성 \~ 소멸까지 Spring이 제어 (IoC)                          |