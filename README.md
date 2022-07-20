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

# on crée les pages le header et le formulaire

# process.browser

va nous permettre de savoir si nous sommes coté client ou serveur

# Configuration axios

on crée le dossier auth et le fichier axios.js dans lequel on rentre la configuration axios requise pour le projet

## on crée le fichier cookies.js qui va gérer les cookies

# Installation de la librairie jwt-decode qui va nous permettre de décoder notre token
`npm install jwt-decode`
