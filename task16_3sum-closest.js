/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let closestSum = 0;
  let diff = 100000;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let l = j + 1; l < nums.length; l++) {
        let sum = nums[i] + nums[j] + nums[l];
        if (Math.abs(sum - target) < diff) {
          diff = Math.abs(sum - target);
          closestSum = sum;
        }
      }
    }
  }
  return closestSum;
};

console.log('test 1', threeSumClosest([-1000,-1000,-1000], 10000))