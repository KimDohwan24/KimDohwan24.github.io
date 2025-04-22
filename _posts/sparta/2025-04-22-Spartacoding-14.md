---
layout: post
title: Stream
subtitle: stream
categories: TIL
tags: [TIL]
---

## Stream
- 데이터를 효율적으로 처리할 수 있는 흐름
- 선언형 스타일로 가독성이 뛰어나다
- 데이터 준비 -> 중간 연산 -> 최종 연산 순으로 처리된다

### stream의 특징
- 원본 데이터 소스를 변경하지 않는다 : 읽기만 한다.
- 일회용이다 : 한번 사용하면 닫혀서 재사용이 불가능하다.
- 최종 연산 전까지 중간 연산을 수행하지 않는다.
- 작업을 내부 반복으로 처리한다: forEach()는 매개변수에 대입된 람다식을 데이터 소스의 모든 요소에 적용한다.

### for문과 stream 비교하기

```java
// for 명령형 스타일 : 각 요소  * 10
        List<Integer> ret1 = new ArrayList<>();
        for (Integer num : arrayList) {
            Integer multipliedNum = num * 10;
            ret1.add(multipliedNum);
        }
        System.out.println("ret1 = " + ret1);
```

---

```java
// stream 선언형 스타일 : 각 요소 * 10 처리
        List<Integer> ret2 = arrayList.stream()  // 데이터 흐름 준비
                .map(num -> num * 10)            // 중간 연산 등록
                .collect(Collectors.toList());   // 최종 연산 단계
        System.out.println("ret2 = " + ret2);
```

### stream 살펴보기

| 단계            | 설명                          | 주요 API                            |
|-----------------|-------------------------------|--------------------------------------|
| 1. 데이터 준비   | 컬렉션을 스트림으로 변환        | `stream()`, `parallelStream()`       |
| 2. 중간 연산 등록 | (즉시 실행되지 않음) 데이터 변환 및 필터링 | `map()`, `filter()`, `sorted()`      |
| 3. 최종 연산     | 최종 처리 및 데이터 변환        | `collect()`, `forEach()`, `count()`  |

### Lambda 활용법

```java
        // 1. 익명클래스를 직접 만들어서 변수에 담아 매개변수로 전다

        Function<Integer, Integer> function = new Function<Integer, Integer>(){
            @Override
            public Integer apply(Integer integer) {
                return integer * 10;
            }
        };
        List<Integer> ret3 = arrayList.stream()  // 데이터 흐름 준비
                .map(function)            // 중간 연산 등록
                .collect(Collectors.toList());   // 최종 연산 단계
        System.out.println("ret3 = " + ret3);
```

---

```java
        // 2. 람다식을 만들어서 변수에 담아 매개변수로 전달
        Function<Integer, Integer> functionLambda = ( num -> num * 10);
        List<Integer> ret4 = arrayList.stream()  // 데이터 흐름 준비
                .map(function)            // 중간 연산 등록
                .collect(Collectors.toList());   // 최종 연산 단계
        System.out.println("ret4 = " + ret4);
```

---

``` java
        List<Integer> ret5 = arrayList.stream()  // 데이터 흐름 준비
                .map(num -> num * 10)            // 중간 연산 등록
                .collect(Collectors.toList());   // 최종 연산 단계
        System.out.println("ret5 = " + ret5);
```

---

```java
        List<Integer> ret6 = arrayList.stream() // 데이터 흐름 준비
                .filter(num -> num % 2 == 0 ) // 중간 연산 등록
                .map(num -> num * 10)        // 중간 연산 등록 ( * 10 )
                .collect(Collectors.toList());
        System.out.println("ret6 = " + ret6);
```

--- 

### 느낀점
정말 다양하게 사용할 수 있겠다.