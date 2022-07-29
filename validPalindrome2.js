/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let possiblePalindromes=[];
  let count=0;
  for (let i = 0; i < s.length; i++){
    possiblePalindromes.push(s.split('').slice(count).join(''))
    count++;
    console.log(possiblePalindromes)
  }
};

console.log(validPalindrome('martin'))