// utils/importWithRetry.js
const MODULE_PATHS = {
  'subscription': () => import('~/api/subscription'),
  'user': () => import('~/api/user'),
  'folder': () => import('~/api/folder'),
  // 添加其他需要的模块
}

export async function importWithRetry(moduleKey, maxRetries = 3, delay = 500) {
  const importFunction = MODULE_PATHS[moduleKey]

  if (!importFunction) {
    throw new Error(`Module "${moduleKey}" not found in predefined paths`)
  }

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempting to import ${moduleKey} - attempt ${attempt}`)
      const module = await importFunction() // 调用预定义的导入函数
      console.log(`Successfully imported ${moduleKey}`)
      return module
    } catch (error) {
      console.error(`Import attempt ${attempt} failed for ${moduleKey}:`, error)

      if (attempt === maxRetries) {
        const response = await fetch("/packageVersion.json");
        const buildInfo = await response.json();
        const newBuildInfo = JSON.stringify(buildInfo)
        const oldBuildInfo = localStorage.getItem("buildInfo");
        throw new Error(`Failed to import ${moduleKey} after ${maxRetries} attempts: ${error.message}, newBuildInfo: ${newBuildInfo}, oldBuildInfo: ${oldBuildInfo}`)
      }

      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      const retryDelay = isIOS ? delay * attempt : delay

      console.log(`Retrying in ${retryDelay}ms...`)
      await new Promise(resolve => setTimeout(resolve, retryDelay))
    }
  }
}
