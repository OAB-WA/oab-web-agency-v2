# Production Environment Variables Setup Guide

This guide shows you how to add environment variables to your hosting platform for production deployment.

## 🚀 Vercel (Recommended for Next.js)

Vercel is the recommended platform for Next.js applications and is the easiest to set up.

### Step 1: Deploy to Vercel

1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Add analytics and conversion tracking"
   git push origin main
   ```

2. **Go to Vercel**: https://vercel.com
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

### Step 2: Add Environment Variables in Vercel

**Option A: During Initial Setup**
1. After importing your project, you'll see "Environment Variables" section
2. Click "Add" for each variable
3. Add the following:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX
RESEND_API_KEY = re_your_api_key_here
CONTACT_EMAIL = hello@oabwebagency.com
```

**Option B: After Deployment (Project Settings)**
1. Go to your project dashboard on Vercel
2. Click **Settings** tab
3. Click **Environment Variables** in the left sidebar
4. Click **Add New**
5. For each variable:
   - **Name**: Enter the variable name (e.g., `NEXT_PUBLIC_GA_MEASUREMENT_ID`)
   - **Value**: Enter the actual value
   - **Environment**: Select which environments to apply to:
     - ✅ Production
     - ✅ Preview (optional, for testing)
     - ✅ Development (optional)
   - Click **Save**

### Step 3: Redeploy

After adding environment variables:
1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on your latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger automatic redeploy

### Step 4: Verify

1. Visit your live site
2. Open browser DevTools → Console
3. Check for any errors
4. Test the contact form
5. Check Google Analytics Realtime to verify tracking

---

## 🌐 Netlify

### Step 1: Deploy to Netlify

1. **Push code to GitHub** (if not already done)

2. **Go to Netlify**: https://app.netlify.com
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `.next`

### Step 2: Add Environment Variables

1. Go to your site dashboard
2. Click **Site configuration** → **Environment variables**
3. Click **Add a variable**
4. Add each variable:
   - **Key**: Variable name (e.g., `NEXT_PUBLIC_GA_MEASUREMENT_ID`)
   - **Value**: Actual value
   - **Scopes**: Select where to apply
     - ✅ Production
     - ✅ Deploy previews (optional)
     - ✅ Branch deploys (optional)
5. Click **Save**

### Step 3: Redeploy

1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Clear cache and deploy site**
3. Or push a new commit

---

## ☁️ AWS Amplify

### Step 1: Deploy to AWS Amplify

1. Go to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings (auto-detected for Next.js)

### Step 2: Add Environment Variables

1. In your app dashboard, click **App settings**
2. Click **Environment variables**
3. Click **Manage variables**
4. Click **Add environment variable**
5. Add each variable:
   - **Variable name**: Enter the name
   - **Value**: Enter the value
   - **Branch**: Select which branches to apply to
6. Click **Save**

### Step 3: Redeploy

- Variables are applied on next deployment
- Or trigger a new build manually

---

## 🚂 Railway

### Step 1: Deploy to Railway

1. Go to Railway: https://railway.app
2. Click "New Project"
3. Connect GitHub repository
4. Railway auto-detects Next.js

### Step 2: Add Environment Variables

1. Click on your project
2. Click **Variables** tab
3. Click **New Variable**
4. Add each variable:
   - **Name**: Variable name
   - **Value**: Actual value
5. Click **Add**

### Step 3: Redeploy

- Variables are applied automatically
- Or trigger a redeploy from the dashboard

---

## 🐳 Docker / Self-Hosted

If you're deploying with Docker or self-hosting:

### Option 1: Environment File

