# 🚀 Guide de Déploiement Admin sur Vercel

## 🎯 **Étapes de déploiement**

### **1. Créer le repository GitHub**

Vous devez d'abord créer un repository sur GitHub :

1. Aller sur [github.com](https://github.com)
2. Cliquer sur **"New repository"**
3. Nom : `medusa-admin-vercel`
4. **Public** ou **Private** (au choix)
5. **Create repository**

### **2. Pousser le code vers GitHub**

```bash
cd medusa-admin-vercel
git remote add origin https://github.com/VOTRE_USERNAME/medusa-admin-vercel.git
git push -u origin main
```

### **3. Déployer sur Vercel**

1. Aller sur [vercel.com](https://vercel.com)
2. **Sign up** ou **Login** avec GitHub
3. Cliquer **"New Project"**
4. **Import Git Repository**
5. Sélectionner `medusa-admin-vercel`
6. **Deploy**

### **4. Configurer les variables d'environnement**

Dans Vercel Dashboard :
1. Aller dans **Settings** > **Environment Variables**
2. Ajouter :
   ```
   MEDUSA_BACKEND_URL = https://medusa-backend-r6sm.onrender.com
   NEXT_PUBLIC_MEDUSA_BACKEND_URL = https://medusa-backend-r6sm.onrender.com
   ```
3. **Save**

### **5. Redéployer**

1. Aller dans **Deployments**
2. Cliquer **"Redeploy"** sur le dernier déploiement
3. Attendre la fin du build

---

## 🎉 **Résultat attendu**

### **URLs disponibles :**
- **Admin Dashboard** : `https://votre-admin.vercel.app/admin`
- **Redirection** : `https://votre-admin.vercel.app` → `/admin`

### **Fonctionnalités :**
- ✅ **Interface admin complète**
- ✅ **Connexion au backend Render**
- ✅ **Gestion des produits**
- ✅ **Gestion des commandes**
- ✅ **Gestion des clients**

---

## 🔧 **Dépannage**

### **Erreur de build :**
```bash
# Si erreur de dépendances
npm install --legacy-peer-deps
```

### **Erreur de connexion backend :**
1. Vérifier que le backend Render est en ligne
2. Vérifier les variables d'environnement
3. Tester l'URL : `https://medusa-backend-r6sm.onrender.com/health`

### **Interface admin ne charge pas :**
1. Vérifier les logs Vercel
2. Vérifier la console du navigateur
3. S'assurer que `/admin` est accessible

---

## 📊 **Architecture finale**

```
┌─────────────────────┐    ┌──────────────────────┐
│   Vercel (Admin)    │    │   Render (Backend)   │
│                     │    │                      │
│ ┌─────────────────┐ │    │ ┌──────────────────┐ │
│ │ Next.js App     │ │    │ │ Medusa API       │ │
│ │ Port: 3000      │ │◄──►│ │ Port: 10000      │ │
│ │ /admin          │ │    │ │ PostgreSQL       │ │
│ └─────────────────┘ │    │ └──────────────────┘ │
└─────────────────────┘    └──────────────────────┘
```

---

## ✅ **Checklist finale**

- [ ] Repository GitHub créé
- [ ] Code poussé vers GitHub
- [ ] Projet importé sur Vercel
- [ ] Variables d'environnement configurées
- [ ] Déploiement réussi
- [ ] Admin accessible sur `/admin`
- [ ] Connexion backend fonctionnelle

**Une fois ces étapes terminées, votre admin Medusa sera live sur Vercel !** 🎉
