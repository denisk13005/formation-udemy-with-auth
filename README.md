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

## Mise en place du fichier context.js

On crée le context avec createContext et on l'appelle AuthContext,

voir la vidéo 57 d'explication du context

On peu également utiliser Redux pour faire cela !!

## Login

On se log avec les identifiants username : johndoe et password: secret , ces identifiants ont t prédéfini par le concepteur de la formation

# Changement du header en fonction du loggin

!! ne pa exporter useAuth par default pour éviter une erreur !!

on importe useAuth dans le composant header on destructure pour extraire user et isAuthenticated qui nous permettrons de faire un rendu conditionnel d'élément

# Persistance de l'user

On utilise un useEffect dans context.js pour aller checker si le token est présent dans les cookies grace à la fonction getCookieFromBrowser(), si il est présent on met le state à jour et le loader sur false . !! Ne pas oublier d'appeler le fonction dans le useEffect !!

# Déconnexion

Ajout d'un boutton déconnexion qui appélera logout pour supprimer le token des cookies

# Gestion des rôles

Affichage de la page dashboard pour l'admin (role est une propriété de user 'admin' ou 'user')

# Gestion de l'expiration du token

Pour gérer l'expiration du token on va créer un try catch dans le useEffect de context.js afin de capturer l'erreur 401 qui correspondra à l'expiration de notre token, on supprimera alors le token des cookies et on invitera l'utilisateur à se reconnecter

# Routes Privées

On crée le fichier auth/protectedRoutes.js, et on utilise un HOC (composant d'ordre supérieur pour gérer l'accès à la page profile)
