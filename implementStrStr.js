/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') {
    return 0
  }
  if (!haystack.includes(needle)) {
    return -1
  }

  return haystack.indexOf(needle)
};

console.log(strStr('hello', 'll'));
console.log(strStr('hello', 'd'));
console.log(strStr('hello', ''));