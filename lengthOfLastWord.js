/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let array = s.trim().split(' ');
  let count = 0;
  let lastWord = array[array.length - 1];
  for (let letters of lastWord) {
    count++
  }
  return count
};

console.log(lengthOfLastWord('Hello'));
console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord("   fly me   to   the moon  "));