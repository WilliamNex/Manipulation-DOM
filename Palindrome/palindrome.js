"use strict"
console.log("Watashi Wa WonderOfU")

function palindrome() {
    const motSaisi = document.getElementById('id-mot-saisi').value;
    const motNettoye = motSaisi.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const motInverse = motNettoye.split('').reverse().join('');

    if (motNettoye === motInverse) {
        document.getElementById('resultat').textContent = `"${motSaisi}" est un palindrome !`;
    } else {
        document.getElementById('resultat').textContent = `"${motSaisi}" n'est pas un palindrome.`;
    }
}