---
layout: post
title: Spring Bean
subtitle: Bean
categories: TIL
tags: [TIL]
---

## Bean 이란?
- 빈( Bean )은 스프링 컨테이너에 의해 관리되는 재사용 가능한 소프트웨어 컴포넌트이다.
- 즉 스프링 컨테이너가 관리하는 자바 객체를 뜻하며, 하나 이상의 빈(Bean)을 관리한다

### 스프링 컨테이너?
- 스프링 컨테이너는 스프링 빈의 생명 주기를 관리하며, 생성된 스프링 빈들에게 추가적인 기능을 제공하는 역할을 한다.
- IoC와 DI의 원리가 스프링 컨테이너에 적용된다.

### Bean 핵심 개념
| 용어               | 설명                                     |
| ---------------- | -------------------------------------- |
| **Bean**         | Spring 컨테이너가 생성하고 관리하는 객체              |
| **IoC (제어의 역전)** | 객체 생성과 의존성 주입을 개발자가 아닌 Spring 컨테이너가 담당 |
| **DI (의존성 주입)**  | Bean 간의 의존 관계를 자동으로 주입해주는 메커니즘         |

### Bean 등록 방식
1. 어노테이션 기반 등록 ( 주로 이 방법을 많이 사용 )   

| 어노테이션         | 대상     | 역할                                  |
| ------------- | ------ | ----------------------------------- |
| `@Component`  | 일반 클래스 | 컴포넌트 스캔 대상                          |
| `@Service`    | 서비스 계층 | 의미적으로 서비스임을 나타냄 (`@Component`의 특수화) |
| `@Repository` | DAO 계층 | DB 예외를 Spring 예외로 변환                |
| `@Controller` | 웹 컨트롤러 | HTTP 요청 처리 (Spring MVC 전용)          |

- 이 어노테이션들이 붙은 클래스는 Spring이 자동적으로 Bean 에 등록한다
- 스캔 대상은 `@Component` 범위 안이어야 한다.

2. 자바 설정 클래스 (`@Configuration`)

```java
@Configuration
public class AppConfig {

    @Bean
    public MyService myService() {
        return new MyService();
    }
}
```

- 이 경우 `@Bean` 메서드의 리턴 객체가 Spring bean에 등록된다.

### Bean 사용 ( 의존성 주입 )
- Bean을 사용하는 곳에서는 다음 방식으로 주입할 수 있다.

```java
@Autowired
private MyService myService;

-------------------------------------

private final MyService myService;

@Autowired
public MyController(MyService myService) {
    this.myService = myService;
}
```

### Spring Bean 요약
| 개념          | 설명                                                              |
| ----------- | --------------------------------------------------------------- |
| Spring Bean | Spring 컨테이너가 생성하고 관리하는 객체                                       |
| 등록 방식       | `@Component`, `@Service`, `@Repository`, `@Controller`, `@Bean` |
| 관리 이유       | 객체 생명주기 관리, DI를 통한 유연한 설계, 테스트 용이성                              |
