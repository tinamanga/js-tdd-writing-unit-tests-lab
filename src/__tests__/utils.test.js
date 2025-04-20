// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  test('returns true for a known palindrome: "racecar"', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test('returns false for a non-palindrome: "car"', () => {
    expect(isPalindrome("car")).toBe(false);
  });

  test('is case-insensitive: "RaceCar"', () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test('returns false for empty string', () => {
    expect(isPalindrome("")).toBe(false);
  });

  test('throws error for input with non-alphabetic characters: "race1car"', () => {
    expect(() => isPalindrome("race1car")).toThrow("Input must contain only alphabetic characters.");
  });

  test('throws error for non-string input: 12345', () => {
    expect(() => isPalindrome(12345)).toThrow("Input must be a string.");
  });
});
