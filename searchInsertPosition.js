/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let newNums = [];

  for (num of nums) {
    if (num === target) {
      return nums.indexOf(num);
    }
  }
  newNums.push(...nums, target);
  newNums.sort((a, b) => {
    return a - b
  });
  return newNums.indexOf(target)
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([3, 5, 7, 9, 10], 8));