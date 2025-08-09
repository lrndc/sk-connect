# SKConnect Frontend - Vercel Deployment Guide

## Prerequisites

1. **Backend Deployed**: Ensure your backend is running at `https://sk-connect-backend-production-543c.up.railway.app`
2. **Vercel Account**: Have a Vercel account ready
3. **GitHub Repository**: Code should be in a GitHub repository

## Deployment Steps

### 1. Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository containing this frontend code

### 2. Configure Build Settings

Vercel should auto-detect Next.js. Verify these settings:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install`

### 3. Environment Variables

In Vercel project settings > Environment Variables, add:

```bash
# Required: Backend API URL
NEXT_PUBLIC_BACKEND_URL=https://sk-connect-backend-production-543c.up.railway.app

# Optional: App URL (auto-set by Vercel)
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

### 4. Advanced Configuration

The project includes these configurations:

#### `vercel.json`
- Sets function timeout to 30 seconds
- Configures security headers
- Sets deployment region to `iad1` (US East)

#### `next.config.mjs`
- Ignores TypeScript and ESLint errors during build
- Configures image optimization
- Sets up environment variable passthrough

### 5. Deploy

1. Click "Deploy" in Vercel
2. Wait for build to complete
3. Verify deployment at your Vercel URL

## Post-Deployment Verification

### 1. Test Backend Connection

Visit your deployed app and check:
- Registration/Login functionality
- API endpoints respond correctly
- Backend status indicator shows "Connected"

### 2. Test Core Features

- User registration and authentication
- Event viewing and management
- Admin dashboard (if applicable)

## Troubleshooting

### Common Issues

1. **Backend Connection Failed**
   - Verify `NEXT_PUBLIC_BACKEND_URL` is set correctly
   - Check if backend at Railway is running
   - Ensure CORS is configured on backend for your Vercel domain

2. **Build Errors**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript/ESLint issues if build fails

3. **API Route Errors**
   - All API routes are configured with `force-dynamic`
   - Check function timeout settings in `vercel.json`

### Environment-Specific Settings

For **Production**:
```bash
NEXT_PUBLIC_BACKEND_URL=https://sk-connect-backend-production-543c.up.railway.app
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

For **Preview/Staging**:
```bash
NEXT_PUBLIC_BACKEND_URL=https://sk-connect-backend-production-543c.up.railway.app
NEXT_PUBLIC_APP_URL=https://your-preview.vercel.app
```

## Backend CORS Configuration

Ensure your Railway backend allows requests from your Vercel domain:

```javascript
// In your backend CORS config
const allowedOrigins = [
  'http://localhost:3000',
  'https://your-app.vercel.app',
  'https://your-app-*.vercel.app' // For preview deployments
];
```

## Deployment Checklist

- [ ] Backend is running at Railway
- [ ] Repository is connected to Vercel
- [ ] Environment variables are set
- [ ] Build completes successfully
- [ ] App loads without errors
- [ ] Backend connection works
- [ ] Authentication functions properly
- [ ] All major features work

## Support

If you encounter issues:

1. Check Vercel build logs
2. Verify environment variables
3. Test API endpoints manually
4. Check backend logs at Railway
5. Verify CORS configuration

The frontend is now ready for production deployment on Vercel!
