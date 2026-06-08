1function pivotArray(nums: number[], pivot: number): number[] {
2    const less: number[] = [];
3    const equal: number[] = [];
4    const greater: number[] = [];
5
6    for (let num of nums) {
7        if (num < pivot) {
8            less.push(num)
9        } else if (num === pivot) {
10            equal.push(num)
11        } else {
12            greater.push(num);
13        } 
14        }
15        return [...less, ...equal, ...greater];
16    }