Create `.env.production` file (don't commit to git):

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=hello@oabwebagency.com
```

### Option 2: Docker Compose

In your `docker-compose.yml`:

```yaml
services:
  web:
    build: .
    environment:
      - NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
      - RESEND_API_KEY=re_your_api_key_here
      - CONTACT_EMAIL=hello@oabwebagency.com
```

### Option 3: System Environment Variables

Set in your server/system:

```bash
export NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
export RESEND_API_KEY=re_your_api_key_here
export CONTACT_EMAIL=hello@oabwebagency.com
```

---

## 🔒 Security Best Practices

### ✅ DO:
- ✅ Use environment variables for all secrets
- ✅ Never commit `.env.local` to git
- ✅ Use different values for development and production
- ✅ Rotate API keys regularly
- ✅ Use least privilege for API keys
- ✅ Review who has access to environment variables

### ❌ DON'T:
- ❌ Commit `.env.local` to version control
- ❌ Share environment variables in chat/email
- ❌ Use production keys in development
- ❌ Hardcode secrets in your code
- ❌ Expose API keys in client-side code (except `NEXT_PUBLIC_*`)

---

## 📋 Environment Variables Checklist

Before deploying, ensure you have:

- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Your Google Analytics ID
- [ ] `RESEND_API_KEY` - Your Resend API key for emails
- [ ] `CONTACT_EMAIL` - Email to receive form submissions

### How to Get Each Value:

#### Google Analytics Measurement ID:
1. Go to https://analytics.google.com
2. Admin → Data Streams → Web
3. Copy Measurement ID (G-XXXXXXXXXX)

#### Resend API Key:
1. Go to https://resend.com
2. API Keys → Create API Key
3. Copy the key (starts with `re_`)

#### Contact Email:
- Use your business email
- Must be verified in Resend account

---

## 🧪 Testing Production Environment Variables

### After Deployment:

1. **Check Analytics**:
   - Visit your live site
   - Check Google Analytics Realtime reports
   - Should see your visit within 30 seconds

2. **Test Contact Form**:
   - Submit a test form
   - Check if email is received
   - Check browser console for errors

3. **Verify Variables Loaded**:
   - Open browser DevTools → Console
   - Type: `console.log(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)`
   - Should show your GA ID (only works for `NEXT_PUBLIC_*` vars)

---

## 🔄 Updating Environment Variables

### To Update a Variable:

1. **Vercel**: Settings → Environment Variables → Edit
2. **Netlify**: Site configuration → Environment variables → Edit
3. **AWS Amplify**: App settings → Environment variables → Edit
4. **Railway**: Variables tab → Edit

After updating:
- **Redeploy** your site (usually automatic)
- Changes take effect immediately on next deployment

---

## 🆘 Troubleshooting

### Variables Not Working?

1. **Check Variable Names**:
   - Must match exactly (case-sensitive)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` not `NEXT_PUBLIC_GA_ID`

2. **Check Environment Scope**:
   - Ensure variables are set for "Production" environment
   - Some platforms require separate settings for each environment

3. **Redeploy After Changes**:
   - Environment variables only apply on new deployments
   - Always redeploy after adding/updating variables

4. **Check Build Logs**:
   - Look for errors in deployment logs
   - Verify variables are being read correctly

5. **Client vs Server Variables**:
   - `NEXT_PUBLIC_*` variables are exposed to browser
   - Other variables are server-only
   - Make sure you're using the right prefix

---

## 📚 Platform-Specific Notes

### Vercel:
- ✅ Best Next.js support
- ✅ Automatic deployments from GitHub
- ✅ Preview deployments for PRs
- ✅ Free tier available
- ✅ Environment variables per environment

### Netlify:
- ✅ Good Next.js support
- ✅ Free tier available
- ✅ Easy GitHub integration
- ⚠️ May need custom build settings

### AWS Amplify:
- ✅ Full AWS integration
- ✅ Good for AWS ecosystem
- ⚠️ More complex setup
- ⚠️ Pricing can add up

### Railway:
- ✅ Simple deployment
- ✅ Good for full-stack apps
- ⚠️ Pricing based on usage

---

## ✅ Quick Reference

**Most Common Platform: Vercel**

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables in Settings
4. Deploy automatically

**Variables Needed:**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID
RESEND_API_KEY
CONTACT_EMAIL
```

**After Adding Variables:**
- Redeploy your site
- Test on live site
- Verify analytics tracking
- Test contact form

---

**Need Help?** Check your platform's documentation or support for specific issues.

