/**
 * 检查多语言配置文件，以en-US为基准找出其他语言缺失的配置项
 * @param {Object} enUS - 英文(en-US)配置对象
 * @param {Object} languageModules - 包含所有语言模块的对象，格式为: [{ lang: "pl-PL", langName: "Polski", file: pl_PL }]
 * @returns {Object} - 包含每种语言缺失配置的结果对象
 */
function checkI18nConfigurations(enUS, languageModules) {
  // 存储结果的对象
  const results = {
    summary: {},
    details: {},
    sameValues: {} // 新增：存储与英文相同value的项
  };

  // 递归获取对象中所有键路径
  function getAllKeyPaths(obj, currentPath = "") {
    let keys = [];
    for (const key in obj) {
      const newPath = currentPath ? `${currentPath}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        keys = [...keys, ...getAllKeyPaths(obj[key], newPath)];
      } else {
        keys.push(newPath);
      }
    }
    return keys;
  }

  // 根据键路径获取对象中的值
  function getValueByPath(obj, path) {
    return path.split(".").reduce((prev, curr) => {
      return prev && prev[curr] !== undefined ? prev[curr] : undefined;
    }, obj);
  }

  // 获取en-US的所有键
  const enUSKeys = getAllKeyPaths(enUS);
  results.summary["en-US"] = {
    total: enUSKeys.length,
    missing: 0,
    extra: 0
  };

  const languages = languageModules.map((e) => e.code);
  // 检查每种语言
  for (const lang of languages) {
    if (lang === "en-US") continue; // 跳过基准语言

    const langModule = languageModules.find((module) => module.code === lang);
    if (!langModule) continue; // 如果找不到该语言模块，跳过

    const langObject = langModule.file;
    results.details[lang] = {
      missing: [],
      extra: []
    };
    results.sameValues[lang] = []; // 初始化相同value的数组

    // 如果语言模块不存在
    if (!langObject) {
      results.summary[lang] = {
        total: 0,
        missing: enUSKeys.length,
        extra: 0
      };
      results.details[lang].missing = enUSKeys.map((key) => ({
        key,
        value: getValueByPath(enUS, key)
      }));
      continue;
    }

    // 检查缺失的键
    const missingKeys = enUSKeys.filter((key) => {
      return getValueByPath(langObject, key) === undefined;
    });

    // 检查额外的键
    const langKeys = getAllKeyPaths(langObject);
    const extraKeys = langKeys.filter((key) => !enUSKeys.includes(key));

    // 检查相同value的键
    const sameValueKeys = enUSKeys.filter((key) => {
      // 确保键存在于当前语言中
      const langValue = getValueByPath(langObject, key);
      if (langValue === undefined) return false;

      // 比较值是否相同
      const enValue = getValueByPath(enUS, key);
      return (
        langValue === enValue &&
        typeof langValue === "string" &&
        langValue.trim() !== ""
      );
    });

    // 存储结果
    results.summary[lang] = {
      total: langKeys.length,
      missing: missingKeys.length,
      extra: extraKeys.length,
      sameValues: sameValueKeys.length
    };

    results.details[lang].missing = missingKeys.map((key) => ({
      key,
      value: getValueByPath(enUS, key)
    }));

    results.details[lang].extra = extraKeys.map((key) => ({
      key,
      value: getValueByPath(langObject, key)
    }));

    results.sameValues[lang] = sameValueKeys.map((key) => ({
      key,
      value: getValueByPath(enUS, key)
    }));
  }

  return results;
}

/**
 * 生成简洁的缺失配置项报告并显示弹窗，同时将相同value的项打印到控制台
 * @param {Object} results - checkI18nConfigurations函数返回的结果对象
 * @returns {String} - 格式化的缺失配置报告
 */
function generateMissingKeysReport(results) {
  let report = "";

  // 生成缺失键的报告
  for (const lang in results.details) {
    if (results.details[lang].missing.length > 0) {
      const missingKeys = results.details[lang].missing
        .map((item) => item.key)
        .join(", ");
      report += `${lang}语言缺少${results.details[lang].missing.length}个配置项: ${missingKeys}\n\n`;
    }
  }

  // 如果有缺失的key，显示弹窗
  if (report) {
    // 在浏览器环境中
    if (typeof window !== "undefined") {
      alert(report);
    }
  }

  // 打印相同value的项到控制台
  console.log("\n===== 与英文相同value的配置项 =====\n");
  for (const lang in results.sameValues) {
    if (results.sameValues[lang].length > 0) {
      console.groupCollapsed(
        `${lang}语言有${results.sameValues[lang].length}个与英文相同的配置项:`
      );
      results.sameValues[lang].forEach((item) => {
        console.log(`  ${item.key} = "${item.value}"`);
      });
      console.groupEnd();
    }
  }

  return report || "所有语言配置完整，没有缺失项";
}

/**
 * 包装函数，只在客户端和开发环境中执行国际化检查
 * @param {Object} enUS - 英文配置对象
 * @param {Array} localeLangs - 语言模块数组
 */
let isRun = false;
function runI18nCheck(enUS, localeLangs) {
  // 检查是否为客户端环境
  const isClient = process.client;

  // 检查是否为开发环境
  const isDevelopment = process.env.NODE_ENV === "development";

  // 仅在客户端和开发环境中执行检查
  if (isClient && isDevelopment && !isRun) {
    isRun = true;
    console.log("Running i18n check in development environment...");
    const results = checkI18nConfigurations(enUS, localeLangs);
    generateMissingKeysReport(results);
  }
}

// 导出函数
export { checkI18nConfigurations, generateMissingKeysReport, runI18nCheck };
