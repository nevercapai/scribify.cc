import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

function getGitInfo() {
  try {
    const commit = execSync('git rev-parse HEAD').toString().trim();
    const commitDate = execSync('git log -1 --format=%cd').toString().trim();
    return { commit, commitDate };
  } catch (error) {
    console.error('获取Git信息失败:', error);
    return { commit: 'unknown', commitDate: 'unknown' };
  }
}

function generateBuildInfo() {
  const buildTime = new Date().toISOString();
  const { commit, commitDate } = getGitInfo();
  
  const buildInfo = {
    buildTime,
    gitCommit: commit,
    gitCommitDatePre: commitDate.substring(0, 8),
    gitCommitDate: commitDate,
    version: process.env.npm_package_version || 'unknown'
  };

  // 确保目录存在
  const dir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // 写入文件
  const filePath = path.join(dir, 'packageVersion.json');
  fs.writeFileSync(filePath, JSON.stringify(buildInfo, null, 2));
  console.log('构建信息已生成:', filePath);
}

generateBuildInfo(); 