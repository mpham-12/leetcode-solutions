/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
  let array = [];
  let sum = 0;

  //add sum with each index of nums, and push into new array
  for (num of nums) {
    sum += num;
    array.push(sum)
  }

  return array;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));