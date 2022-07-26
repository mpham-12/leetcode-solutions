/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  //create a datastructure to hold info
  let brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  //create stack datastructure
  let stack = [];
  console.log('s.length', s.length)
  //iterate through each char in string
  //push matching bracket of opening bracket into stack
  //if the LAST pushed closing bracket in the stack matches the next iterable char in the string, .pop() it from stack
  //iterate through entire string, if there is remaining chars in the stack, RETURN FALSE
  //otherwise if stack is empty at the end, RETURN TRUE
  for (let char of s) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      return false
    }
  }
  return stack.length === 0
};

console.log(isValid('('));
console.log(isValid(')'));
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(}'));