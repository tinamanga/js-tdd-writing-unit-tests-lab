function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error("Input must be a string.");
    }
  
    if (word.length === 0) {
        return false;
      }
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must contain only alphabetic characters.");
    }
  
    if (word.length === 0) {
      return false;
    }
  
    const normalized = word.toLowerCase();
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
  }
  
  module.exports = { isPalindrome };
  