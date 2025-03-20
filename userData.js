// Définition d'un tableau d'utilisateurs
const users = [
    { name: "Kyllian Senrens", age: 20, email: "kyllian@example.com" },
    { name: "Jean Moulin", age: 17, email: "jean@example.com" },
    { name: "Arthur Martin", age: 25, email: "arthur@example.com" },
    { name: "Thomas Bernard", age: 32, email: "thomas@example.com" },
    { name: "Camille Petit", age: 19, email: "camille@example.com" }
];

// Fonction de formatage des utilisateurs
function formatUsers(usersArray) {
    return usersArray.map(user => `Nom: ${user.name}, Age: ${user.age}, Email: ${user.email}`);
}

// Fonction pour filtrer uniquement les utilisateurs majeurs
function filterAdults(usersArray) {
    return usersArray.filter(user => user.age >= 18);
}

// Exportation des objets et fonctions
module.exports = { users, formatUsers, filterAdults };