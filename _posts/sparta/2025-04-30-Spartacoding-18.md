---
layout: post
title: Stack, binary search
subtitle: 스택, 이진탐색
categories: TIL
tags: [TIL]
---

## STACK 
- 스택은 `쌓다`,`쌓아올리다`와 같은 뜻을 가진 용어로, 쉽게 생각하면 접시를 높이 쌓아 놓은 형태라고 생각하면 된다.
- 즉, 데이터를 순서대로 쌓는 자료구조이다.

### Stack의 특징
1. 후입선출 (LIFO) : 먼저 들어온 데이터가 나중에 빠져나가는 구조
2. 단방향 입출력 구조 : 데이터의 들어오는 방향이나 나가는 방향이 같다.
3. 데이터를 하나씩만 넣고 뺄수 있다.
4. 깊이 우선 탐색(DFS)에 이용된다

### Stack 선언

```java
class StackEx {
    public static void main(String[] args) {
        // Integer형 스택 선언
        Stack<Integer> stackInt = new Stack<>();
        // String형 스택 선언
        Stack<String> stackStr = new Stack<>();
        // Boolean형 스택 선언
        Stack<Boolean> stackBool = new Stack<>();
    }
}
```

### Stack 값 추가 및 제거

```java
class StackEx {
    public static void main(String[] args) {
        // Integer형 스택 선언
        Stack<Integer> stackInt = new Stack<>();

        // 값 추가 push()
        stackInt.push(1);
        stackInt.push(2);
        stackInt.push(3);
        // 1, 2, 3 순으로 값 추가

        // 값 제거
        stackInt.pop();
        stackInt.pop();
        stackInt.pop();
        // 3, 2, 1 순으로 값 제거

        // 값 추가 add()
        stackInt.add(1);
        stackInt.add(2);
        stackInt.add(3);
        // 1, 2, 3 순으로 값 추가

        // 값 모두 제거
        stackInt.clear();
    }
}
```
### empty()
- 스택이 비어있는지의 여부를 반환한다.
- 비어있으면 true, 비어있지 않으면 false를 반환한다.

```java
class StackEx {
    public static void main(String[] args) {
        Stack<Integer> stackInt = new Stack<>();

        System.out.println(stackInt.isEmpty());
        stackInt.push(1);
        System.out.println(stackInt.isEmpty());
	}
}
// 결과값
// true
// false
```


### search() 
- 메서드의 인자를 스택에서 검색하여 해당 위치를 반환한다.
- 만약 해당 인자가 여러 개일 경우 마지막 위치를 반환한다.
- 여기서 위치는 Index가 아닌 빠져나오는 순서를 뜻한다.

```java
    public static void main(String[] args) {
        Stack<Integer> stackInt = new Stack<>();

        stackInt.push(1);
        stackInt.push(2);
        stackInt.push(3);
        stackInt.push(1);
        // [1, 2, 3, 1]

        System.out.println(stackInt.search(2));
        System.out.println(stackInt.search(1));
        System.out.println(stackInt.search(4));
    }
}

// 결과값
// 3
// 1 
// -1
```

## binary search(이진 탐색)
- `정렬된`리스트에서 검색 범위를 줄여 나가면서 검색 값을 찾는 알고리즘
- 정렬된 리스트에만 사용할 수 있다는 단점이 있지만, 검색이 반복될 때마다 검색 범위가 절반으로 줄기 때문에 속도가 빠르다.

### 이진 탐색 알고리즘 
1. 중간 인덱스 `mid`를 찾아 검색 공간을 두 부분으로 나눈다.
2. 검색 공간의 중간요소를 `key`와 비교한다.
3. 키가 중간 요소에서 발견되면 프로세스는 종료된다.
4. 중간 요소에서 키를 찾을 수 없는 경우, 다음 검색 공간으로 사용할 절반을 선택한다.
- 키가 가운데 요소보다 작으면 `왼쪽`이 다음 검색에 사용된다. 
- 키가 가운데 요소보다 크면 `오른쪽`이 다음 검색에 사용된다.
5. 이 과정은 키를 찾거나 전체 검색 공간이 소요될 때까지 계속된다.

### 반복적 이진탐색 예제

```java
class BinarySearch {
    int binarySearch(int arr[], int x)
    {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;

            // mid 탐색
            if (arr[mid] == x)
                return mid;

            // mid < target 일 경우 왼쪽으로 탐색
            if (arr[mid] < x)
                low = mid + 1;

            // mid > target 일 경우 오른쪽으로 탐색
            else
                high = mid - 1;
        }

        // target이 없는 경우 -1 출력
        return -1;
    }

    // Driver code
    public static void main(String args[])
    {
        BinarySearch ob = new BinarySearch();
        int arr[] = { 2, 3, 4, 10, 40 };
        int n = arr.length;
        int x = 10;
        int result = ob.binarySearch(arr, x);
        if (result == -1)
            System.out.println(
                "Element is not present in array");
        else
            System.out.println("Element is present at "
                               + "index " + result);
    }
    // 결과값
    // Element is present at index 3
```

### 재귀적 이진 탐색 알고리즘 
```java
// 재귀함수 : 함수에서 자기 자신을 다시 호출해 수행하는 함수
class BinarySearch {
    int binarySearch(int arr[], int low, int high, int x)
    {
        if (high >= low) {
            int mid = low + (high - low) / 2;

            // mid 탐색
            if (arr[mid] == x)
                return mid;

            // mid > target 일 경우 오른쪽으로 탐색
            if (arr[mid] > x)
                return binarySearch(arr, low, mid - 1, x);

            // mid < target 일 경우 왼쪽으로 탐색
            return binarySearch(arr, mid + 1, high, x);
        }

        // target이 없는 경우 -1 리턴
        return -1;
    }

    public static void main(String args[])
    {
        BinarySearch ob = new BinarySearch();
        int arr[] = { 2, 3, 4, 10, 40 };
        int n = arr.length;
        int x = 10;
        int result = ob.binarySearch(arr, 0, n - 1, x);
        if (result == -1)
            System.out.println(
                "Element is not present in array");
        else
            System.out.println(
                "Element is present at index " + result);
    }
}
// 결과값
// Element is present at index 3
```

---

### 느낀점
알고리즘 문제들을 풀다보면 언제 어디서 무슨 알고리즘을 써야할지 막막했다.   
이러한 알고리즘들을 머리속에 넣어두면 언젠가는 써먹을 수 있는 날이 오겠지