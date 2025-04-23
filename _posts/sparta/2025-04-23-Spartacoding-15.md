---
layout: post
title: Thread
subtitle: Thread
categories: TIL
tags: [TIL]
---

## Thread
- 프로그램 내에서 독립적으로 실행되는 하나의 작업 단위이다.
- 싱글 쓰레드는 한번에 하나의 작업만 처리하지만, 멀티 쓰레드는 여러 작업을 동시에 처리 할 수 있다.
- 멀티 쓰레드를 활용하면 여러 작업을 병렬로 수행할 수 있어 처리 성능을 향상시킬 수 있다.


### 싱글 쓰레드 (Single Thread)
- 한 명의 일꾼이 작업을 처리하는 것과 같다.
- 한명의 일꾼이기 때문에 여러 개의 작업이 있다면 순차적으로 처리한다.
- main() 메서드는 프로그램 시작과 동시에 생성되는 하나의 쓰레드이다.


#### 싱글 쓰레드 예제

```java
        System.out.println("::: main 쓰레드 시작");
        String threadName = Thread.currentThread().getName();

        // 하나의 작업 : 숫자 0 ~ 9 까지 출력
        for(int i=0; i< 10;i++){
            System.out.println("threadName  = " + threadName + " - " + i );
            try {
                Thread.sleep(500); // 0.5초 딜레이
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        // 순차적으로 실행
        for(int i=0; i< 10;i++){
            System.out.println("threadName  = " + threadName + " - " + i );
            try {
                Thread.sleep(500); // 0.5초 딜레이
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("::: 작업 끝 :::");
    }
        // 결과값
        // threadName  = main - 0
        // threadName  = main - 1
        // threadName  = main - 2
        // threadName  = main - 3
        // threadName  = main - 4  
        // threadName  = main - 5
        // threadName  = main - 6
        // threadName  = main - 7
        // threadName  = main - 8
        // threadName  = main - 9
        // ::: 작업 끝 :::
```

### 멀티 쓰레드 (Multi Thread)
- 작업을 처리할 수 있는 여러 명의 일꾼을 의미
- 멀티 쓰레드를 이용하면 병렬(동시)에 처리할 수 있다.
- Thread 클래스를 상속받아 쓰레드를 구현할 수 있다.
- `Thread.run()` 메서드를 오버라이드 해서 `쓰레드`가 수행할 작업을 정의할 수 있습니다.
- `start()` 메서드를 호출하면 새로운 쓰레드가 생성되고 `run()` 의 작업 내용이 실행됩니다.

#### 멀티쓰레드 예제

```java
// Mythread class
public class Mythread extends Thread {

    @Override
    public void run() {
        String threadName = Thread.currentThread().getName();
        System.out.println("현재 시작된 쓰레드");

        for (int i = 0; i < 10; i++) {
            System.out.println("현재 쓰레드 : " + threadName + " - " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("종료된 쓰레드 : " + threadName);
    }
}
```

---

```java
        System.out.println("::: main 쓰레드 시작");

        Mythread thread0 = new Mythread();
        Mythread thread1 = new Mythread();

        // 1. thread0 시작
        System.out.println("thread0 시작");
        thread0.start();

        // 2. thread1 시작
        System.out.println("thread1 시작");
        thread1.start();

        System.out.println("::: main 쓰레드 종료");
        // 결과값
//      ::: main 쓰레드 시작
//      thread0 시작
//      thread1 시작
//      ::: main 쓰레드 종료
//      현재 시작된 쓰레드
//      현재 시작된 쓰레드
//      현재 쓰레드 : Thread-1 - 0
//      현재 쓰레드 : Thread-0 - 0
//      현재 쓰레드 : Thread-0 - 1
//      현재 쓰레드 : Thread-1 - 1
//      현재 쓰레드 : Thread-0 - 2
//      현재 쓰레드 : Thread-1 - 2
//      현재 쓰레드 : Thread-1 - 3
//      현재 쓰레드 : Thread-0 - 3
//      현재 쓰레드 : Thread-1 - 4
//      현재 쓰레드 : Thread-0 - 4
//      현재 쓰레드 : Thread-1 - 5
//      현재 쓰레드 : Thread-0 - 5
//      현재 쓰레드 : Thread-0 - 6
//      현재 쓰레드 : Thread-1 - 6
//      현재 쓰레드 : Thread-0 - 7
//      현재 쓰레드 : Thread-1 - 7
//      현재 쓰레드 : Thread-0 - 8
//      현재 쓰레드 : Thread-1 - 8
//      현재 쓰레드 : Thread-0 - 9
//      현재 쓰레드 : Thread-1 - 9
//      종료된 쓰레드 : Thread-1
//      종료된 쓰레드 : Thread-0 
```

