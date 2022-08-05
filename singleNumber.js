/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const output = nums.filter((num, index) => {
    return nums.indexOf(num) === nums.lastIndexOf(num)
  });
  return output
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));