/**
 * @param {number} x
 * @return {boolean}
 */

//convert number to string
//split each single number within array
//reverse array
//join each element into 1 number string
//convert string to number and compare
var isPalindrome = function(x) {
  const reverseStr = x.toString().split('').reverse().join('');
  if (x !== Number(reverseStr)) {
    return false
  } else {
    return true
  }
};

console.log(isPalindrome(1234));
console.log(isPalindrome(121));