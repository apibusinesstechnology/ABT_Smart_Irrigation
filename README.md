# 🌱 Smart Irrigation System  
Système d’irrigation intelligent basé sur l’IoT, l’analyse de données et l’automatisation.

Le **Smart Irrigation System** est une solution complète permettant de contrôler automatiquement l’irrigation d’un champ ou d’une zone agricole grâce à des capteurs, des microcontrôleurs et une API centralisée. Le projet combine **ESP32**, **MQTT**, **backend Node/NestJS**, **frontend Next.js**, et une logique métier avancée pour optimiser l’utilisation de l’eau.

---

## Objectifs du projet

- Automatiser l’irrigation selon l’humidité du sol, la météo et les règles définies  
- Collecter et analyser les données des capteurs en temps réel  
- Contrôler les pompes à distance via MQTT  
- Offrir un tableau de bord moderne pour visualiser l’état du système  
- Réduire la consommation d’eau et améliorer l’efficacité agricole  
- Fournir une architecture logicielle propre, scalable et maintenable  

---

## Technologies utilisées

- **ESP32 / Capteurs** : lecture de l’humidité, température, etc.  
- **MQTT Broker** : communication temps réel entre IoT et backend  
- **Node.js / NestJS** : API, logique métier, règles d’irrigation  
- **Next.js / React** : interface utilisateur moderne  
- **MongoDB / Postgres** : stockage des données  
- **CI/CD GitLab** : tests, intégration continue, déploiement  
- **Clean Architecture** : séparation claire des couches et responsabilités  

---

## Fonctionnalités principales

- Lecture des capteurs en temps réel  
- Calcul automatique du plan d’irrigation  
- Activation/désactivation des pompes  
- Tableau de bord avec graphiques et indicateurs  
- Historique des données et des actions  
- Tests complets (unitaires, intégration, E2E, IoT, performance)  

---

## Qualité & Tests

Le projet inclut un dossier de tests complet :

```
dossier_test/
  unit_test/
  integration_test/
  component_test/
  e2e_test/
  load_test/
  performance_test/
  regression_test/
  sentinelle_test/
```

Chaque catégorie garantit la fiabilité du système, du capteur jusqu’au tableau de bord.

---

## Vision

Smart Irrigation System vise à devenir une plateforme **Agritech** moderne, fiable et extensible, permettant aux exploitations agricoles d’automatiser l’irrigation, d’économiser l’eau et d’améliorer la productivité grâce à l’IoT et à l’intelligence logicielle.

---

