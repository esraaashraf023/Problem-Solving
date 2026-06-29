1class Solution:
2    def numOfStrings(self, patterns: List[str], word: str) -> int:
3        res = 0
4
5        for p in patterns:
6            if p in word: res += 1
7        return res