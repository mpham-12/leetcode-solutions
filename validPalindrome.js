/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().split('').join('').replace(/[^0-9a-z]/gi, '');
  const sReversed = s.toLowerCase().split('').reverse().join('').replace(/[^0-9a-z]/gi, '');

  if (s !== sReversed) {
    return false
  }
  return true
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('raceacar'))