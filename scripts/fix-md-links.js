#!/usr/bin/env node

/**
 * 修复 VuePress 内部 markdown 链接格式
 * 将所有 .md 链接转换为 .html 格式，避免构建后出现 404 错误
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置
const DOCS_DIR = path.join(__dirname, '../docs');
const EXCLUDE_DIRS = ['node_modules', '.vuepress/dist', '.git'];

// 统计信息
const stats = {
  filesScanned: 0,
  filesModified: 0,
  linksFixed: 0,
  details: []
};

/**
 * 递归扫描目录，获取所有 .md 文件
 */
function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // 检查是否在排除目录中
    const relativePath = path.relative(DOCS_DIR, filePath);
    const shouldExclude = EXCLUDE_DIRS.some(excludeDir =>
      relativePath.includes(excludeDir)
    );

    if (shouldExclude) {
      return;
    }

    if (stat.isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * 修复单个文件中的链接
 */
function fixLinksInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  let fixCount = 0;
  const fixes = [];

  // 正则表达式匹配 markdown 链接：[text](path.md) 或 [text](path.md#anchor)
  // 排除外部链接（http/https）
  const linkPattern = /\[([^\]]+)\]\((?!https?:\/\/)([^)]+\.md)(#[^)]+)?\)/g;

  const newContent = content.replace(linkPattern, (match, text, mdPath, anchor) => {
    // 将 .md 替换为 .html
    const htmlPath = mdPath.replace(/\.md$/, '.html');
    const newLink = `[${text}](${htmlPath}${anchor || ''})`;

    fixCount++;
    fixes.push({
      original: match,
      fixed: newLink,
      line: content.substring(0, content.indexOf(match)).split('\n').length
    });

    return newLink;
  });

  if (fixCount > 0) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    stats.filesModified++;
    stats.linksFixed += fixCount;

    const relativePath = path.relative(DOCS_DIR, filePath);
    stats.details.push({
      file: relativePath,
      count: fixCount,
      fixes: fixes
    });

    return true;
  }

  return false;
}

/**
 * 主函数
 */
function main() {
  console.log('🔍 开始扫描文档目录...\n');
  console.log(`目录: ${DOCS_DIR}`);
  console.log(`排除: ${EXCLUDE_DIRS.join(', ')}\n`);

  // 获取所有 markdown 文件
  const markdownFiles = getAllMarkdownFiles(DOCS_DIR);
  stats.filesScanned = markdownFiles.length;

  console.log(`📄 找到 ${markdownFiles.length} 个 markdown 文件\n`);

  // 处理每个文件
  markdownFiles.forEach(filePath => {
    fixLinksInFile(filePath);
  });

  // 输出结果
  console.log('=' .repeat(60));
  console.log('✅ 修复完成！\n');
  console.log(`📊 统计信息:`);
  console.log(`   - 扫描文件数: ${stats.filesScanned}`);
  console.log(`   - 修改文件数: ${stats.filesModified}`);
  console.log(`   - 修复链接数: ${stats.linksFixed}\n`);

  if (stats.details.length > 0) {
    console.log('📝 详细修改列表:\n');
    stats.details.forEach(detail => {
      console.log(`   ${detail.file} (${detail.count} 个链接)`);
      detail.fixes.forEach(fix => {
        console.log(`      第 ${fix.line} 行:`);
        console.log(`        - 修改前: ${fix.original}`);
        console.log(`        - 修改后: ${fix.fixed}`);
      });
      console.log('');
    });
  } else {
    console.log('ℹ️  没有找到需要修复的链接\n');
  }

  console.log('=' .repeat(60));
}

// 执行
try {
  main();
} catch (error) {
  console.error('❌ 执行出错:', error.message);
  process.exit(1);
}
