# Suite du projet formation-udemy / Partie authentification

# Authentification avec Next

Authentifier coté client sinon on est obligé d'utiliser getServerSideProps dans toutes les pages et ça sera moins rapide du coup
Utilisation des cookies pour le stockage du token car disponible coté serveur contrairement à localStorage

## Mise en oeuvre

Utilisation de l'API context pour avoir un state partagé dans tous nos composants et pages
Création d'un composant d'un composant d'ordre supérieur (HOC) qui utilise ce contexte et protège les routes en conséquence
Définition d'un header global dans Axios pour inclure le token d'auth dans toutes les requêtes
Besoin d'un back pour renvoyer un jeton d'auth lorsque la connexion est correcte
Besoin de la librairie `js-cookie`

## Installation des dépendances nécessaires au projet 

`npm install axios js-cookie`