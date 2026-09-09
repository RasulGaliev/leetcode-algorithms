/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);

  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    numsMap.set(nums[i], i);
  }

  const output = [];
  const checkSet = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let value = 0 - (nums[i] + nums[j]);
      if (numsMap.has(value) && numsMap.get(value) > i && numsMap.get(value) > j) {
        sum = (nums[i] * 100007 + nums[j] * 10006 + value * 108) + 123456;
        if (!checkSet.has(sum)) output.push([nums[i], nums[j], value])
        checkSet.add(sum)
      }
    }
  }
  return output;
};
console.log('test 1 - ', threeSum([-1,0,1,2,-1,-4]))
console.log('test 2 - ', threeSum([0,1,1]))
console.log('test 3 - ', threeSum([0,0,0]))
console.log('test 78 - ', threeSum([-1,0,1,0]), 'Expected: [[-1,0,1]]')
console.log('test 9* - ', threeSum([0,0,0,0]))
console.log('test 124 - ', threeSum([2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]))