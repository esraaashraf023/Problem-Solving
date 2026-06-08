1/**
2 * Definition for a binary tree node.
3 * class TreeNode {
4 *     val: number
5 *     left: TreeNode | null
6 *     right: TreeNode | null
7 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
8 *         this.val = (val===undefined ? 0 : val)
9 *         this.left = (left===undefined ? null : left)
10 *         this.right = (right===undefined ? null : right)
11 *     }
12 * }
13 */
14function createBinaryTree(descriptions: number[][]): TreeNode | null {
15    const nodeMap = new Map<number, TreeNode>();
16    const childrenSet = new Set<number>();
17
18    for (const [parentVal, childVal, isLeft] of descriptions) {
19
20        if (!nodeMap.has(parentVal)) {
21            nodeMap.set(parentVal, new TreeNode(parentVal));
22        }
23
24        if (!nodeMap.has(childVal)) {
25            nodeMap.set(childVal, new TreeNode(childVal));
26        }
27
28        const parentNode = nodeMap.get(parentVal)!;
29        const childNode = nodeMap.get(childVal)!;
30
31        if (isLeft === 1) {
32            parentNode.left = childNode;
33        } else {
34            parentNode.right = childNode;
35        }
36
37        childrenSet.add(childVal);
38    }
39
40    // Find the root
41    for (const [value, node] of nodeMap) {
42        if (!childrenSet.has(value)) {
43            return node;
44        }
45    }
46
47    return null;
48}