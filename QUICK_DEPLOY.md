# ⚡ Quick Deploy Checklist

## For Someone Cloning This Repo

### 🚀 Fastest Route (5 minutes)

1. **Clone & Install**
   ```bash
   git clone [your-repo]
   cd sk-connect-frontend
   npm install
   ```

2. **Choose Deployment Platform**
   - 📘 **Vercel** (Recommended): [vercel.com](https://vercel.com)
   - 🟢 **Netlify**: [netlify.com](https://netlify.com)  
   - 🚂 **Railway**: [railway.app](https://railway.app)

3. **Set Environment Variable**
   ```bash
   NEXT_PUBLIC_BACKEND_URL=https://sk-connect-backend-production-543c.up.railway.app
   ```

4. **Deploy**
   - Connect GitHub repo to platform
   - Set environment variable
   - Click deploy

### ✅ That's it! Your app will be live.

---

## 🔧 Custom Backend Route (30 minutes)

If you want your own backend:

1. **Deploy Backend First**
   - Clone SKConnect backend repo
   - Deploy to Railway/Heroku
   - Get your backend URL

2. **Update Frontend**
   ```bash
   NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
   ```

3. **Deploy Frontend**
   - Same steps as above
   - Use your backend URL instead

---

## 📱 Platform-Specific Quick Steps

### Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import GitHub repo
3. Add env var: `NEXT_PUBLIC_BACKEND_URL`
4. Deploy

### Netlify  
1. Go to [app.netlify.com/start](https://app.netlify.com/start)
2. Connect Git repo
3. Add env var in Site Settings
4. Deploy

### Railway
1. Go to [railway.app](https://railway.app)
2. "Deploy from GitHub"
3. Add env var in Variables tab
4. Deploy

---

## 🎯 Result

You'll have a working SKConnect app with:
- ✅ User registration & login
- ✅ Event management
- ✅ Admin dashboard  
- ✅ Real-time backend connection

**Test URL Examples:**
- Vercel: `https://your-app.vercel.app`
- Netlify: `https://your-app.netlify.app`
- Railway: `https://your-app.railway.app`
