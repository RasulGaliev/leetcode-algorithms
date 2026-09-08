/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let j = 0;
  let word = '';
  if (strs.length === 0) return '';

  while (true) {
    let letter = strs[0][j]
    for (let i = 0; i < strs.length; i++) {
      if (j === strs[i].length || strs[i][j] !== letter)
        return word;
    }
    word += letter
    j++;
  }
};

console.log('test 1 - ', longestCommonPrefix(["flower","flow","flight"]));
console.log('test 2 - ', longestCommonPrefix(["dog","racecar","car"]));
console.log('test 3 - ', longestCommonPrefix([""]));
console.log('test 4 - ', longestCommonPrefix([]));
