---
layout: post
title: 예외처리 ( Exception )
subtitle: Exception, throw, try, catch
categories: TIL
tags: [TIL]
---

## 예외처리
* 예상치 못한 상황이 발생하는 경우

### 의도하지 않은 예외
```java
        // 의도하지 않은 예외
       int ret = 10/0;
       System.out.println("ret = " + ret);
       System.out.println("프로그램 종료");
        // 결과값
        // Exception in thread "main" java.lang.ArithmeticException: / by zero
	    // at chapter3.exception.Main.main(Main.java:8)
        // Process finished with exit code 1
```

* 이런식으로 예외처리를 하지 않은 경우 그 이후의 코드는 실행되지 않는다.   

### 의도한 예외
* throw를 활용해 특정 상황에서 예외를 명확하게 정의하고 제어할 수 있다.

```java
    // 의도적인 예외 - throw
    int age = 10;
    if( age < 18){
        throw new IllegalArgumentException("미성년자는 접근할 수 없습니다.");
    }
    System.out.println("프로그램 종료");
    // 결과값 
    // Exception in thread "main" java.lang.IllegalArgumentException: 미성년자는 접근할 수 없습니다.
	// at chapter3.exception.Main.main(Main.java:13)
```
## RuntimeException - UncheckedException
* RuntimeException을 상속받는 모든 예외를 UncheckedException라고 한다.   
* 예외처리를 컴파일러가 확인하지 않는다.   

### RuntimeException - UncheckedException 예
* 존재하지 않는 파일의 이름을 입력(FileNotFoundException)   
* 실수로 클래스의 이름을 잘못 적음(ClassNotFoundException)



### RuntimeException - UncheckedException (try - catch)예제
```java 
// ExceptionPractice class

    public class ExceptionPractice {
        public void callUncheckedException(){
            if(true){
                System.out.println("언제크 예외 발생");
                throw new RuntimeException();
            }

            try {

            } catch (RuntimeException e) {
                System.out.println("언체크 예외 처리");
            }
        }
    }
```
---

```java
    // Main class
    ExceptionPractice exceptionPractice = new ExceptionPractice();

    try {
        exceptionPractice.callUncheckedException();
    } catch (RuntimeException e) {
        System.out.println("언체크 예외 처리");
    }
    System.out.println("프로그램 종료");

    // 결과값 
//     언제크 예외 발생
//     언체크 예외 처리
//     프로그램 종료
```

## Exception - CheckedException
* Exception 클래스를 직접 상속받는 모든 예외를 CheckedException라고 한다.   
* RuntimeException과 RuntimeException을 상속받은 예외는 제외한다.   
* 예외처리를 컴파일러가 확인해준다.   

### Exception - CheckedException 예
* 배열의 범위를 벗어난(ArrayIndexOutOfBoundsException)
* 값이 null이 참조변수를 참조(NullPointerException)


### Exception - CheckedException (try - catch)예제
```java
// ExceptionPractice class
    public void callCheckedException() throws Exception{
           if(true){
                System.out.println("체크 예외 발생");
                throw new Exception();
            }

            try{
                if(true){
                    System.out.println("체크 예외 발생");
                    throw new Exception();
                }
            } catch (Exception e){
            System.out.println("체크 예외 처리");
            }
    }
```

---

```java
    // Main class
    try{
        if(true){
            exceptionPractice.callCheckedException();
        }
    } catch (Exception e){
        System.out.println("체크 예외 처리");
    }
    System.out.println("프로그램 종료");
    
    // 결과값 
//     체크 예외 발생
//     체크 예외 처리
//     프로그램 종료
```

## 느낀점
항상 예외처리는 생각안하고 어거지로 프로그램을 만들다가 오류가 생기면 무슨 오류인지 찾기 바빴는데, 이러한 이유들이 있고 추후 문제가 생길 시 유지보수가 어렵다고 생각이 되어 앞으로는 어떠한 오류가 발생할 지 미리 예측을 해서 좀더 나은 프로그램을 만들 수 있도록 노력하자.