"use strict"

function construirePyramide() {
    // Récupérer la valeur saisie par l'utilisateur
    let nombreEtages = document.getElementById("ligne-pyramide").value;

    // Vérifier si la saisie est un nombre valide
    if (isNaN(nombreEtages) || nombreEtages <= 0) {
        alert("Veuillez entrer un nombre valide supérieur à 0.");
        return;
    }

    let pyramide = "";
    let espace = " ".repeat(nombreEtages); // Créer une chaîne d'espaces de longueur maximale
    let etoile = "*".repeat(2 * nombreEtages - 1); // Créer une chaîne d'étoiles de longueur maximale

    // Boucle pour construire chaque étage de la pyramide
    for (let i = 1; i <= nombreEtages; i++) {
        // Ajouter les espaces avant les étoiles pour centrer la pyramide
        pyramide += espace.slice(0, nombreEtages - i);

        // Ajouter les étoiles pour l'étage actuel
        pyramide += etoile.slice(0, 2 * i - 1);

        // Passer à la ligne suivante
        pyramide += "\n";
    }

    // Afficher la pyramide dans l'élément <pre>
    document.getElementById("pyramide").textContent = pyramide;
}