/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
  const arr = s.split('');
  const duplicate = arr.filter((char, index) => {
    return arr.indexOf(char) !== index
  })
  return duplicate[0].toString();

};

console.log(repeatedCharacter("abccbaacz"))
console.log(repeatedCharacter("abcdd"))
console.log(repeatedCharacter("abca"))
