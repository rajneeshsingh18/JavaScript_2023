// Solved on codewars.com 

/*
Question 1 :
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

string = "The quick brown fox jumps 45over the lazy dog";
function isPangram(string) {
  const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
  string = string.toLowerCase().replace(/[^a-z]/g, '');
  const letters = new Set(string);
  return letters.size === 26;
}

console.log(isPangram(string));


