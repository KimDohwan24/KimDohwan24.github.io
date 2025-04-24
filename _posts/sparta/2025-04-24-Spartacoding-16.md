---
layout: post
title: 동기와 비동기
subtitle: Synchronous, Asynchronous
categories: TIL
tags: [TIL]
---

## 동기식 처리 ( Synchronous )
- 동기식 처리 모델(Synchronous processing model)은 직렬적으로 태스크(task)를 수행한다.
- 순차적으로 실행되며 어떤 작업이 수행중이면 다음 작업은 대기한다.

### 동기식 처리 코드

```java
public class Synchro {
	public static void main(String[] args) {
		
		method1();
		method2();
		method3();
		
	}
	
	public static void method1() {
		System.out.println("method1");
	}
	public static void method2() {
		System.out.println("method2");
	}
	public static void method3() {
		System.out.println("method3");
	}
	
}
// 결과값
// method1
// method2
// method3
```

- 프로그램을 몇 번을 다시 시작해도 순서는 변하지않는다.
- 자바의 특성으로 위에서 아래로 내려오면서 코드가 main문을 실행하기 때문이다.

## 비동기식 처리 ( Asynchronous )

- 비동기식 처리 모델 (Asynchronous processing model 또는 Non-Blocking processing model)은 병렬적으로 태스크를 수행한다.
- 태스크가 종료되지 않은 상태라 하더라도 대기하지 않고 다음 태스크를 실행한다.
- 예를 들어 서버에서 데이터를 가져와서 화면에 표시하는 태스크를 수행할 때, 서버에 데이터를 요청한 이후 서버로부터 데이터가 응답될 때까지 대기하지않고 즉시 다음 태스크를 수행한다.
- 이후 서버로부터 데이터가 응답되면 이벤트가 발생하고 이벤트 핸들러가 데이터를 가지고 수행할 태스크를 계속 수행한다.
- Java에서 대표적으로 Multi-Thread의 동작이 비동기식으로 작동한다.

### 비동기식 처리 코드
```java
public class Asynchro {
	public static void main(String[] args) {
	
	
		Thread t = new Thread(()->{
			method1();
		});
		Thread t2 = new Thread(()->{
			method2();
		});
		Thread t3 = new Thread(()->{
			method3();
		});
		
		
		t.start();
		t2.start();
		t3.start();
		
	}
	
	public static void method1() {
		System.out.println("method1");
	}
	public static void method2() {
		System.out.println("method2");
	}
	public static void method3() {
		System.out.println("method3");
	}
}
// 결과값
// method1
// method3
// method2
```

- 위의 코드를 보면 결과값이 "method1" -> "method2" -> "method3" 순서로 나올거 같지만, 프로그램을 실행할 때 마다 결과값이 달라진다.

### 비동기식의 장단점
- 장점 : 요청에 따른 결과가 반환되는 시간 동안 다른 작업을 수행할 수 있어 빠르다.
- 단점 : 동기식보다 설계가 복잡하고 논증적(독자들을 설득시키기 위한 목적으로 정당한 근거나 일반적인 원리를 들어 주장을 펼치는 것)이다.

--- 

## 느낀점
- 비동기와 동기식 처리를 정확히 알아야겠다.


## 블로킹(Blocking) / 논블로킹(Non-Blocking)