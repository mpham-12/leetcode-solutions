/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
  let pairs = {};

  //filter for every single number in nums
  let numsOfArr = nums.filter((num, index) => {
    return nums.indexOf(num) === index;
  })
  // console.log('numsOfArr', numsOfArr);

  //loop through numsOfArr and add each number to pairs{} with a value of 0
  for (let i = 0; i < numsOfArr.length; i++) {
    pairs[numsOfArr[i]] = 0;
    //loop through nums[], if num === number om numsOfArr, +1
    for (num of nums) {
      if (num === numsOfArr[i]) {
        pairs[numsOfArr[i]]++
      }
    }
  }
  // console.log('PAIRS---', pairs)

  //loop through object values. if pair values are divisible by 2, return true because pairs are able to exist.
  const containsEqualPairs = Object.values(pairs).every((value) => {
    return value % 2 === 0;
  });

  return containsEqualPairs;
}

// console.log(divideArray([3, 2, 3, 2, 2, 2]));
// console.log(divideArray([1, 2, 3, 4]));
console.log(divideArray([18, 19, 5, 5, 18, 19, 5, 6, 12, 19, 13, 4, 16, 11, 4, 16, 10, 8, 12, 8, 2, 1, 8, 17, 4, 18, 3, 5, 16, 2, 16, 12, 17, 16, 7, 16, 2, 17, 19, 9, 1, 20, 17, 17, 4, 6]));