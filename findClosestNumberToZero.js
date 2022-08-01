/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
const filteredNums = [...new Set(nums)];

  filteredNums.sort((a, b) => {
    return Math.abs(a) - Math.abs(b)
  })
console.log(nums)

for (num of filteredNums){
  if (Math.abs(filteredNums[0])===Math.abs(filteredNums[1])){
    return Math.max(filteredNums[0], filteredNums[1])
  }
}
return filteredNums[0]
}




// console.log(findClosestNumber([-4, 2, -2, 1, 4, 8]))
// console.log(findClosestNumber([2,-1,1, -2]))
console.log(findClosestNumber([-1,-1,1]))
// console.log(findClosestNumber([-100000,-100000]))