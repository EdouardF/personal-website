# README.md

# Projet [project-name]

Ce projet contient deux parties principales : une application et un site de documentation utilisant Docusaurus.

## Application

Le dossier `app` contient le code source de l'application. Voici un aperçu des fichiers importants :

- `src/app.ts` : Point d'entrée de l'application, configuration des middleware et des routes.
- `src/types/index.ts` : Exportation des interfaces définissant les types utilisés dans l'application.
- `package.json` : Configuration npm avec les dépendances et les scripts.
- `tsconfig.json` : Configuration TypeScript pour le projet.

## Documentation

Le dossier `blog` contient la documentation générée par Docusaurus. Les fichiers importants incluent :

- `docs/intro.md` : Documentation d'introduction pour le site Docusaurus.
- `docusaurus.config.js` : Configuration de Docusaurus, y compris le titre et les plugins.
- `package.json` : Configuration npm spécifique à Docusaurus.

## Installation

Pour installer les dépendances, exécutez :

```bash
npm install
```

## Lancer l'application

Pour démarrer l'application, exécutez :

```bash
npm start
```

## Lancer la documentation

Pour démarrer le site de documentation, naviguez dans le dossier `blog` et exécutez :

```bash
npm start
```