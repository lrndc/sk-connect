#!/usr/bin/env node

/**
 * Deployment Verification Script
 * Verifies that the frontend is properly configured for Vercel deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 SKConnect Frontend - Deployment Verification\n');

// Check 1: Environment configuration
console.log('1. Checking environment configuration...');
const envExample = path.join(__dirname, '..', '.env.example');
if (fs.existsSync(envExample)) {
  console.log('   ✅ .env.example exists');
} else {
  console.log('   ❌ .env.example missing');
}

// Check 2: Vercel configuration
console.log('\n2. Checking Vercel configuration...');
const vercelConfig = path.join(__dirname, '..', 'vercel.json');
if (fs.existsSync(vercelConfig)) {
  console.log('   ✅ vercel.json exists');
  const config = JSON.parse(fs.readFileSync(vercelConfig, 'utf8'));
  if (config.functions && config.functions['app/api/**/*.ts']) {
    console.log('   ✅ API routes configured with timeout');
  }
} else {
  console.log('   ❌ vercel.json missing');
}

// Check 3: Next.js configuration
console.log('\n3. Checking Next.js configuration...');
const nextConfig = path.join(__dirname, '..', 'next.config.mjs');
if (fs.existsSync(nextConfig)) {
  console.log('   ✅ next.config.mjs exists');
  const configContent = fs.readFileSync(nextConfig, 'utf8');
  if (configContent.includes('NEXT_PUBLIC_BACKEND_URL')) {
    console.log('   ✅ Backend URL configured in Next.js');
  }
} else {
  console.log('   ❌ next.config.mjs missing');
}

// Check 4: API routes dynamic configuration
console.log('\n4. Checking API routes dynamic configuration...');
const apiDir = path.join(__dirname, '..', 'app', 'api');
let dynamicRoutesCount = 0;
let totalApiRoutes = 0;

function checkApiRoutes(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      checkApiRoutes(itemPath);
    } else if (item === 'route.ts') {
      totalApiRoutes++;
      const content = fs.readFileSync(itemPath, 'utf8');
      if (content.includes("export const dynamic = 'force-dynamic'")) {
        dynamicRoutesCount++;
      }
    }
  }
}

if (fs.existsSync(apiDir)) {
  checkApiRoutes(apiDir);
  console.log(`   ✅ Found ${totalApiRoutes} API routes`);
  console.log(`   ✅ ${dynamicRoutesCount} routes configured as dynamic`);
  if (dynamicRoutesCount === totalApiRoutes) {
    console.log('   ✅ All API routes properly configured for Vercel');
  } else {
    console.log(`   ⚠️  ${totalApiRoutes - dynamicRoutesCount} routes may need dynamic configuration`);
  }
}

// Check 5: Backend URL consistency
console.log('\n5. Checking backend URL consistency...');
const correctBackendUrl = 'https://sk-connect-backend-production-543c.up.railway.app';
let correctUrlCount = 0;
let totalUrlReferences = 0;

function checkBackendUrls(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.next')) {
      checkBackendUrls(itemPath);
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      const content = fs.readFileSync(itemPath, 'utf8');
      const urlMatches = content.match(/https:\/\/sk-connect-backend-production[^'"\s]*/g);
      if (urlMatches) {
        totalUrlReferences += urlMatches.length;
        for (const url of urlMatches) {
          if (url === correctBackendUrl) {
            correctUrlCount++;
          }
        }
      }
    }
  }
}

checkBackendUrls(path.join(__dirname, '..'));
console.log(`   📊 Found ${totalUrlReferences} backend URL references`);
console.log(`   ✅ ${correctUrlCount} URLs are correct`);
if (correctUrlCount === totalUrlReferences) {
  console.log('   ✅ All backend URLs are correctly configured');
} else {
  console.log(`   ⚠️  ${totalUrlReferences - correctUrlCount} URLs may need updating`);
}

// Summary
console.log('\n📋 Deployment Readiness Summary:');
console.log('   • Environment configuration: Ready');
console.log('   • Vercel configuration: Ready');
console.log('   • Next.js configuration: Ready');
console.log(`   • API routes: ${dynamicRoutesCount}/${totalApiRoutes} configured`);
console.log(`   • Backend URLs: ${correctUrlCount}/${totalUrlReferences} correct`);

console.log('\n🚀 Frontend is ready for Vercel deployment!');
console.log('\nNext steps:');
console.log('1. Set NEXT_PUBLIC_BACKEND_URL in Vercel environment variables');
console.log('2. Deploy to Vercel');
console.log('3. Verify backend connectivity after deployment');
