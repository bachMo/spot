# SPOT Énergie — Site vitrine

Site vitrine de **SPOT Énergie**, expert en énergie solaire et électricité à Dakar, Sénégal.

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm start
# → Ouvre http://localhost:3000
```

## 📦 Build production

```bash
npm run build
```

## 🗂️ Structure du projet

```
src/
├── components/
│   ├── Nav.jsx / Nav.module.css        # Navigation sticky responsive
│   ├── Footer.jsx / Footer.module.css  # Footer 3 colonnes
│   ├── CtaBand.jsx / CtaBand.module.css # Bande CTA verte
│   └── PageHero.jsx / PageHero.module.css # Hero de page intérieure
├── pages/
│   ├── Home.jsx            # Accueil
│   ├── Services.jsx        # Détail des 3 services
│   ├── Realisations.jsx    # Liste des réalisations (filtres)
│   ├── RealisationDetail.jsx # Page détail d'un projet
│   ├── About.jsx           # À propos + équipe + timeline
│   ├── Contact.jsx         # Formulaire de contact
│   └── Factures.jsx        # 🔒 Page interne (URL : /factures)
├── data/
│   └── projects.js         # Données de toutes les réalisations
└── index.css               # Variables CSS globales
```

## 🎨 Système de couleurs

| Variable      | Valeur    | Usage                                    |
|---------------|-----------|------------------------------------------|
| `--blanc`     | `#FFFFFF` | Fond principal (60%)                     |
| `--gris`      | `#F4F6F4` | Fond sections alternées                  |
| `--vert`      | `#0D3D1E` | Nav, footer, CTA band, headers           |
| `--vert-m`    | `#2E7D32` | Accents, liens, coches — jamais en fond  |
| `--vert-l`    | `#E8F0E9` | Fonds légers, icônes bg                  |
| `--jaune`     | `#F5C200` | **Bouton devis nav + CTA band seulement** |

## 🔒 Page factures (interne)

Accessible uniquement via l'URL directe : **`/factures`**

Fonctionnalités :
- Saisie des informations client
- Ajout/suppression de lignes de prestation
- Calcul TVA automatique
- Aperçu en temps réel
- Impression / export PDF

## 📱 Responsive

- Desktop : ≥ 901px
- Tablette : 600–900px
- Mobile  : ≤ 600px

## ✏️ Personnalisation

Pour remplacer les données simulées par les vraies informations :

1. **Réalisations** → `src/data/projects.js`
2. **Contact** → `src/pages/Contact.jsx` (infos de contact)
3. **Footer** → `src/components/Footer.jsx`
4. **Stats hero** → `src/pages/Home.jsx`
