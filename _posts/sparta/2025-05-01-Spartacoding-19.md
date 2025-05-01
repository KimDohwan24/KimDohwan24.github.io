---
layout: post
title: Quick sort, Merge sort, Heap sort
subtitle: 퀵 정렬, 병합 정렬, 힙 정렬
categories: TIL
tags: [TIL]
---

## Quick sort ( 퀵 정렬 )
- 이름 그대로 빠르게 정렬을 수행하는 알고리즘이다.
- 하나의 피벗(pivot)을 기준으로 두 개의 부분리스트로 나누어 하나는 피벗보다 작은 값들의 부분 리스트, 다른 하나는 피벗보다 큰 값들의 부분리스트로 정렬한 다음, 각 부분리스트에 대해 다시 위 처럼 재귀적으로 수행하는 정렬하는 방법이다.
- 비균등 분할 정렬이다 : 항상 데이터를 균등하게 나누지 않는다.
- 불안정 정렬이다 : 피벗을 기준으로 요소들을 `교환(swap)`하면서 정렬을 수행하는데, 이 과정에서 같은 값을 가진 원소들끼리도 위치가 바뀔수 있다.


### Quick 정렬 과정
1. 피벗을 하나 선택한다
2. 피벗을 기준으로 양쪽에서 피버보다 큰 값, 작은값을 찾은 후 왼쪽에서부터 피벗보다 큰 값을 찾고 오른쪽에서부터는 피벗보다 작은 값을 찾는다.
3. 양 방향에서 찾은 두 원소를 교환한다.
4. 왼쪽에서 탐색하는 위치와 오른쪽에서 탐색하는 위치가 엇갈리지 않을 때까지 2번으로 돌아가 위 과정을 반복한다.
5. 엇갈린 기점을 기준으로 두 개의 부분리스트로 나누어 1번으로 돌아가 해당 부분리스트의 길이가 1이 아닐 때까지 1번과정을 반복한다(Divide : 분할)
6. 인접한 부분리스트끼리 합친다. (Conqure : 정복)

### Quick 정렬의 장단점
- 장점 : 속도가 빠르다(평균 속도가 O(NlogN))의 속도를 가지는 다른 정렬 알고리즘과 비교했을 때도 가장 빠르다
- 단점 : 최악의 경우 시간복잡도는 O(N^2)이다. -> 입력이 이미 정렬되어 있거나, 피벗 선택이 매우 나쁠 경우 시간 복잡도가 `O(N^2)`까지 증가한다. 

### Quick 정렬 예제

```java
public class QuickSortExample {

    // 퀵 정렬 메서드
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // 피벗을 기준으로 배열을 분할
            int pivotIndex = partition(arr, low, high);

            // 분할된 두 부분을 재귀적으로 정렬
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    // 분할(partition) 메서드
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];  // 마지막 요소를 피벗으로 선택
        int i = low - 1;        // 작은 요소의 인덱스

        for (int j = low; j < high; j++) {
            // 현재 요소가 피벗보다 작거나 같으면
            if (arr[j] <= pivot) {
                i++;
                // i번째 요소와 j번째 요소 교환
                swap(arr, i, j);
            }
        }

        // 피벗을 올바른 위치로 이동
        swap(arr, i + 1, high);
        return i + 1;
    }

    // 배열 요소를 교환하는 메서드
    public static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // 메인 메서드: 테스트용
    public static void main(String[] args) {
        int[] array = { 10, 7, 8, 9, 1, 5 };
        System.out.println("정렬 전:");
        printArray(array);

        quickSort(array, 0, array.length - 1);

        System.out.println("정렬 후:");
        printArray(array);
    }

    // 배열 출력 메서드
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
// 정렬 전 : 10 7 8 9 1 5
// 정렬 후 : 1 5 7 8 9 10
```

