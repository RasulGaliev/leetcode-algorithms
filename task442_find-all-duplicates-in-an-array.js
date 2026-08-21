/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let numsMap = new Set();
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
      if (numsMap.has(nums[i])) {
        arr.push(nums[i])
      } else {
        numsMap.add(nums[i]);
      }
    }

    return arr;
};

console.log(findDuplicates('[4,3,2,7,8,2,3,1]'))