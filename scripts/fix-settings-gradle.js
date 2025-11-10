#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing android/settings.gradle for RN 0.73.6...');

const settingsPath = path.join(__dirname, '../android/settings.gradle');

// Check if android folder exists
if (!fs.existsSync(path.join(__dirname, '../android'))) {
  console.log('⚠️  android folder not found yet, skipping fix');
  process.exit(0);
}

if (!fs.existsSync(settingsPath)) {
  console.log('⚠️  settings.gradle not found, skipping fix');
  process.exit(0);
}

// Read the file
let content = fs.readFileSync(settingsPath, 'utf8');

console.log('📄 Checking for incompatible plugin...');

// Remove the incompatible plugin block
const originalContent = content;
content = content.replace(
  /plugins\s*\{\s*id\s*\(\s*["']com\.facebook\.react\.settings["']\s*\)\s*\}/g,
  ''
);

// Also remove any standalone plugin lines
content = content.replace(
  /^\s*id\s*\(\s*["']com\.facebook\.react\.settings["']\s*\)\s*$/gm,
  ''
);

// Check result
if (content === originalContent) {
  console.log('✅ No plugin block found (already fixed or not needed)');
  process.exit(0);
}

if (content.includes('com.facebook.react.settings')) {
  console.error('❌ ERROR: Failed to remove plugin line completely!');
  console.error('Remaining content mentioning plugin:');
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('com.facebook.react.settings')) {
      console.error(`Line ${i + 1}: ${line}`);
    }
  });
  process.exit(1);
}

// Write back
fs.writeFileSync(settingsPath, content, 'utf8');
console.log('✅ Successfully removed incompatible plugin');
console.log('📄 First 20 lines of fixed file:');
console.log(content.split('\n').slice(0, 20).join('\n'));