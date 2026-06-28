1class Solution:
2    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
3        arr.sort()
4        arr[0] = 1
5        for i in range(1, len(arr)):
6            if arr [i] - arr[i-1] > 1:
7                arr[i] = arr[i-1] + 1
8
9        return arr[-1]