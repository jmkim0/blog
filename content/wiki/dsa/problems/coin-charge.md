---
title: 거스름돈
tags: [DSA, Java, DP]
---

# [거스름돈](https://school.programmers.co.kr/learn/courses/30/lessons/12907)

```java
class Solution {
    public int solution(int n, int[] money) {
        int[] dp = new int[n + 1];
        dp[0] = 1;
        
        for (int m : money) {
            for (int i = m; i <= n; i++) {
                dp[i] += dp[i - m];
            }
        }
        
        return dp[n];
    }
}
```

:::note[references]

- [Coin Change | DP-7 - GeeksforGeeks](https://www.geeksforgeeks.org/coin-change-dp-7/?ref=rp)

:::
