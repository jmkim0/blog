---
tags: [DSA, Stack, Queue, Tree, Graph, Binary Tree, BST, BFS, DFS, Heap, Trie, Recursion, Greedy, Brute-force, Divide-and-conquer, DP, Binary Search, Parametric Search]
---

# 자료구조와 알고리즘

## 자료구조

### [Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))

1. 후입선출 (LIFO) 자료구조
2. 데이터를 하나씩 입출력
3. 한쪽 끝에서만 입출력이 발생

:::note[references]

- [Stack (Java SE 11 & JDK 11 )](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Stack.html)

:::

### [Queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))

1. 선입선출 (FIFO) 자료구조
2. 데이터를 하나씩 입출력
3. 데이터의 입력부와 출력부가 나뉘어져 있음

:::note[references]

- [Queue (Java SE 11 & JDK 11 )](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Queue.html)
- [ArrayDeque (Java SE 11 & JDK 11 )](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ArrayDeque.html)
- [LinkedList (Java SE 11 & JDK 11 )](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/LinkedList.html)

:::

### [Tree](https://en.wikipedia.org/wiki/Tree_(data_structure))

### [Graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))

### [Binary tree](https://en.wikipedia.org/wiki/Binary_tree)

### [Binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree)

### [Tree traversal](https://en.wikipedia.org/wiki/Tree_traversal)

- Preorder
- Inorder
- Postorder

### [Graph search](https://en.wikipedia.org/wiki/Graph_traversal)

#### [Breadth-first search (BFS)](https://en.wikipedia.org/wiki/Breadth-first_search)

#### [Depth-first search (DFS)](https://en.wikipedia.org/wiki/Depth-first_search)

:::note[references]

- [Difference between BFS and DFS - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/)

:::

### [Deque (Double-ended queue)](https://en.wikipedia.org/wiki/Double-ended_queue)

:::note[references]

- [Deque (Java SE 11 & JDK 11 )](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Deque.html)
- [ArrayDeque (Java SE 11 & JDK 11 )](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ArrayDeque.html)

:::

### [Linked list](https://en.wikipedia.org/wiki/Linked_list)

:::note[references]

- [LinkedList (Java SE 11 & JDK 11 )](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/LinkedList.html)

:::

### [Hash table](https://en.wikipedia.org/wiki/Hash_table)

:::note[references]

- [HashMap (Java SE 11 & JDK 11 )](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/HashMap.html)
- [Hashtable (Java SE 11 & JDK 11 )](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Hashtable.html)

:::

### [Heap](https://en.wikipedia.org/wiki/Heap_(data_structure))

:::note[references]

- [PriorityQueue (Java SE 11 & JDK 11 )](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/PriorityQueue.html)

:::

### [Trie](https://en.wikipedia.org/wiki/Trie)

:::tip[further reading]

- [Data Structure Visualization](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)

:::

## 알고리즘

### [재귀 (Recursion)](https://en.wikipedia.org/wiki/Recursion_(computer_science))

#### 재귀 함수의 장점

- 반복문을 줄임으로써 코드를 간결하게 하고 수정이 용이해진다.
- 변수를 사용하는 개수가 줄어든다.

#### 재귀 함수의 단점

- 반복문에 비해 코드의 흐름이 직관적이지 않다.
- 메서드를 반복적으로 호출하면서 메모리의 스택 영역을 많이 점유하게 되어 반복문에 비해 더 많은 메모리를 사용하게 된다.
- 메서드가 호출되고 종료하면서 컨텍스트 스위칭이 이루어지는 비용을 감수해야 한다.

### [시간 복잡도](https://en.wikipedia.org/wiki/Time_complexity)

### [Greedy algorithm](https://en.wikipedia.org/wiki/Greedy_algorithm)

### [Brute-force algorithm](https://en.wikipedia.org/wiki/Brute-force_search)

### [Divide-and-conquer Algorithm](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)

### [Dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming)

### [Binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm)

### [Parametric search](https://en.wikipedia.org/wiki/Parametric_search)

결정 알고리즘을 최적화 알고리즘으로 바꾸는 테크닉  
최적화 문제를 결정 문제로 바꿔서 풀 수 있다.  
이분 탐색을 사용하여 결정 문제를 만족시키는 값을 찾고 그 값이 최적화 문제의 답이 되는 유형이 존재한다.

### [순열 (Permutation)](https://en.wikipedia.org/wiki/Permutation)

순열을 만드는 과정을 그래프로 생각하고 DFS, BFS를 활용할 수 있다.

:::note[references]

- [Permutation Algorithms Using Iteration and the Base-N-Odometer Model (Without Recursion)](https://www.quickperm.org/quickperm.html)
- [itertools - Functions creating iterators for efficient looping - Python 3.10.7 documentation](https://docs.python.org/3/library/itertools.html)

:::

### [최대공약수 (Great common divisor)](https://en.wikipedia.org/wiki/Greatest_common_divisor)

[Euclidean algorithm - Wikipedia](https://en.wikipedia.org/wiki/Euclidean_algorithm)

### [멱집합 (Power set)](https://en.wikipedia.org/wiki/Power_set)

[Power Set - GeeksforGeeks](https://www.geeksforgeeks.org/power-set/)
