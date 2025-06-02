---
layout: post
title: SOLID 원칙
subtitle: SOLID
categories: TIL
tags: [TIL]
---

## SOLID 원칙 정리
- SOLID는 객체지향 설계의 5가지 핵심 원칙을 의미하며, 유지보수성과 확장성을 고려한 유연한 소프트웨어 설계를 가능하게 한다. 이 원칙은 로버트 C. 마틴(Robert C. Martin, 일명 'Uncle Bob')이 제안했다.

### 단일 책임 원칙 (Single Responsibility Principle, SRP)
- 하나의 클래스는 하나의 책임만 가져야 하며, 클래스는 오직 하나의 변경 이유만 가져야 한다.
- 클래스가 여러 책임을 가지면, 하나의 변경이 다른 기능에 예기치 않은 영향을 줄 수 있다. 이는 응집도가 낮고, 유지보수가 어려운 코드로 이어진다.


```java
// 책임이 뒤섞인 경우
class ReportManager {
    public void generateReport() { ... }
    public void saveToFile() { ... }
    public void printReport() { ... }
}

// 책임 분리
class ReportGenerator {
    public void generate() { ... }
}
class FileSaver {
    public void save() { ... }
}
class ReportPrinter {
    public void print() { ... }
}
```

### 위반 사례
- UserService가 사용자 등록, 로그인, 로그 기록, 이메일 발송까지 모두 수행한다면 단일 책임 원칙을 위반한 것이다.

### 핵심 요점
- "책임"이란 변경의 이유이다.
- 클래스는 하나의 책임만 가지도록 설계한다.

## 개방-폐쇄 원칙 (Open/Closed Principle, OCP)
- 소프트웨어 구성 요소는 확장에는 열려 있어야 하고, 변경에는 닫혀 있어야 한다.
- 기능 추가 시 기존 코드를 수정하게 되면, 새로운 버그가 발생할 위험이 있다. 따라서 확장은 가능하지만 기존 코드를 건드리지 않도록 설계해야 한다.

```java
interface DiscountPolicy {
    int calculateDiscount(int amount);
}

class RateDiscountPolicy implements DiscountPolicy {
    public int calculateDiscount(int amount) {
        return amount * 10 / 100;
    }
}

class OrderService {
    private final DiscountPolicy discountPolicy;

    public OrderService(DiscountPolicy discountPolicy) {
        this.discountPolicy = discountPolicy;
    }

    public int calculateFinalPrice(int amount) {
        return amount - discountPolicy.calculateDiscount(amount);
    }
}
```
### 위반 사례
- OrderService 내부에 할인 정책에 따라 조건문(if/else)을 사용하고, 정책이 바뀔 때마다 해당 로직을 수정하는 경우.

### 핵심 요점
- 인터페이스나 추상 클래스를 활용해 변경 없이 확장할 수 있도록 한다.
- 다형성과 의존성 주입을 적극 활용한다.

## 리스코프 치환 원칙 (Liskov Substitution Principle, LSP)
- 자식 클래스는 언제나 자신의 부모 클래스가 사용되는 곳에서 문제없이 사용될 수 있어야 한다.
- 상속은 "is-a" 관계에 기반하여 사용되지만, 기능이나 의미가 다를 경우 잘못된 상속이 될 수 있다. 이는 프로그램의 안정성을 해칠 수 있다.

```java
class Bird {
    public void fly() { ... }
}

class Sparrow extends Bird {
    public void fly() { ... }
}
```

--- 

```java

위반 사례

class Penguin extends Bird {
    public void fly() {
        throw new UnsupportedOperationException();
    }
}
```
- 펭귄은 날 수 없는 새이므로, Bird를 상속받는 것은 논리적으로 맞지 않는다. 이는 LSP를 위반한 사례이다.

### 핵심 요점
-자식 클래스는 부모 클래스의 기능을 그대로 사용할 수 있어야 하며, 오작동을 유발해서는 안 된다.
- 상속 시에는 행동의 일관성과 의미를 고려해야 한다.

## 인터페이스 분리 원칙 (Interface Segregation Principle, ISP)
- 클라이언트는 자신이 사용하지 않는 메서드에 의존하지 않아야 한다.
- 너무 많은 기능을 가진 인터페이스는 구현체에 불필요한 부담을 준다. 필요한 기능만 갖춘 인터페이스를 제공함으로써 유연성을 높일 수 있다.


```java
interface Printer {
    void print();
}

interface Scanner {
    void scan();
}

class MultiFunctionPrinter implements Printer, Scanner {
    public void print() { ... }
    public void scan() { ... }
}

class BasicPrinter implements Printer {
    public void print() { ... }
}
```
---

```java

위반 사례


interface Machine {
    void print();
    void scan();
}

class OldPrinter implements Machine {
    public void print() { ... }
    public void scan() {
        throw new UnsupportedOperationException();
    }
}
```
- OldPrinter는 스캔 기능을 지원하지 않는데도 scan 메서드를 강제로 구현해야 한다.

### 핵심 요점
- 하나의 큰 인터페이스보다는 여러 개의 작은 인터페이스를 제공한다.
- 구현체가 필요하지 않은 기능에 의존하지 않도록 한다.

## 의존 역전 원칙 (Dependency Inversion Principle, DIP)
- 고수준 모듈은 저수준 모듈에 의존해서는 안 되며, 둘 다 추상화에 의존해야 한다. 추상화는 구체적인 구현에 의존하지 않아야 한다.
- 구현체에 직접 의존하면 재사용성과 테스트가 어렵다. 대신 추상화에 의존하고, 구현체는 런타임에 주입되도록 구성해야 한다.


```java
interface MessageSender {
    void send(String message);
}

class EmailSender implements MessageSender {
    public void send(String message) { ... }
}

class NotificationService {
    private final MessageSender sender;

    public NotificationService(MessageSender sender) {
        this.sender = sender;
    }

    public void notify(String message) {
        sender.send(message);
    }
}
```

---

```java

위반 사례

class NotificationService {
    private final EmailSender sender = new EmailSender();

    public void notify(String message) {
        sender.send(message);
    }
}
```
- NotificationService가 EmailSender에 직접 의존하면, 다른 메시지 전송 방식으로 전환하기 어렵다.

### 핵심 요점
- 고수준 모듈은 인터페이스(추상화)에 의존해야 한다.
- 의존성 주입(DI)을 통해 구현체는 외부에서 주입되도록 한다.

## 전체 요약

