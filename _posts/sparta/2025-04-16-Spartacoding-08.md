---
layout: post
title: 클래스 하나만으로 계산기 만들기
subtitle: Calculator
categories: TIL
tags: [TIL]
---

## 계산기 만들기
객체지향에 대해 배웠으니 스탭별 계산기를 만들어보자.

### 계산기
클래스 하나로 계산기를 만들어 보자     

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        // 초기값 설정
        int sum = 0;
        boolean check = true;

        while (check) {
            System.out.println("첫번째 양의 정수를 입력해주세요. :");
            int a = scan.nextInt();
            if (a < 0) {
                System.out.println("양의 정수를 입력하세요");
                break;
            }

            System.out.println("두번째 양의 정수를 입력해주세요. :");
            int b = scan.nextInt();

            if (b < 0) {
                System.out.println("양의 정수를 입력하세요");
                break;
            }

            // 버퍼에 남은 공백이 있어 입력하지 않아서 바로 넘어가짐
            // 버퍼는 데이터를 한 곳에서 다른 한 곳으로 전송하는 동안 일시적으로 그 데이터를 보관하는 메모리의 영역 = Queue ( 큐 )
            System.out.println("사칙연산중 하나를 입력해주세요 :");
            scan.nextLine(); // 버퍼에 남은 공백이 없게 처리함.
            String c = scan.nextLine();

            if (c.equals("+")) {
                sum = a + b;
                System.out.println(sum);
            } else if (c.equals("-")) {
                sum = a - b;
                System.out.println(sum);
            } else if (c.equals("/")) {
                sum = a / b;
                System.out.println(sum);
            } else if (c.equals("*")) {
                sum = a * b;
                System.out.println(sum);
            } else System.out.println("사칙연산을 입력해주세요.");

            System.out.println("계속 계산하시겠습니까? : (Y,N)");
            String str = scan.nextLine();

            if (str.equals("Y")) {
                check = true;
            } else if (str.equals("N")) {
                check = false;
                break;
            } else {
                System.out.println("Y나 N으로 입력해주세요");
                break;
            }
        }
    }
}
```

이런식으로 만들수 있었는데 문제가 하나 발생했다.

### 문제

```java
    System.out.println("사칙연산중 하나를 입력해주세요 :");
    String c = scan.nextLine();
```
* 위의 코드를 바로 써버리면 Buffer에 남아있는 값이 입력되면서 입력을 하지 않았는데도 다음 계산으로 넘어가버리는 문제가 발생했다.   

## Buffer 
* 간단하게 설명하면 임시 저장 공간이다. 
* 또는 큐 ( Queue ) 라고도 한다.

### 문제 해결 방안

```java
    System.out.println("사칙연산중 하나를 입력해주세요 :");
    scan.nextLine(); // 버퍼에 남은 공백이 없게 처리함.
    String c = scan.nextLine();
```
* 이렇게 scan.nextLine();를 사용하여 버퍼에 남은 공백이 없도록 처리 한 다음 값을 받으면 된다.

---

## 느낀점
* Java에는 정말 다양한 문제가 나온다.    
하지만 당황하지말고 구글링을 통하여 문제점을 차근차근 풀어나가자.