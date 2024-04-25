// 双指针 p开始 q向后移 碰到不一样的数就移动到count-1的位置 最差情况是有序不重复 count-1此时是index 不会覆盖

// export const removeDuplicates = (nums: number[]) => {
//   let p = 0;
//   let q = 1;
//   let count = 1;
//   while (q < nums.length) {
//     if (nums[p] === nums[q]) {
//       q++;
//       continue;
//     }
//     else {
//       count++;
//       nums[count - 1] = nums[q];
//       p = q;
//       q = p + 1;
//     }
//   }
//   return count;
// };

// 2
// 双指针 p开始 q向后移 碰到不一样的数p向前移动一位 把nums[q]赋值给nums[p] 比第一种少用了count 不用频繁移动p 因为交换之后等价于p到q的位置

export const removeDuplicates = (nums: number[]) => {
  let p = 0;
  let q = 1;
  while (q < nums.length) {
    if (nums[p] === nums[q]) {
      q++;
      continue;
    }
    else {
      p++;
      nums[p] = nums[q];
      q++;
    }
  }
  return p + 1;
};
