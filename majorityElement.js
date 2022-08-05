/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = {};
  
  for (num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (key in count) {
    if (count[key] > Math.floor(nums.length / 2)) {
      return key
    }
  }
}

console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([3, 4, 3]));
// console.log(majorityElement([6, 5, 5]));
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));