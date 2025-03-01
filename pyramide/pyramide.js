"use strict"

function construirePyramide() {
    // Récupérer la valeur saisie par l'utilisateur
    const nombreEtages = document.getElementById("ligne-pyramide").value;

    // Vérifier si la saisie est un nombre valide
    if (isNaN(nombreEtages) || nombreEtages <= 0) {
        alert("Veuillez entrer un nombre valide supérieur à 0.");
        return;
    }

    let pyramide = "";
    const espace = " ";
    const etoile = "*";

    // Boucle pour construire chaque étage de la pyramide
    for (let i = 1; i <= nombreEtages; i++) {
        // Ajouter les espaces avant les étoiles pour centrer la pyramide
        pyramide += espace.repeat(nombreEtages - i);

        // Ajouter les étoiles pour l'étage actuel
        pyramide += etoile.repeat(2 * i - 1);

        // Passer à la ligne suivante
        pyramide += "\n";
    }

    // Afficher la pyramide dans l'élément <pre>
    document.getElementById("pyramide").textContent = pyramide;
}