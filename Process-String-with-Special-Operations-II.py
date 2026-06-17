1class Solution:
2    def processStr(self, s: str, k: int) -> str:
3        history = []
4        current_length = 0
5        
6        for char in s:
7            if char.islower():
8                current_length += 1
9                history.append((char, current_length))
10            elif char == '*':
11                if current_length > 0:
12                    current_length -= 1
13                    history.append((char, current_length))
14            elif char == '#':
15                current_length *= 2
16                history.append((char, current_length))
17            elif char == '%':
18                history.append((char, current_length))
19                
20        if k < 0 or k >= current_length:
21            return '.'
22            
23        for op, length in reversed(history):
24            if op.islower():
25                if k == length - 1:
26                    return op
27            elif op == '*':
28                continue
29            elif op == '#':
30                half = length // 2
31                if k >= half:
32                    k -= half
33            elif op == '%':
34                k = length - 1 - k
35                
36        return '.'
37