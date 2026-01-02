# Render Deployment Guide

## Problem Fixed ✅

The deployment was failing because Render was trying to run `npm run dev` (which uses nodemon) instead of `npm start` (which uses node).

## Solution

### 1. Updated `package.json`
- **Production**: Uses `npm start` → runs `node server.js`
- **Development**: Uses `npm run dev` → runs `nodemon server.js`

### 2. Created `render.yaml`
This file tells Render exactly how to deploy your app.

## Render Dashboard Configuration

### Important: Update Your Render Service Settings

1. **Go to your Render Dashboard** → Select your backend service
2. **Update the Start Command**:
   - Change from: `npm run dev`
   - Change to: `npm start`

3. **Set Environment Variables** (in Render Dashboard):
   ```
   NODE_ENV=production
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=4000
   ```

### Build Settings
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Root Directory**: `backend` (if deploying only backend)

## Deployment Steps

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "fix: Configure for production deployment"
   git push origin main
   ```

2. Render will automatically redeploy

3. Check the logs - you should see:
   ```
   ==> Running 'npm start'
   > backend@1.0.0 start
   > node server.js
   Server running on port 4000
   ```

## Common Issues

### If deployment still fails:

1. **Check Render Dashboard**:
   - Settings → Start Command should be `npm start`
   - NOT `npm run dev`

2. **Environment Variables**:
   - Make sure all required env vars are set in Render Dashboard
   - MONGODB_URI, JWT_SECRET, etc.

3. **Root Directory**:
   - If your backend is in a subfolder, set Root Directory to `backend`

## Local Development

Continue using:
```bash
npm run dev
```

This will use nodemon for auto-restart during development.

## Production

Render will automatically use:
```bash
npm start
```

This uses plain Node.js without nodemon.
