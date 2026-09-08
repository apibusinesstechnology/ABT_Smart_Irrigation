`dossier_test/README.md`**

dossier_test/
  component_test/
  e2e_test/
  integration_test/
  load_test/
  performance_test/
  regression_test/
  sentinelle_test/
  unit_test/
  README.md

# **README — Dossier de Tests (Smart Irrigation System)**

Ce dossier contient l’ensemble des tests du projet **Smart Irrigation System**, organisés par type afin de garantir une couverture complète, une qualité constante et une détection rapide des régressions.  
Chaque sous‑dossier correspond à une catégorie de tests spécifique, utilisée dans les pipelines CI/CD et dans les validations internes.

---

## **Structure du dossier**

dossier_test/
  component_test/       → Tests des composants isolés (UI, modules)
  e2e_test/             → Tests de bout en bout (pipeline complet)
  integration_test/     → Tests d’intégration entre modules
  load_test/            → Tests de charge (stress, montée en charge)
  performance_test/     → Tests de performance (latence, débit)
  regression_test/      → Tests de non‑régression
  sentinelle_test/      → Tests de surveillance continue (monitoring)
  unit_test/            → Tests unitaires (fonctions, classes)
  README.md             → Documentation du dossier
```

---

## **Objectifs des tests**

Les tests ont pour but de :

- Vérifier la stabilité du système d’irrigation intelligent  
- Garantir la fiabilité des capteurs et des pompes  
- Assurer la cohérence des données transmises via MQTT  
- Valider le comportement du backend et du frontend  
- Détecter les régressions avant qu’elles n’atteignent la production  
- Mesurer la performance et la résistance du système  
- Surveiller en continu les modules critiques (tests sentinelles)

---

## **Description des catégories de tests**

### **1. `unit_test/` — Tests unitaires**
Tests isolés sur :
- Use cases  
- Services  
- Drivers (mockés)  
- Fonctions utilitaires  

Objectif : valider la logique interne sans dépendances externes.

---

### **2. `integration_test/` — Tests d’intégration**
Tests entre :
- Controllers → Use Cases → Repositories  
- MQTT → Gateway → Backend  
- Modules interconnectés  

Objectif : vérifier la cohésion entre les couches du système.

---

### **3. `component_test/` — Tests de composants**
Tests sur :
- Composants UI (React/Next.js)  
- Modules isolés du frontend  
- Widgets du tableau de bord  

Objectif : garantir que chaque composant fonctionne indépendamment.

---

### **4. `e2e_test/` — Tests End‑to‑End**
Pipeline complet :

**Capteur → MQTT → Backend → Règles → Pompe → Dashboard**

Objectif : valider le comportement réel du système dans son ensemble.

---

### **5. `load_test/` — Tests de charge**
Simulation de :
- Grand volume de données capteurs  
- Nombre élevé de messages MQTT  
- Multiples actions simultanées  

Objectif : vérifier la résistance du système sous forte pression.

---

### **6. `performance_test/` — Tests de performance**
Mesure de :
- Latence MQTT  
- Temps de réponse API  
- Temps de traitement des règles d’irrigation  

Objectif : optimiser la rapidité et la fluidité du système.

---

### **7. `regression_test/` — Tests de non‑régression**
Tests automatiques exécutés après chaque modification majeure.

Objectif : s’assurer qu’aucune fonctionnalité existante n’est cassée.

---

### **8. `sentinelle_test/` — Tests sentinelles**
Tests exécutés en continu ou à intervalles réguliers pour surveiller :

- Disponibilité du broker MQTT  
- Santé des capteurs  
- Réactivité des pompes  
- Cohérence des données  

Objectif : détecter les anomalies avant qu’elles n’impactent les utilisateurs.

---

## **Exécution des tests**

### Backend
npm run test
npm run test:unit
npm run test:integration
```

### Frontend

npm run test:ui
npm run test:component

### IoT / MQTT

npm run test:mqtt

### End‑to‑End

npm run test:e2e

## **Ajouter un nouveau test**

1. Choisir le bon dossier selon le type de test  
2. Créer un fichier `*.spec.ts` ou `*.test.ts`  
3. Mocker les dépendances si nécessaire  
4. Écrire des assertions claires et isolées  
5. Vérifier que le test passe en local  
6. Vérifier qu’il passe dans le pipeline CI/CD  

---

## **Mocks & Fixtures**

Les mocks et fixtures se trouvent dans :

dossier_test/utils/
dossier_test/fixtures/

Ils permettent de simuler :

- Capteurs (humidité, température)  
- Pompes (ON/OFF)  
- Messages MQTT  
- Réponses API  
- Configurations de champs  

## **Intégration CI/CD**

Les tests sont exécutés automatiquement dans le pipeline :

1. Installation des dépendances  
2. Tests unitaires  
3. Tests d’intégration  
4. Tests MQTT  
5. Tests E2E  
6. Rapport de couverture  
7. Blocage du merge si un test échoue  

## **Qualité & Standards**

Ce dossier suit les standards API Business Technology :

- Tests isolés  
- Mocks obligatoires  
- Pas de dépendances physiques (ESP32 réel)  
- Couverture minimale : **80%**  
- E2E obligatoires avant chaque release  
