---
layout: post
title: Lambda
subtitle: Lambda
categories: TIL
tags: [TIL]
---

## 익명 클래스
- 익명 클래스는 이름이 없는 클래스를 익명 클래스하고 한다.
- 별도의 클래스 파일을 만들지 않고 코드 내에서 일회성으로 정의해 사용하기 때문에 이름이 없다.
- 인터페이스, 클래스의 구현과 상속을 활용해 익명 클래스를 구현할수 있다
-> 람다에서는 인터페이스를 사용한 익명 클래스가 활용된다. 

### 인터페이스를 활용한 익명 클레스 예제

```java
// Calculator class
@FunctionalInterface // 함수형 인터페이스 설정
public interface Calculator {
    int sum(int a, int b);

}
```

---

```java
// 인터페이스를 활용한 익명클래스 만들기
        Calculator calculator1 = new Calculator() {
            @Override
            public int sum(int a, int b) {
                return a + b;
            }
        };
        int ret1 = calculator1.sum(2, 2);
        System.out.println("ret1 = " + ret1);
```

## Lambda
- 익명 클래스를 더 간결하게 표현하는 문법
- 람다 함수는 프로그래밍 언어에서 사용되는 개념으로 익명 함수(Anonymous functions)를 지칭하는 용어입니다.
- 현재 사용되고 있는 람다의 근간은 수학과 기초 컴퓨터과학 분야에서의 람다 대수이다. 
- 람다 대수는 간단히 말하자면 수학에서 사용하는 함수를 보다 단순하게 표현하는 방법입니다.


### Lambda 장점

1. 코드의 간결성 - 람다를 사용하면 불필요한 반복문의 삭제가 가능하며 복잡한 식을 단순하게 표현할 수 있습니다.

2. 지연연산 수행 - 람다는 지연연산을 수행 함으로써 불필요한 연산을 최소화 할 수 있습니다.

3. 병렬처리 가능 - 멀티쓰레디를 활용하여 병렬처리를 사용 할 수 있다.

### Lambda 단점

1. 람다식의 호출이 까다롭습니다

2. 람다 stream 사용 시 단순 for문 혹은 while문 사용 시 성능이 떨어집니다.
-> 단순 반복이라면 전통적인 for / while이 여전히 더 빠르고 안정적합니다.
-> (하지만 복잡한 스트림 처리나 병렬 처리가 필요하다면 lambda + Stream이 매우 유용!)

3. 불필요하게 너무 사용하게 되면 오히려 가독성을 떨어 뜨릴 수 있습니다.


### Lambda 사용시 주의사항
1. 람다는 익명 클래스가 아니다.
2. 람다는 상태(status)를 가지지 않는 것이 좋다.
3. Checked Exception 처리 어려움
4. 너무 복잡한 람다는 가독성 저하 가능성이 있다

- 람다는 매우 강력한 도구지만 남용하면 오히려 코드 품질을 해칠 수 있으므로 신중하게 사용해야 합니다. 특히 상태 공유, 예외 처리, 디버깅 문제 등을 잘 인지해야한다.

### Lambda 예제

```java
// 인터페이스를 활용한 람다식 만들기
        Calculator calculator2 = (a, b) -> a + b;
        int ret2 = calculator2.sum(3, 3);
        System.out.println("ret2 = " + ret2);

        // 람다식을 매개변수로 전달하는 방법 :
        // 1. 익명클래스를 변수에 담아 매개변수로 전달
        Calculator cal1 = new Calculator() {
            @Override
            public int sum(int a, int b) {
                return a + b;
            }
        };
        
        int ret3 = calculatoe(3,3,cal1);
        System.out.println("ret3 = " + ret3);
        
        // 2. 람다식을 변수에 담아 매개변수로 전달
        Calculator cal2 = (a,b) -> a+b;
        int ret4 = calculatoe(4,4,cal2);
        System.out.println("ret4 = " + ret4);

        // 3. 람다식을 직접 매개변수로 전달
        int ret5 = calculatoe(5,5,(a,b)->a+b);
        System.out.println("ret5 = " + ret5);
    }

    public static int calculatoe(int a, int b, Calculator calculator) {
        return calculator.sum(a, b);
    }

}
```

---

## 느낀점
람다를 알면 좀 더 간편하게 코드를 짤 수 있고, 또 편하게 사용할 수 있다. 하지만 과도한 사용은 오히려 가독성을 저하시키고 오히려 문제를 발생시킬 수 있으니 정확하게 인지하고 사용해야 된다.