/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      if (i !== 0 && (stack[stack.length - 1] === '(' && s[i] === ')' || stack[stack.length - 1] === '{' && s[i] === '}' || stack[stack.length - 1] === '[' && s[i] === ']')) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length) return false
  return true;
};


console.log(isValid("([])"))