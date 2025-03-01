"use strict"
console.log("Watashi wa WonderOfU")

function checkPalindrome() {
    const inputWord = document.getElementById('inputWord').value;
    const lowerCaseWord = inputWord.toLowerCase();
    const reversedWord = lowerCaseWord.split('').reverse().join('');

    if (lowerCaseWord === reversedWord) {
        document.getElementById('result').textContent = `"${inputWord}" est un palindrome !`;
    } else {
        document.getElementById('result').textContent = `"${inputWord}" n'est pas un palindrome.`;
    }
}