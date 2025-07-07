# 🎯 Medusa Admin pour Vercel

## 📋 **Description**
Interface d'administration Medusa déployée séparément sur Vercel, connectée au backend API sur Render.

## 🔗 **URLs**
- **Backend API** : `https://medusa-backend-r6sm.onrender.com`
- **Admin (après déploiement)** : `https://votre-admin.vercel.app`

## 🚀 **Déploiement sur Vercel**

### **1. Créer le repository GitHub :**
```bash
cd medusa-admin-vercel
git init
git add .
git commit -m "Admin Medusa pour Vercel"
git remote add origin https://github.com/Bigbloo/medusa-admin-vercel.git
git push -u origin main
```

### **2. Déployer sur Vercel :**
1. Aller sur [vercel.com](https://vercel.com)
2. **Import Git Repository**
3. Sélectionner `medusa-admin-vercel`
4. **Deploy**

### **3. Variables d'environnement :**
Dans Vercel Dashboard > Settings > Environment Variables :
```
MEDUSA_BACKEND_URL=https://medusa-backend-r6sm.onrender.com
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://medusa-backend-r6sm.onrender.com
```

## 📁 **Structure du projet**
```
medusa-admin-vercel/
├── app/
│   ├── page.tsx                    # Redirection vers /admin
│   └── admin/[[...path]]/page.tsx  # Dashboard admin
├── package.json                    # Dépendances
├── next.config.js                  # Configuration Next.js
├── vercel.json                     # Configuration Vercel
├── .env.local                      # Variables locales
└── README.md                       # Ce fichier
```

## 🎯 **Fonctionnalités**
- ✅ **Dashboard complet** - Interface admin Medusa v2
- ✅ **Connexion backend** - API sur Render
- ✅ **Déploiement automatique** - Via Vercel
- ✅ **Variables d'environnement** - Configuration flexible

## 🔧 **Développement local**
```bash
# Installer les dépendances
npm install

# Démarrer en mode développement
npm run dev

# Admin disponible sur http://localhost:3000/admin
```

## 📊 **Architecture**
```
Frontend (Vercel)     Backend (Render)
┌─────────────────┐   ┌──────────────────┐
│ Admin Dashboard │──▶│ API Medusa       │
│ Next.js         │   │ PostgreSQL       │
│ Port: 3000      │   │ Port: 10000      │
└─────────────────┘   └──────────────────┘
```

## ✅ **Avantages de cette approche**
- **Séparation des responsabilités** - Admin et API indépendants
- **Scaling indépendant** - Chaque service peut évoluer séparément
- **Déploiement simple** - Vercel pour le frontend, Render pour l'API
- **Performance optimisée** - CDN Vercel pour l'interface
