# 🚀 SKConnect Frontend - Clone & Deploy Guide

## For New Users Cloning This Repository

If you've cloned this repository and want to deploy it to your own account, follow this comprehensive guide.

## 📋 Prerequisites

### 1. **Backend Requirement**
You need a backend API server. You have two options:

**Option A: Use the Existing Backend** (Recommended for testing)
- Backend URL: `https://sk-connect-backend-production-543c.up.railway.app`
- Ready to use immediately
- Shared with other deployments

**Option B: Deploy Your Own Backend**
- Clone the SKConnect backend repository
- Deploy to Railway, Heroku, or similar platform
- Get your own backend URL

### 2. **Platform Accounts**
Choose a deployment platform:
- **Vercel** (Recommended) - Free tier available
- **Netlify** - Free tier available  
- **Railway** - Free tier with limitations
- **Fly.io** - Free allowance

## 🔧 Setup Steps

### 1. Clone the Repository

```bash
git clone [your-forked-repo-url]
cd sk-connect-frontend
npm install
```

### 2. Environment Configuration

Create a `.env.local` file based on `.env.example`:

```bash
# Copy the example file
cp .env.example .env.local
```

Edit `.env.local` with your settings:

```bash
# Required: Your backend URL
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com

# Optional: Your app URL (set automatically by deployment platforms)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Database (only if running locally)
MONGODB_URI=mongodb://localhost:27017/skconnect
```

### 3. Test Locally

```bash
# Run the development server
npm run dev

# Test backend connection
# Visit http://localhost:3000 and check if the app loads
```

## 🚀 Deployment Options

### Option 1: Deploy to Vercel (Recommended)

#### Steps:
1. **Create Vercel Account**: Go to [vercel.com](https://vercel.com)
2. **Connect Repository**: 
   - Click "New Project"
   - Import your GitHub repository
3. **Configure Environment Variables**:
   ```bash
   NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
   ```
4. **Deploy**: Click "Deploy"

#### Vercel-Specific Configuration:
- Framework: Next.js (auto-detected)
- Build Command: `npm run build`
- Output Directory: `.next`
- Node.js Version: 18.x or higher

### Option 2: Deploy to Netlify

#### Steps:
1. **Create Netlify Account**: Go to [netlify.com](https://netlify.com)
2. **Connect Repository**: Choose "Deploy with Git"
3. **Build Settings**:
   - Build Command: `npm run build`
   - Publish Directory: `.next`
4. **Environment Variables**:
   ```bash
   NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
   ```

### Option 3: Deploy to Railway

#### Steps:
1. **Create Railway Account**: Go to [railway.app](https://railway.app)
2. **Deploy from GitHub**: Connect your repository
3. **Environment Variables**:
   ```bash
   NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
   ```

## 🔧 Backend Configuration Options

### Using Existing Backend
If using the shared backend (`https://sk-connect-backend-production-543c.up.railway.app`):

✅ **Pros:**
- No backend setup required
- Ready to test immediately
- All features work out of the box

⚠️ **Cons:**
- Shared database with other users
- Data may be reset periodically
- Not suitable for production use

### Setting Up Your Own Backend

#### Deploy SKConnect Backend:
1. **Get Backend Code**: Clone the SKConnect backend repository
2. **Deploy to Railway/Heroku**:
   ```bash
   # Example for Railway
   railway new
   railway add
   railway up
   ```
3. **Get Backend URL**: Copy your deployed backend URL
4. **Update Frontend**: Set `NEXT_PUBLIC_BACKEND_URL` to your backend URL

#### Backend Environment Variables:
Your backend will need:
```bash
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
NODE_ENV=production
```

## 🛠 Platform-Specific Configurations

### For Vercel
- ✅ `vercel.json` is already configured
- ✅ Next.js optimization enabled
- ✅ API routes configured for serverless

### For Netlify
You may need to add `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

### For Railway
- ✅ Works with existing configuration
- ✅ Auto-detects Next.js
- ✅ Environment variables through dashboard

## ✅ Post-Deployment Checklist

After deploying, verify:

- [ ] **App loads** at your deployment URL
- [ ] **Login/Register** functions work
- [ ] **Backend connection** shows "Connected" status
- [ ] **API calls** return data (check browser network tab)
- [ ] **Navigation** works between pages

## 🚨 Troubleshooting

### Common Issues:

**1. Backend Connection Failed**
- ✅ Check `NEXT_PUBLIC_BACKEND_URL` is set correctly
- ✅ Verify backend is accessible (visit backend-url/api/health)
- ✅ Check for CORS issues in browser console

**2. Build Failures**
- ✅ Check Node.js version (18+ recommended)
- �� Run `npm install` to ensure dependencies
- ✅ Check build logs for specific errors

**3. Environment Variables Not Working**
- ✅ Ensure variables start with `NEXT_PUBLIC_`
- ✅ Restart deployment after adding variables
- ✅ Check variable names match exactly

**4. 404 Errors**
- ✅ Verify deployment platform routing configuration
- ✅ Check if SPA redirect rules are needed

## 🔐 Security Considerations

### For Production Use:

1. **Use Your Own Backend**: Don't use shared backend for real applications
2. **Environment Variables**: Never commit `.env.local` to git
3. **CORS Configuration**: Ensure backend only allows your domain
4. **Database Security**: Use proper authentication and SSL

## 📞 Support Resources

- **Platform Documentation**:
  - [Vercel Docs](https://vercel.com/docs)
  - [Netlify Docs](https://docs.netlify.com)
  - [Railway Docs](https://docs.railway.app)

- **Framework Resources**:
  - [Next.js Deployment](https://nextjs.org/docs/deployment)
  - [React Documentation](https://reactjs.org/docs)

## 🎯 Summary

**Quick Start for Testing:**
1. Clone repository
2. Set `NEXT_PUBLIC_BACKEND_URL` to existing backend
3. Deploy to Vercel
4. Test functionality

**Production Setup:**
1. Deploy your own backend
2. Configure custom domain
3. Set up monitoring
4. Configure proper database

Your cloned SKConnect frontend is now ready for deployment! 🚀