## Merge sort ( 병합 정렬 )
- 일반적인 방법으로 구현했을때 안정 정렬에 속하며, 분할 정복 알고리즘의 하나이다.
- 하나의 리스트를 두 개의 균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음, 두 개의 정렬된 부분 리스트를 합하여 전체가 정렬된 리스트가 되게 하는 방법
- 병합 정렬 순서


### Merge sort 정렬 과정
1. 분할(Divide) : 입력 배열을 같은 크기의 2개의 부분 배열로 분할한다
2. 정복(Conquer) : 부분 배열을 정렬한다. 부분 배열의 크기가 충분히 작지 않으면 순환 호출을 이용하여 다시 분할 정복 방법을 적용한다
3. 결합(Combine) : 정렬된 부분 배열들을 하나의 배열에 합병한다 

```java
1. 분할 ( 반씩 나눔 )
[6, 3, 8, 5, 2, 7, 4, 1]
→ [6, 3, 8, 5]    [2, 7, 4, 1]
→ [6, 3] [8, 5]   [2, 7] [4, 1]
→ [6] [3] [8] [5] [2] [7] [4] [1]

---------------------------------

2. 정복 + 병합 ( 정렬된 채로 병합 )
[6] + [3] → [3, 6]
[8] + [5] → [5, 8]
[2] + [7] → [2, 7]
[4] + [1] → [1, 4]

---------------------------------

-> 다시 병합 :
[3, 6] + [5, 8] → [3, 5, 6, 8]
[2, 7] + [1, 4] → [1, 2, 4, 7]

---------------------------------

-> 최종 병합 :
[3, 5, 6, 8] + [1, 2, 4, 7] → [1, 2, 3, 4, 5, 6, 7, 8]

```

### Merge sort의 장단점
- 단점   

1. 임시 배열 필요 (추가 메모리 사용)
- 병합 정렬은 두 개의 배열(또는 하위 배열)을 합칠 때 임시 배열을 만들어서 데이터를 담아야 합니다.
- 예를 들어 [3, 6] + [5, 8] → [3, 5, 6, 8] 이때 임시 공간 필요
➜ 그래서 배열을 기반으로 하면 **O(n)**의 추가 공간이 필요

2. 제자리 정렬(in-place sorting)이 아님
- 제자리 정렬은 추가 메모리 없이, 주어진 공간에서만 정렬을 수행하는 것을 말한다
- 병합 정렬은 데이터를 병합할 때 다른 메모리 공간에 임시로 복사해야 하므로 엄밀히 말해 제자리 정렬이 아니다.

3. 레코드(데이터)가 클 경우, 이동 비용이 큼
- 배열은 데이터를 직접 이동시켜야 해요.
- 레코드 크기가 크면, 이동에 시간이 많이 소모돼서 비효율적입니다.

- 장점   

1. 항상 안정적인 성능
- 퀵 정렬은 최악의 경우 O(n²)이지만, 병합 정렬은 항상 O(n log n)이다.
- 입력 데이터의 분포(이미 정렬됨, 역순 등)에 영향을 받지 않고 성능이 일정하다.

2. 안정 정렬
- 같은 값을 가진 데이터들의 원래 순서가 유지됨.
- 예: 이름은 같고 나이는 다른 사람들을 이름순 정렬 → 나이순 정렬 시 안정 정렬이 필요함.

## Heap sort ( 힙 정렬 )

- 힙 자료구조를 기반으로 비교 기반 정렬 알고리즘

- 완전 이진 트리의 일종으로 우선순위 큐를 위하여 만들어진 자료구조
1. Max Heap : 부모 노드가 자식 노드보다 항상 크거나 같다
2. Min Heap : 부모 노드가 자식 노드보다 항상 작거나 같다

- 최댓값, 최솟값을 쉽게 추출할 수 있는 자료구조
- 내림차순 정렬을 위해서는 최대 힙을 구성하고 오름차순 정렬을 위해서는 최소 힙을 구성하면 된다.

