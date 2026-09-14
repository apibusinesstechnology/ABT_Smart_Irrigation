# 🌱 **README — Smart Irrigation System (Version PRO MAX)**  
### *Système d’irrigation intelligent basé sur l’IoT, l’automatisation et l’analyse de données*

---

<div align="center">
  <img src="logo_SmartIrrigation.png" alt="Smart Irrigation Logo" width="180" />
</div>

---

## Présentation du projet

**Smart Irrigation System** est une solution intelligente permettant d’automatiser l’irrigation agricole grâce à des capteurs IoT, une API centralisée, des règles d’irrigation dynamiques et un tableau de bord moderne.

Le système optimise l’utilisation de l’eau, améliore la productivité agricole et permet une gestion intelligente des ressources.

Ce projet fait partie de l’écosystème technologique d’**API Business Technology**.

---

## Objectifs du système

Smart Irrigation permet de :

- Automatiser l’irrigation selon l’humidité du sol, la météo et les règles définies  
- Collecter et analyser les données des capteurs en temps réel  
- Contrôler les pompes à distance via MQTT  
- Réduire la consommation d’eau  
- Améliorer la productivité agricole  
- Offrir une interface moderne pour la supervision complète du système  

---

## Fonctionnalités principales

### Capteurs IoT
- Humidité du sol  
- Température  
- Luminosité  
- Débit d’eau  
- Niveau de réservoir  

### Automatisation intelligente
- Activation/désactivation automatique des pompes  
- Règles d’irrigation personnalisées  
- Gestion des cycles d’arrosage  
- Mode manuel ou automatique  

### Tableau de bord moderne
- Visualisation des capteurs  
- Statistiques d’irrigation  
- Historique des actions  
- Graphiques de consommation d’eau  

### Alertes intelligentes
- Niveau d’eau bas  
- Capteur inactif  
- Débit anormal  
- Pompes hors service  

---

## Architecture globale

```
Smart Irrigation System
│
├── IoT (ESP32 + Capteurs)
│   ├── Humidité du sol
│   ├── Température
│   ├── Luminosité
│   └── Débit d’eau
│
├── Communication (MQTT)
│   ├── Broker
│   └── Topics IoT
│
├── Backend (Node.js / NestJS)
│   ├── API REST
│   ├── Règles d’irrigation
│   ├── Gestion des pompes
│   └── Sécurité & Authentification
│
├── Frontend (Next.js / React)
│   ├── Tableau de bord
│   ├── Capteurs
│   └── Historique
│
└── DevOps
    ├── GitLab CI/CD
    ├── Tests automatisés
    ├── SonarQube
    ├── Stryker
    ├── Monitoring
    └── Infrastructure sécurisée
```

---

## Technologies utilisées

### IoT
- ESP32  
- Capteurs analogiques et numériques  
- MQTT  

### Backend
- Node.js  
- NestJS  
- TypeScript  

### Frontend
- React  
- Next.js  
- TailwindCSS  

### DevOps
- GitLab CI/CD  
- SonarQube  
- Stryker Mutation Testing  
- Docker  
- Azure  

---

## Installation & Déploiement

### Backend
```bash
npm install
npm run build
npm start
```

### Frontend
```bash
npm install
npm run dev
```

### IoT
- Configurer les topics MQTT  
- Définir les seuils d’humidité  
- Connecter les capteurs à l’ESP32  

### Déploiement
- Pipeline GitLab CI/CD  
- Environnements : dev → staging → production  
- Déploiement sécurisé via Azure  

---

## Documentation API (aperçu)

### Capteurs
- `GET /sensors`  
- `POST /sensors/update`  

### Pompes
- `POST /pump/on`  
- `POST /pump/off`  
- `GET /pump/status`  

### Règles d’irrigation
- `GET /rules`  
- `POST /rules/create`  

### Historique
- `GET /history`  

---

## Roadmap

### 2026
- IoT v1  
- Dashboard v1  
- Règles d’irrigation basiques  

### 2027
- IA prédictive (analyse météo + sol)  
- Optimisation automatique des cycles  
- Détection d’anomalies avancée  

### 2028
- Version entreprise  
- Intégration cloud complète  
- Gestion multi‑fermes  

---

## Licence

Ce projet est **UNLICENSED**.  
Aucune permission n’est accordée pour utiliser, copier, modifier ou distribuer ce logiciel sans autorisation explicite du propriétaire.

Tous droits réservés.  
© API Business Technology – Projet Smart Irrigation System

---

## Contact

**Fondateur & CEO : Pierre Richard Saint Louis**  
API Business Technology  
Ottawa, Ontario, Canada

---