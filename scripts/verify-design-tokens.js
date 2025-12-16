import fs from 'fs';
import path from 'path';

const docModePath = path.resolve('docs/.vuepress/styles/doc-mode.scss');
const content = fs.readFileSync(docModePath, 'utf-8');

const requiredVars = [
  '--linear-bg-body: #0B0D11',
  '--linear-bg-sidebar: #0F1115',
  '--linear-sidebar-width: 260px',
  '--linear-header-height: 56px',
  '--linear-toc-width: 240px',
  '--linear-content-width: 768px'
];

console.log('Verifying Design Tokens in doc-mode.scss...');
let hasErrors = false;

requiredVars.forEach(token => {
  if (content.includes(token)) {
    console.log(`✅ Found token: ${token}`);
  } else {
    console.error(`❌ Missing token: ${token}`);
    hasErrors = true;
  }
});

if (hasErrors) {
  process.exit(1);
} else {
  console.log('All design tokens verified.');
}
