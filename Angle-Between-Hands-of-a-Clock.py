1class Solution:
2    def angleClock(self, hour: int, minutes: int) -> float:
3        min_angle = minutes * 6
4        hour_angle = (hour % 12) * 30 + minutes * 0.5
5        diff = abs(hour_angle - min_angle)
6
7        return min(diff, 360 - diff)
8
9sol = Solution()
10print(sol.angleClock(12, 30))
11
12        