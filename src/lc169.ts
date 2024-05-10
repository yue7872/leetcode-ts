// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 示例 1：

// 输入：nums = [3,2,3]
// 输出：3
// 示例 2：

// 输入：nums = [2,2,1,1,1,2,2]
// 输出：2

// for循环 用map统计数据

// export const majorityElement = (nums: number[]): number => {
//   const map = new Map<number, number>();
//   if (nums.length < 2) {
//     return nums[0];
//   }
//   for (let i = 0; i < nums.length; i++) {
//     const cur = map.get(nums[i]);
//     if (!cur) {
//       map.set(nums[i], 1);
//     }
//     else {
//       map.set(nums[i], cur + 1);
//       if (cur + 1 > nums.length / 2) {
//         return nums[i];
//       }
//     }
//   }

//   return -1;
// };

// 摩尔投票
// 设置一个候选人&投票数 候选人和当前元素比较 相同票+1 不同票-1 票为0则换候选人为当前元素 最终返回候选人
// 众数+1 非众数-1 因为众数居多 所以两两相消剩下的一定为众数

export const majorityElement = (nums: number[]) => {
  let candidate = 0;
  let vote = 0;
  for (let i = 0; i < nums.length; i++) {
    if (vote === 0)
      candidate = nums[i];
    if (nums[i] === candidate)
      vote++;
    else
      vote--;
  }
  return candidate;
};
