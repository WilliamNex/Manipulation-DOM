"use strict"
console.log("Watashi wa WonderOfU")

function genererPyramide() {
    // Récupérer la hauteur saisie par l'utilisateur
    const hauteur = parseInt(document.getElementById('hauteur').value);

    // Vérifier si la saisie est valide
    if (isNaN(hauteur) || hauteur < 1) {
        alert("Veuillez entrer un nombre valide supérieur ou égal à 1.");
        return;
    }

    let pyramide = '';
    const largeurMax = 2 * hauteur - 1; // Largeur maximale de la pyramide

    for (let i = 1; i <= hauteur; i++) {
        // Calculer le nombre d'étoiles pour l'étage actuel
        const etoiles = '*'.repeat(2 * i - 1);

        // Calculer le nombre d'espaces pour centrer la pyramide
        const espaces = ' '.repeat((largeurMax - etoiles.length) / 2);

        // Ajouter l'étage à la pyramide
        pyramide += espaces + etoiles + '\n';
    }

    // Afficher la pyramide dans l'élément <pre>
    document.getElementById('pyramide').textContent = pyramide;
}