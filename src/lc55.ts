// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

// 示例 1：

// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
// 示例 2：

// 输入：nums = [3,2,1,0,4]
// 输出：false
// 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。

// 动态规划应该行
// 末状态 dp[len-1]
// dp设为剩余最大步数
// 初状态 dp[0] = nums[0] dp[1] = max(dp[0] - 1, nums[1])
// dp[i] = max(dp[i-1]-1,nums[i])
// 判断条件为 dp除了最后一项 不能出现0 因此不给最后一项赋值即可
export const canJump = (nums: number[]): boolean => {
  const len = nums.length;
  if (len < 2)
    return true;
  const dp = new Array(len);
  dp[0] = nums[0];
  for (let i = 1; i < len - 1; i++) {
    dp[i] = Math.max(dp[i - 1] - 1, nums[i]);
  }
  return !dp.includes(0);
};
