# 🇸🇳 Senegal Neighborhoods

Base de données open source des quartiers et points de repère du Sénégal, développée en **TypeScript**.

Ce projet a pour objectif de construire progressivement une liste communautaire des quartiers, villes, localités et points de repère utilisés au Sénégal.

Les données sont organisées par **département → ville/localité → points de repère** et peuvent être directement utilisées dans des applications TypeScript ou JavaScript.

## 🎯 Objectif

L'objectif de ce projet est de permettre à la communauté de contribuer à l'amélioration des données géographiques locales du Sénégal.

Les contributeurs peuvent notamment :

- Ajouter des villes ou localités
- Ajouter des quartiers
- Ajouter des points de repère
- Corriger des informations existantes
- Compléter les quartiers actuellement vides
- Ajouter des points de repère manquants
- Signaler des erreurs ou des informations obsolètes

## 📦 Structure des données

Les données sont organisées de la manière suivante :

```text
Département
    ↓
Ville / Localité
    ↓
Point de repère
```

Par exemple :

```ts
export const SENEGAL_NEIGHBORHOODS = {
  [SenegalDepartment.DAKAR]: {
    [SenegalCity.YOFF]: [
      SenegalLandmark.YOFF_BCEAO,
      SenegalLandmark.YOFF_DIAMALAYE,
      SenegalLandmark.YOFF_VIRAGE,
    ],
  },
};
```

Chaque département utilise une valeur de `SenegalDepartment`, chaque ville ou localité utilise une valeur de `SenegalCity`, et les points de repère utilisent des valeurs de `SenegalLandmark`.

## 🗂️ Organisation du projet

```text
senegal-neighborhoods/
│
├── src/
│   ├── city/
│   │   └── senegal.city.ts
│   │
│   ├── department/
│   │   └── senegal.department.ts
│   │
│   ├── landmark/
│   │   └── senegal.landmark.ts
│   │
│   └── neighborhoods/
│       └── senegal.neighborhoods.ts
│
├── package.json
├── tsconfig.json
├── README.md
├── CONTRIBUTING.md
└── LICENSE
```

La structure exacte des dossiers peut évoluer au fur et à mesure du développement du projet.

## 🤝 Contribution

Les contributions sont les bienvenues !

Si vous connaissez bien une zone du Sénégal, vous pouvez aider à compléter les informations qui y sont associées.

Vous pouvez notamment contribuer en :

- Ajoutant un nouveau département
- Ajoutant une nouvelle ville ou localité
- Ajoutant un nouveau quartier
- Ajoutant un point de repère
- Corrigeant un nom
- Corrigeant l'association entre une ville et un point de repère
- Complétant une liste actuellement vide

Les contributions se font via **Pull Request** sur GitHub.

Si vous ne savez pas comment effectuer une modification directement, vous pouvez également ouvrir une **Issue** afin de signaler l'information manquante ou incorrecte.

## 🏗️ Ajouter un nouveau point de repère

Les points de repère sont définis dans `SenegalLandmark`.

Par exemple :

```ts
export enum SenegalLandmark {
  YOFF_BCEAO = "YOFF_BCEAO",
  YOFF_DIAMALAYE = "YOFF_DIAMALAYE",
  YOFF_VIRAGE = "YOFF_VIRAGE",
}
```

Le point de repère peut ensuite être ajouté à la ville correspondante :

```ts
[SenegalCity.YOFF]: [
  SenegalLandmark.YOFF_BCEAO,
  SenegalLandmark.YOFF_DIAMALAYE,
  SenegalLandmark.YOFF_VIRAGE,
],
```

## 🏙️ Ajouter une nouvelle ville ou localité

Si une ville ou localité n'existe pas encore dans `SenegalCity`, elle doit d'abord être ajoutée.

Exemple :

```ts
export enum SenegalCity {
  YOFF = "YOFF",
  OUAKAM = "OUAKAM",
  GRAND_YOFF = "GRAND_YOFF",
}
```

Elle peut ensuite être ajoutée au département correspondant :

```ts
[SenegalDepartment.DAKAR]: {
  [SenegalCity.YOFF]: [
    // Points de repère
  ],

  [SenegalCity.OUAKAM]: [
    // Points de repère
  ],
},
```

## 📝 Règles de contribution

Avant de soumettre une contribution, veuillez vérifier que :

1. Le nom utilisé est réellement utilisé localement.
2. L'information n'existe pas déjà dans le projet.
3. Vous n'ajoutez pas de doublon.
4. Le point de repère appartient bien à la localité indiquée.
5. Les noms des constantes respectent les conventions existantes.
6. Les modifications sont uniquement liées aux données du projet.
7. Vous n'ajoutez aucune donnée personnelle ou information privée.

## 🔎 Vérification des informations

Ce projet est **communautaire**. Les informations peuvent donc être incomplètes, incorrectes ou devenir obsolètes.

Avant d'ajouter une information, il est recommandé de la vérifier à partir de plusieurs sources lorsque cela est possible.

Si vous constatez une erreur, n'hésitez pas à :

- Ouvrir une Issue
- Proposer une Pull Request
- Contacter les mainteneurs du projet

## 💻 Utilisation

Le projet peut être utilisé dans différentes applications nécessitant des informations sur les quartiers et points de repère du Sénégal.

Par exemple :

- Applications web
- Applications mobiles
- Applications de recherche
- Applications de livraison
- Applications immobilières
- Applications de transport
- Applications de commerce
- Applications communautaires
- Applications de localisation

Les données étant écrites en TypeScript, elles peuvent facilement être intégrées dans des projets TypeScript ou JavaScript.

## 🌍 Pourquoi un projet communautaire ?

Les noms utilisés pour désigner les quartiers et les points de repère peuvent varier selon les habitants, les générations et les usages locaux.

Un point de repère peut parfois être beaucoup plus connu sous son nom local que sous son nom administratif.

L'objectif de ce projet est donc de permettre aux personnes qui connaissent réellement les différentes zones du Sénégal de contribuer à construire une base de données plus représentative de la réalité locale.

## ⚠️ Avertissement

Ce projet n'est pas une base de données administrative officielle.

Les informations sont fournies par des contributeurs et peuvent contenir des erreurs ou des approximations.

Les données doivent donc être utilisées avec discernement, notamment pour les applications nécessitant une précision géographique ou administrative élevée.

## ❤️ Contribuer

Chaque contribution peut aider à améliorer la représentation des quartiers et des points de repère du Sénégal.

Que vous ajoutiez un seul point de repère ou que vous complétiez une ville entière, votre contribution est la bienvenue.

**Construisons ensemble une base de données ouverte des quartiers et localités du Sénégal. 🇸🇳**