### Heap sort의 정렬 과정
1. 정렬해야 할 n개의 요소들로 최대 힙(완전 이진 트리 형태)을 만든다
- 내림차순 정렬으로 정렬

2. 그 다음으로 한번에 하나씩 요소를 힙에서 꺼내서 배열의 뒤부터 저장하면 된다.
3. 삭제되는 요소들(최댓값부터 삭제)은 값이 감소되는 순서로 정렬되게 된다

### Heap sort 예제

```java
public class HeapSort {

    // 힙 정렬 함수
    public void sort(int[] arr) {
        int n = arr.length;

        // 1. Build Max Heap
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        // 2. 하나씩 루트(최대값)를 끝으로 보내고 Heapify
        for (int i = n - 1; i > 0; i--) {
            // 루트(최대값)와 마지막 요소 교환
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            // Reduced heap에 대해 다시 heapify
            heapify(arr, i, 0);
        }
    }

    // 힙 구조 유지 (Heapify)
    void heapify(int[] arr, int n, int i) {
        int largest = i;         // 루트
        int left = 2 * i + 1;    // 왼쪽 자식
        int right = 2 * i + 2;   // 오른쪽 자식

        // 왼쪽 자식이 루트보다 크면 largest 갱신
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        // 오른쪽 자식이 largest보다 크면 갱신
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        // largest가 루트가 아니면 교환 후 재귀 호출
        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            // 재귀적으로 자식 노드 확인
            heapify(arr, n, largest);
        }
    }

    // 테스트용 main 메서드
    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6, 7};

        HeapSort sorter = new HeapSort();
        sorter.sort(arr);

        System.out.println("정렬된 배열:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}

// 결과값
// 5 6 7 11 12 13
```

### Heap sort 장단점
- 장점

1. 시간 복잡도 보장 : 최악의 경우에도 O(n log n)을 보장
2. 추가 메모리 불필요 : In-place 정렬 -> 별도의 추가 메모리 공간 없이 정렬 가능
3. 대용량 데이터에 유리 : 메모리 사용이 적고 시간 복잡도가 안정적이라 큰 데이터셋에도 적절
4. 부분 정렬 가능 : Max Heap 상태에서 루트만 꺼내면 최대값 추출이 O(log n)에 가능

- 단점

1. 정렬이 안정적이지 않음 : 동일한 값의 순서가 바뀔 수 있음 -> Stable Sort가 아님
2. 캐시 친화적이지 않음 : 힙 구조는 배열 인덱스를 건너뛰는 경우가 많아 CPU 캐시 효율이 낮음
3. 실제 성능이 다른 정렬보다 느릴 수 있음 : 평균적으로는 퀵 정렬이 더 빠른 경우가 많다.(특히 작은 데이터셋에서)
4. 구현이 약간 복잡 : Heapify 과정이 재귀적이고 구조가 직관적이지 않아 퀵 정렬보다 구현 난이도가 약간 높음

## Quick (퀵) / Merge (병합) / Heap (힙) 요약정리

| 기준            | Heap Sort     | Quick Sort    | Merge Sort         |
|-----------------|---------------|---------------|---------------------|
| 평균 시간 복잡도 | O(n log n)    | O(n log n)    | O(n log n)          |
| 최악 시간 복잡도 | O(n log n)    | O(n²)         | O(n log n)          |
| 안정 정렬       | ❌            | ❌            | ✅                  |
| 추가 메모리     | ❌ (In-place) | ❌ (In-place) | ✅ (O(n))           |
| 구현 난이도     | 보통          | 쉬움          | 쉬움                |
| 실사용          | 우선순위 큐 등 | 일반 정렬     | 연결 리스트 정렬 등 |

---

## 느낀점
세상엔 참 많은 알고리즘이 있는데 이런걸 언제 다 외워서 써야하나.. 
하나 둘 점점 쓰다보면 늘긴하겠지..?