### Join() 
- 특정 쓰레드가 끝날 때까지 기다리게 하는 메서드이다.

#### Join() 예제

```java
        System.out.println("::: main 쓰레드 시작");

        Mythread thread0 = new Mythread();
        Mythread thread1 = new Mythread();

        long startTime = System.currentTimeMillis();

        // 1. thread0 시작
        System.out.println("thread0 시작");
        thread0.start();

        // 2. thread1 시작
        System.out.println("thread1 시작");
        thread1.start();

        // main 쓰레드를 대기 시키기
        try {
            thread0.join();
            thread1.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        long endTime = System.currentTimeMillis();
        long totleTime = endTime - startTime;
        System.out.println("totleTime = " + totleTime + "ms");
        System.out.println("::: main 쓰레드 종료");
        // 결과값 
// ::: main 쓰레드 시작
// thread0 시작
// thread1 시작
// 현재 시작된 쓰레드
// 현재 시작된 쓰레드
// 현재 쓰레드 : Thread-0 - 0
// 현재 쓰레드 : Thread-1 - 0
// 현재 쓰레드 : Thread-1 - 1
// 현재 쓰레드 : Thread-0 - 1
// 현재 쓰레드 : Thread-1 - 2
// 현재 쓰레드 : Thread-0 - 2
// 현재 쓰레드 : Thread-0 - 3
// 현재 쓰레드 : Thread-1 - 3
// 현재 쓰레드 : Thread-1 - 4
// 현재 쓰레드 : Thread-0 - 4
// 현재 쓰레드 : Thread-1 - 5
// 현재 쓰레드 : Thread-0 - 5
// 현재 쓰레드 : Thread-1 - 6
// 현재 쓰레드 : Thread-0 - 6
// 현재 쓰레드 : Thread-1 - 7
// 현재 쓰레드 : Thread-0 - 7
// 현재 쓰레드 : Thread-1 - 8
// 현재 쓰레드 : Thread-0 - 8
// 현재 쓰레드 : Thread-1 - 9
// 현재 쓰레드 : Thread-0 - 9
// 종료된 쓰레드 : Thread-1
// 종료된 쓰레드 : Thread-0
// totleTime = 5067ms
// ::: main 쓰레드 종료
```

---

### Runnable 인터페이스
- 함수형 인터페이스
- 쓰레드를 구현하기 위한 템플릿에 해당한다
- 왜 쓰는가? : Thread를 상속받으면 다중 상속이 안되기때문에 일반적으로 Runnable을 사용한다.


#### Runnable 예제

```java
// MyNewClass class
        public void printMessange(){
                System.out.println("MyNewClass의 기능을 실행합니다.");
    }
```

---

```java
// Myrannable class
public class Myrannable extends MyNewClass implements Runnable{

    @Override
    public void run() {
        String threadName = Thread.currentThread().getName();
        System.out.println("현재 시작된 쓰레드");

        for (int i = 0; i < 10; i++) {
            System.out.println("현재 쓰레드 : " + threadName + " - " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("종료된 쓰레드 : " + threadName);
    }
}
```

---

```java
// Main class
        Myrannable myTask = new Myrannable();

        //기능을 확장해서 사용
        myTask.printMessange();

        Thread thread0 = new Thread(myTask);
        Thread thread1 = new Thread(myTask);

        thread0.start();
        thread1.start();
        // 결과값 
// MyNewClass의 기능을 실행합니다.
// 현재 시작된 쓰레드
// 현재 시작된 쓰레드
// 현재 쓰레드 : Thread-0 - 0
// 현재 쓰레드 : Thread-1 - 0
// 현재 쓰레드 : Thread-0 - 1
// 현재 쓰레드 : Thread-1 - 1
// 현재 쓰레드 : Thread-1 - 2
// 현재 쓰레드 : Thread-0 - 2
// 현재 쓰레드 : Thread-1 - 3
// 현재 쓰레드 : Thread-0 - 3
// 현재 쓰레드 : Thread-1 - 4
// 현재 쓰레드 : Thread-0 - 4
// 현재 쓰레드 : Thread-1 - 5
// 현재 쓰레드 : Thread-0 - 5
// 현재 쓰레드 : Thread-1 - 6
// 현재 쓰레드 : Thread-0 - 6
// 현재 쓰레드 : Thread-1 - 7
// 현재 쓰레드 : Thread-0 - 7
// 현재 쓰레드 : Thread-0 - 8
// 현재 쓰레드 : Thread-1 - 8
// 현재 쓰레드 : Thread-0 - 9
// 현재 쓰레드 : Thread-1 - 9
// 종료된 쓰레드 : Thread-1
// 종료된 쓰레드 : Thread-0
```

--- 

### 느낀점
아직은 활용할 방법이 생각나지 않지만 알고있으면 나중에 써먹을 곳이 생기겠지?