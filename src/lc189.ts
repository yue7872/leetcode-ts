// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
// 示例 2:

// 输入：nums = [-1,-100,3,99], k = 2
// 输出：[3,99,-1,-100]
// 解释:
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步: [3,99,-1,-100]

// export const rotate = (nums: number[], k: number) => {
//   const n = nums.length;
//   // 取余 防止超出
//   const k1 = k % n;
//   const nums1 = [];
//   for (let i = 0; i < n; i++) {
//     // n - k1 一定为正数
//     nums1.push(nums[(n - k1 + i) % n]);
//   }
//   return nums1;
// };

export const rotate = (nums: number[], k: number) => {
  const reverse = (nums: number[], start: number, end: number) => {
    while (start < end)
      [nums[start++], nums[end--]] = [nums[end], nums[start]];
  };
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};
