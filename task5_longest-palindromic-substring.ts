/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s;

  let start = 0;
  let maxLength = 1;

  function center(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
     const currentLength = right - left + 1;

     if (currentLength > maxLength) {
        start = left;
        maxLength = currentLength;
      }
      left--;
      right++;
    }
  }

  for(let i = 0; i < s.length; i++) {
    center(i, i);
    center(i, i + 1);
  }
  return s.substring(start, start + maxLength);
};

console.log(longestPalindrome("abbcccba"))