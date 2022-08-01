/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  let output1 = [];
  let output2 = [];

  for (let num1 of nums1) {
    if (!nums2.includes(num1)) {
      output1.push(num1)
    }
  }

  for (let num2 of nums2) {
    if (!nums1.includes(num2)) {
      output2.push(num2)
    }
  }

  let filtered1 = [...new Set(output1)];
  let filtered2 = [...new Set(output2)];

  return [filtered1, filtered2]
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));