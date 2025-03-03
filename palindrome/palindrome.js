"use strict"
console.log("Watashi Wa WonderOfU")

function verifierPalindrome() {
    let motEntree = document.getElementById('inputWord').value;
    let motMinuscule = motEntree.toLowerCase();
    let motInverse = motMinuscule.split('').reverse().join('');

    if (motMinuscule === motInverse) {
        document.getElementById('result').textContent = `"${motEntree}" est un palindrome !`;
    } else {
        document.getElementById('result').textContent = `"${motEntree}" n'est pas un palindrome.`;
    }
}