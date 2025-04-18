---
layout: post
title: Collection
subtitle: ArrayList, HashSet, HashMap
categories: TIL
tags: [TIL]
---

## Collection
- 다수의 데이터를 쉽고 효과적으로 처리할 수 있는 표준화된 방법을 제공하는 클래스의 집합을 의미   
- 데이터를 저장하는 자료 구조와 데이터를 처리하는 알고리즘을 구조화하여 클래스로 구현해 놓은 것을 말한다.
- 이러한 Collection은 자바의 인터페이스를 사용하여 구현한다.

### array(배열)가 있는데 왜 굳이 collection을 쓸까?   
- 배열은 정적 메모리이고, collection은 동적 메모리이기 때문이다.   
- 배열은 할당 받은 공간이 정해지면 변경이 불가능하지만, collection은 공간이 필요한 만큼 추가가 가능하다.

### Collection의 종류

| 인터페이스 | 특징                      | 구현체     |
|------------|---------------------------|------------|
| List       | 순서 유지, 중복 허용      | ArrayList  |
| Set        | 순서 없음, 중복 불가      | HashSet    |
| Map        | 키-값 구조, 키 중복 불가  | HashMap    |

### ArrayList
- 요소의 순서를 유지하고 중복된 값을 저장할 수 있는 자료구조이다.   

```java
    ArrayList<Integer> arrayList = new ArrayList<>();
        
    // ArrayList 활용
     ArrayList<String> names = new ArrayList<>();

    // 데이터 추가
    names.add("Spartan");
    names.add("Steve");
    names.add("isac");

    // 순서 보장
    System.out.println("names = " + names);

    // 중복 데이터 허용
    names.add("Spartan");
    System.out.println("names = " + names);
        
    // 데이터 단건 조회
    String name1 = names.get(0);
    System.out.println("name1 = " + name1);
        
    // 데이터 삭제
    names.remove("Spartan");
    System.out.println("names = " + names);
        
    // 결과값
//     names = [Spartan, Steve, isac]
//     names = [Spartan, Steve, isac, Spartan]
//     name1 = Spartan
//     names = [Steve, isac, Spartan]
```

---

### HashSet
- 순서를 보장하지 않기 때문에 get() 을 지원하지 않는다.

```java
    // HashSet 사용 방법
    HashSet<String> uniqueNames = new HashSet<>();

    // 데이터 추가
    uniqueNames.add("Spartan");
    uniqueNames.add("Steve");
    uniqueNames.add("Isac");
    uniqueNames.add("1");
    uniqueNames.add("2");

    // 순서를 보장 X
    System.out.println("uniqueNames = " + uniqueNames);
    // get() 활용 불가
    //    uniqueNames.get();

    // 중복 데이터 불가
    uniqueNames.add("Spartan");

     // 데이터 제거
    uniqueNames.remove("Spartan");
    System.out.println("uniqueNames = " + uniqueNames);
    // 결과값 
    // uniqueNames = [1, 2, Spartan, Steve, Isac]
    // uniqueNames = [1, 2, Steve, Isac]
```

---

### HashMap 
- 키(Key) - 값(Value) 구조로 데이터를 저장한다. (키 : 값)
- 키(Key)는 중복될 수 없지만 값(Value)은 중복이 된다.
- 순서를 보장하지 않는다.

```java
    // HashMap 활용
    // <키(""), 값(0) 저장
    HashMap<String, Integer> memberMap = new HashMap<>();

    // 데이터 추가
    memberMap.put("Spartan",15);
    memberMap.put("Setve",15);
    memberMap.put("Isac",1);
    memberMap.put("John",2);
    memberMap.put("Alice",3);

    // 순서 보장 X
    System.out.println("memberMap = " + memberMap);
        
    // 키 중복 불가 : 값이 덮어쓰기 발생
    memberMap.put("Alice",5);
    System.out.println("memberMap = " + memberMap);

    // 단건 조회
    Integer spartanNum = memberMap.get("Spartan");
    System.out.println("spartanNum = " + spartanNum);
        
    // 삭제
    memberMap.remove("Spartan");
    System.out.println("memberMap = " + memberMap);

    // 키 확인
    Set<String> keyset = memberMap.keySet();
    System.out.println("keyset = " + keyset);

    // 값 확인
    Collection<Integer> values = memberMap.values();
    System.out.println("values = " + values);

    // 결과값
    // memberMap = {Setve=15, Spartan=15, Alice=3, John=2, Isac=1}
    // memberMap = {Setve=15, Spartan=15, Alice=5, John=2, Isac=1}
    // spartanNum = 15
    // memberMap = {Setve=15, Alice=5, John=2, Isac=1}
    // keyset = [Setve, Alice, John, Isac]
    // values = [15, 5, 2, 1]
```

---


## 느낀점
항상 변수들을 담아야 할때 배열만 썼어서 정적 메모리에만 할당해 사용하다보니 데이터가 늘어나는 값들을 저장하지 못했었는데 이번에 Collection을 알게되어 동적 메모리에도 할당 할 수 있게되어 편리해졌다.