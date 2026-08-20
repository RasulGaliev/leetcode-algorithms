/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const table = new Map();

  for(let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (table.has(diff)) {
          return [table.get(diff), i]
      }

      table.set(nums[i], i);
  }

  return []
};