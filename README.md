# Othello

Voici un jeu "Othello" classique.

## Comment commencer ?

Afin de pouvoir lancer le projet, il suffit de suivre les instructions suivantes :

### Installation du projet
#### SSH

```
git clone git@github.com:PrescilliaDSD/othello-prescilliadsd.git
cd othello-prescilliadsd
```

#### HTTPS

```
git clone https://github.com/PrescilliaDSD/othello-prescilliadsd.git
cd othello-prescilliadsd
```

### configuration du projet

` npm install `

Un fichier `.env.example` est présent à la racine du projet.
Il faut le copier et le renommer `.env` en modifiant si nécessaire les variables présentes à l'intérieur correspondants à :
- PORT pour le port sur lequel le client va s'exécuter.
- DB_HOST pour l'hôte de la base de données
- DB_PORT pour le port sur lequel va s'exécuter la base de données

### lancement du projet

Il vous faut lancer votre base de données puis exécuter la commande :

`npm start`