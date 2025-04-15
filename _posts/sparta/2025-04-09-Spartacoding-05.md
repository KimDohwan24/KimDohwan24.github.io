---
layout: post
title: 객체지행 이해하기
subtitle: static , final
categories: TIL
tags: [TIL]
---

## Static  
* 모든 객체가 같은 값을 공유한다.   
* static 변수와 메서드는 한번만 생성되고 Method Area에 저장된다.   

### 인스턴스 맴버 (인스턴스 변수 + 인스턴스 메서드 )
* 객체를 만들때마다 생성되는 변수와 메서드이다.  
* 각 객체가 개별적으로 값을 가진다 ( 공유 X )   
* 인스턴스는 Heap 영역에 위치한다.   

### 인스턴스 변수
* 객체가 생성될 때마다 따로 만들어지는 변수   
( 객체를 생성한 후 접근할 수 있다. )

### 클래스 변수
* 클래스가 로드될때 한번만 생성
* 모든 객체가 공유하는 변수이다.   
* Heap이 아니라 Mthod Area에 저장된다.   
( 객체를 만들지 않아도 "클래스명.변수명"으로 접근 가능)

### Static, 인스턴스 맴버 예제 

```java
// Main class 

// static 변수, 메서드 활용
        System.out.println("static 변수 활용 : " + Person.population);
        Person.printPopulation();

        // 인스턴스 멤버 활용
        Person p1 = new Person();
        Person p2 = new Person();

        // 인스턴스 변수 활용
        p1.name = "kim";
        p2.name = "Steve";

        // 인스턴스 메서드 활용
        p1.pringName();
        p2.pringName();

        Person.printPopulation();
        // static : 모든 객체가 같은 값을 공유한다 -> 공용 게시판이다.
```

---

```java
// Person class

public class Person {
    // 인스턴스 변수
    String name ;
            
    // static 변수
    static int population = 0;

    Person(){
        population++;
    }
    
    // 인스턴스 매서드
    void pringName(){
        System.out.println("나의 이름은 = " + this.name + "입니다.");
    }
    
    // static 메서드
    static void printPopulation(){
        System.out.println("현재 인구 수 = " + population);
    }
}

```
---

## final 
* 변수는 변경이 불가능하게 만든다
* 클래스는 상속할 수 없게 만든다
* 메서드는 수정할 수 없게 만든다.

## Constant
* 상수는 변하지 않고 일정한 값을 갖는 수이다.

## 불변객체
불변객체는 내부 상태를 변경할 수 없는 객체이다
final을 속성에 활용한다
세터 없이 설계한다
변경이 필요한 경우 새로운 객체를 만들어야 한다.
ex ) String , Integer , 래퍼클래스 등등..


### final, Constant, 불변객체 예제

```java
// Main class

public class Main {
    public static void main(String[] args) {
        // final 활용
        final int a = 1;
//        a= 2;
        System.out.println("a = " + a);

        // 상수 활용 방법
        System.out.println("PI 값은 : " + Circle.PI);

        // 불변 객체 활용
        final Circle c1 = new Circle(2);
        // 참조 변경을 막지만 내부상태 변경은 막지 않는다.
//        c1 = new Circle(5)
//        c1.radius = 5;
        System.out.println("c1 = " + c1);

        // 불변 객체의 내부상태가 변경이 필요한 경우
        Circle c2 = new Circle(10);          // 생성자
        Circle c3 = c2.changeRadius(20); // 기능을 활용
    }
}

```

---

```java
// Circle class

public class Circle {
    // 속성
    final static double PI = 3.14159;
    final double radius;

    // 생성자
    Circle(double radius){
        this.radius = radius;
    }

    //기능
    Circle changeRadius(double newRadius){
        return new Circle(newRadius);
    }
}
```

## 인터페이스 
* 인터페이스를 하는 이유 : 모든 설계에 표준이 있는 이유와 같은 이유이다.
* 개발자마다 서로 다른 방식으로 메서드를 만들면 일관성이 깨질 수 있기 때문이다.

### 인터페이스 예제

```java
// Car class

public class Circle {
    // 속성
    final static double PI = 3.14159;
    final double radius;

    // 생성자
    Circle(double radius){
        this.radius = radius;
    }

    //기능
    Circle changeRadius(double newRadius){
        return new Circle(newRadius);
    }
}

```
---

```java
// LuxuryCar class

public class LuxuryCar implements Car {
    @Override
    public void drive() {
        System.out.println("멋지게 이동합니다");
    }

    @Override
    public void stop() {
        System.out.println("멋지게 정지합니다");
    }

    void charge(){
        System.out.println("차량을 충전합니다.");
    }

//    void move(){
//        System.out.println("멋지게 이동합니다");
//    }
//    void stop(){
//        System.out.println("멋지게 정지합니다");
//    }
//
}

```

---

```java
// SpeedCar class

public class SpeedCar implements Car{
    @Override
    public void drive() {
        System.out.println("빠르게 이동합니다");
    }

    @Override
    public void stop() {
        System.out.println("빠르게 정지합니다");
    }

    void autoParking(){
        System.out.println("자동 주차 기능을 가동합니다.");
    }
//    void drive(){
//        System.out.println("빠르게 주행합니다");
//    }
}
```

---

```java
// Main class

public class Main {
    public static void main(String[] args) {
        // 인스턴스화
        LuxuryCar luxuryCar = new LuxuryCar();
        SpeedCar speedCar = new SpeedCar();

        // 활용
//        luxuryCar.move();
//        luxuryCar.stop();
//
//        speedCar.move();
//        speedCar.stop();
//        speedCar.drive();

        // 인터페이스 활용
        luxuryCar.drive();
        speedCar.drive();

        luxuryCar.stop();
        speedCar.stop();

        luxuryCar.charge();
        speedCar.autoParking();
    }
}
```