/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const ROMAN_MAP = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (i !== s.length - 1 && ROMAN_MAP[s[i]] < ROMAN_MAP[s[i + 1]]) {
      sum -= ROMAN_MAP[s[i]];
    } else {
      sum += ROMAN_MAP[s[i]];
    }
  }

  return sum;
};

console.log(romanToInt('LVIII'))

