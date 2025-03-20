// Importation du module userData.js
const { users, formatUsers, filterAdults } = require("./userData");

// Affichage des objets globaux
console.log("Fichier en cours d'exécution :", __filename);
console.log("Répertoire du fichier :", __dirname);

// Utilisation de formatUsers pour afficher les utilisateurs formatés
console.log("Liste des utilisateurs formatés :");
console.log(formatUsers(users));

// Utilisation de filterAdults pour afficher les utilisateurs majeurs
console.log("Utilisateurs majeurs :");
console.log(formatUsers(filterAdults(users)));