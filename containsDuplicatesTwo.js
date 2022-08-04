/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//INCOMPLETE
var containsNearbyDuplicate = function(nums, k) {
const duplicates = nums.filter((num, index)=>{
  return nums.indexOf(num) !== index
})


for (let i=0; i<nums.length;i++){
  if (duplicates.includes(num<=k)){
    return true;
  } else {
    return false;
  }
}
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));