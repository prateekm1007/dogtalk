#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing android/settings.gradle for RN 0.73.6...');

const settingsPath = path.join(__dirname, '../android/settings.gradle');

if (!fs.existsSync(settingsPath)) {
  console.error('❌ ERROR: settings.gradle not found at', settingsPath);
  process.exit(1);
}

// Read the file
let content = fs.readFileSync(settingsPath, 'utf8');

console.log('📄 Original settings.gradle (first 300 chars):');
console.log(content.substring(0, 300));

// Remove the incompatible plugin block
const originalContent = content;
content = content.replace(
  /plugins\s*\{\s*id\s*\(\s*["']com\.facebook\.react\.settings["']\s*\)\s*\}/g,
  ''
);

// Verify the fix worked
if (content === originalContent) {
  console.log('⚠️  No plugin block found (might already be fixed)');
} else if (content.includes('com.facebook.react.settings')) {
  console.error('❌ ERROR: Failed to remove plugin line!');
  process.exit(1);
} else {
  // Write back
  fs.writeFileSync(settingsPath, content, 'utf8');
  console.log('✅ Successfully removed incompatible plugin');
  console.log('📄 Fixed settings.gradle (first 300 chars):');
  console.log(content.substring(0, 300));
}