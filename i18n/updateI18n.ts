#!/usr/bin/env ts-node

import {
  Project,
  SyntaxKind,
  ObjectLiteralExpression,
  PropertyAssignment,
  VariableDeclaration
} from "ts-morph";
import path from "path";
import fs from "fs";
import axios from "axios"; // 需要安装: npm install axios

// 语言配置
const languages = [
  "en-US",
  "es-ES",
  "it-IT",
  "fr-FR",
  "de-DE",
  "zh-CN",
  "zh-TW",
  "ja-JP",
  "ko-KR",
  "nl-NL",
  "pl-PL",
  "da-DK",
  "hu-HU",
  "no-NO",
  "pt-PT",
  "fi-FI",
  "sv-SE",
  "ru-RU",
  "tr-TR",
  "el-GR",
  "uk-UA",
  "he-IL",
  "ar-SA"
];

// 语言代码映射表
const languageMapping: { [key: string]: string } = {
  "en-US": "en",
  "es-ES": "es",
  "it-IT": "it",
  "fr-FR": "fr",
  "de-DE": "de",
  "zh-CN": "zh-cn",
  "zh-TW": "zh-tw",
  "ja-JP": "ja",
  "ko-KR": "ko",
  "nl-NL": "nl",
  "pl-PL": "pl",
  "da-DK": "da",
  "hu-HU": "hu",
  "no-NO": "no",
  "pt-PT": "pt",
  "fi-FI": "fi",
  "sv-SE": "sv",
  "ru-RU": "ru",
  "tr-TR": "tr",
  "el-GR": "el",
  "uk-UA": "uk",
  "he-IL": "he",
  "ar-SA": "ar"
};

const langPath = "./lang";

/**
 * ai翻译
 * */
let AI_CONFIG = {
  url: "https://api.siliconflow.cn/v1/chat/completions",
  apiKey: "sk-sswlyzxvwcbnxixpkznsbawlzbkltdbbezrdizyhiljbxziw", // 替换为你的 API Key
  model: "deepseek-ai/DeepSeek-v3" // deepseek-ai/DeepSeek-v3
};
// AI_CONFIG = {
//   url: "https://ark.cn-beijing.volces.com/api/v3/chat/completions",
//   apiKey: "cca5560e-fa20-4b6c-aac5-88ac26d59a8b", // 替换为你的 API Key
//   model: "doubao-seed-1-6-250615" // doubao
// };

// 获取目标语言的完整名称
function getLanguageName(languageCode: string): string {
  const languageNames: { [key: string]: string } = {
    "zh-cn": "简体中文",
    "zh-tw": "繁体中文",
    en: "英语",
    es: "西班牙语",
    it: "意大利语",
    fr: "法语",
    de: "德语",
    ja: "日语",
    ko: "韩语",
    nl: "荷兰语",
    pl: "波兰语",
    da: "丹麦语",
    hu: "匈牙利语",
    no: "挪威语",
    pt: "葡萄牙语",
    fi: "芬兰语",
    sv: "瑞典语",
    ru: "俄语",
    tr: "土耳其语",
    el: "希腊语",
    uk: "乌克兰语",
    he: "希伯来语",
    ar: "阿拉伯语"
  };

  return languageNames[languageCode] || languageCode;
}

async function translateBatchWithAI(
  textArray: string[],
  targetLanguage = "zh-CN"
): Promise<string[]> {
  const googleLangCode = getGoogleTranslateCode(targetLanguage);
  const targetLanguageName = getLanguageName(googleLangCode);

  // 构建翻译 prompt
  const prompt = `你是一个专业的UI界面翻译专家。请将以下英文文本翻译成${targetLanguageName}。
重要要求：
1. 这些是用户界面文本，请保持简洁和用户友好
2. 保持原文的格式，包括占位符如 {times}, {left}, {name}, {num} 等
3. 保持适当的大小写规范（首字母大写）
4. 不要翻译HTML实体，如 &quot; 保持原样
5. 按钮和操作文本要简洁有力
6. 保持专业术语的准确性
7. 不能遗漏
英文原文：
${textArray.map((text, index) => `${index + 1}. ${text}`).join("\n")}
请翻译成${targetLanguageName}，每行对应一个翻译结果：
总共有${textArray.length}条，你得给我这么多条，绝对不能漏翻
需要你快速输出
`;
  const data = {
    model: AI_CONFIG.model,
    messages: [
      {
        role: "system",
        content: prompt
      },
      {
        role: "user",
        content: prompt
      }
    ],
    stream: false, // 不使用流式响应
  };
  const headers = {
    Authorization: `Bearer ${AI_CONFIG.apiKey}`,
    "Content-Type": "application/json"
  };
  try {
    console.log(
      `🤖 使用 AI 翻译 ${textArray.length} 个文本到 ${targetLanguageName}...`
    );
    console.log(textArray);

    const response = await fetch(AI_CONFIG.url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(`AI API 请求失败，状态码: ${response.status}`);
    }
    const result = await response.json();

    if (!result.choices || !result.choices[0] || !result.choices[0].message) {
      throw new Error("AI API 返回格式错误");
    }
    const translatedContent = result.choices[0].message.content.trim();

    console.log("AI翻译结果", translatedContent);
    // 解析 AI 返回的翻译结果
    const translations = parseAITranslationResponse(
      translatedContent,
      textArray.length
    );

    if (translations.length !== textArray.length) {
      console.warn(
        `⚠️  AI 翻译结果数量不匹配: 期望 ${textArray.length} 个，实际 ${translations.length} 个`
      );
      // 重试
      return await translateBatchWithAI(textArray, targetLanguage);
      // 如果数量不匹配，补齐或截断
      // while (translations.length < textArray.length) {
      //   translations.push(textArray[translations.length]); // 用原文填充缺失的翻译
      // }
      // translations.splice(textArray.length); // 移除多余的翻译
    }

    console.log(translations);
    console.log(`✅ AI 翻译完成，共 ${translations.length} 个结果`);
    return translations;
  } catch (error: any) {
    console.error("❌ AI 翻译错误:", error.message);
    throw error;
  }
}

// 解析 AI 返回的翻译结果
function parseAITranslationResponse(
  content: string,
  expectedCount: number
): string[] {
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  let result: string[] = [];

  // 方法1: 匹配数字开头的行（改进正则，允许序号后为空）
  const numberedLines = lines.filter((line) => /^\d+\./.test(line)); // 只要求"数字."

  if (numberedLines.length >= expectedCount) {
    // 按序号提取，保持位置关系
    for (let i = 1; i <= expectedCount; i++) {
      const found = numberedLines.find((line) =>
        line.startsWith(`${i}.`)
      );

      if (found) {
        const content = found.replace(/^\d+\.\s*/, "").trim();
        // 如果内容为空，用233填补
        result.push(content.length > 0 ? content : "233");
      } else {
        result.push("233"); // 序号缺失，用233填补
      }
    }
    return result;
  }

  // 方法2和3保持不变...
  const possibleTranslations = lines
    .filter((line) => {
      return (
        !line.includes("翻译结果") &&
        !line.includes("原文") &&
        !line.includes("请翻译") &&
        !line.match(/^[一二三四五六七八九十\d]+[、．.]\s*$/)
      );
    })
    .map((line) => line.replace(/^\d+[\.、]\s*/, "").trim());

  if (possibleTranslations.length >= expectedCount) {
    for (let i = 0; i < expectedCount; i++) {
      const translation = possibleTranslations[i];
      if (translation && translation.length > 10) {
        result.push(translation);
      } else {
        result.push("233");
      }
    }
    return result;
  }

  // 方法3: fallback
  const fallbackLines = lines.filter((line) => line.length > 5);

  for (let i = 0; i < expectedCount; i++) {
    if (i < fallbackLines.length && fallbackLines[i]) {
      result.push(fallbackLines[i]);
    } else {
      result.push("233");
    }
  }

  return result;
}

// 修改原来的 translateTexts 函数，增加 AI 翻译选项
async function translateTexts(
  texts: string[],
  targetLanguage: string,
  useAI: boolean = false
): Promise<string[]> {
  console.log(
    `📝 正在翻译 ${texts.length} 个文本到 ${targetLanguage} (${useAI ? "AI" : "Google"})...`
  );
  if (texts.length === 0) {
    return [];
  }
  const BATCH_SIZE = useAI ? 50 : 100; // AI 翻译使用较小的批次
  const results: string[] = [];
  try {
    // 分批处理
    for (let i = 0; i < texts.length; i += BATCH_SIZE) {
      const batch = texts.slice(i, i + BATCH_SIZE);
      console.log(
        `📦 处理批次 ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(texts.length / BATCH_SIZE)} (${batch.length} 个文本)`
      );
      // 添加延迟避免API限制
      if (i > 0) {
        const delay = useAI ? 2000 : 2000; // AI 翻译使用更长的延迟
        console.log(`⏱️  等待 ${delay / 1000} 秒避免API限制...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
      const batchResults = useAI
        ? await translateBatchWithAI(batch, targetLanguage)
        : await translateBatch(batch, targetLanguage);

      const decodedResults = batchResults.map((text: any) =>
        decodeApiResponseString(text)
      );

      results.push(...decodedResults);
      console.log(
        `✅ 批次完成，已翻译 ${results.length}/${texts.length} 个文本`
      );
    }
    console.log(`🎉 翻译完成！总共处理了 ${results.length} 个文本`);

    return results;
  } catch (error: any) {
    console.error(`❌ 翻译失败:`, error.message);
    console.error(`重试:`);
    return translateTexts(texts, targetLanguage, useAI);
    // console.log(`⚠️  返回原文本作为备用...`);
    // return texts; // 如果翻译失败，返回原文数组
  }
}
/*
 * 谷歌翻译
 *
 * */
const proxyConfig = {
  protocol: "http",
  host: "127.0.0.1",
  port: 7890
};

// 获取谷歌翻译语言代码
function getGoogleTranslateCode(projectLangCode: string): string {
  return languageMapping[projectLangCode] || projectLangCode;
}

async function translateBatch(textArray: string[], targetLanguage = "zh-CN") {
  const googleLangCode = getGoogleTranslateCode(targetLanguage);

  const data = [[textArray, "en", googleLangCode], "wt_lib"];

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://translate-pa.googleapis.com/v1/translateHtml",
    headers: {
      "x-goog-api-key": "AIzaSyATBXajvzQLTDHEQbcpq0Ihe0vWDHmO520",
      "content-type": "application/json+protobuf"
    },
    data: data,
    // proxy: proxyConfig
  };

  console.log(111);

  try {
    const response = await axios.request(config);
    console.log(response.data[0])
    return response.data[0]; // 返回翻译结果数组
  } catch (error: any) {
    console.error("❌ 批量翻译错误:", error.message);
    await new Promise(resolve => setTimeout(resolve, 8000));
    return translateBatch(textArray, targetLanguage);
  }
}

// 将嵌套对象转换为平铺对象
function flattenObject(
  obj: any,
  prefix: string = "",
  result: { [key: string]: string } = {}
): { [key: string]: string } {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];

      if (Array.isArray(value)) {
        // 🔥 修复：空数组的特殊处理
        if (value.length === 0) {
          result[newKey] = "[]"; // 为空数组创建一个特殊值
        } else {
          // 🆕 处理数组：为每个元素创建索引键
          value.forEach((item, index) => {
            const arrayKey = `${newKey}[${index}]`;

            if (typeof item === "string") {
              result[arrayKey] = item;
            } else if (typeof item === "object" && item !== null) {
              flattenObject(item, arrayKey, result);
            } else {
              result[arrayKey] = String(item);
            }
          });
        }
      } else if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        // 普通对象递归处理
        flattenObject(value, newKey, result);
      } else {
        // 简单值直接添加
        result[newKey] = value;
      }
    }
  }
  return result;
}


// 将平铺对象转换回嵌套对象
// 🔍 简化版调试 - 只打印关键步骤
function unflattenObject(flatObj: { [key: string]: string }): any {
  const result: any = {};

  for (const key in flatObj) {
    const value = flatObj[key];

    // 🔥 修复：处理空数组的特殊情况
    if (value === "[]") {
      const keys = parseKeyPath(key);
      let current = result;

      // 创建路径直到最后一个键
      for (let i = 0; i < keys.length - 1; i++) {
        const segment = keys[i];
        if (!current[segment.name]) {
          current[segment.name] = {};
        }
        current = current[segment.name];
      }

      // 设置空数组
      const finalSegment = keys[keys.length - 1];
      current[finalSegment.name] = [];
      continue;
    }

    // 原有的处理逻辑...
    const keys = parseKeyPath(key);
    let current = result;

    for (let i = 0; i < keys.length; i++) {
      const segment = keys[i];
      const isLastSegment = i === keys.length - 1;

      if (segment.isArray) {
        const arrayName = segment.name;
        const arrayIndex = segment.index!;

        if (!Array.isArray(current[arrayName])) {
          current[arrayName] = [];
        }

        while (current[arrayName].length <= arrayIndex) {
          current[arrayName].push(null);
        }

        if (isLastSegment) {
          current[arrayName][arrayIndex] = value;
        } else {
          if (current[arrayName][arrayIndex] === null) {
            const nextSegment = keys[i + 1];
            current[arrayName][arrayIndex] = nextSegment.isArray ? [] : {};
          }
          current = current[arrayName][arrayIndex];
        }
      } else {
        const propName = segment.name;

        if (isLastSegment) {
          current[propName] = value;
        } else {
          if (!current[propName]) {
            current[propName] = {};
          }
          current = current[propName];
        }
      }
    }
  }

  return result;
}

// 创建默认的语言文件
function createDefaultLanguageFile(filePath: string): void {
  const defaultContent = `let message = {
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
`;

  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, defaultContent, "utf-8");
  console.log(`📄 创建默认语言文件: ${filePath}`);
}

// 从TypeScript文件解析对象
function parseObjectFromFile(filePath: string): any {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  文件不存在，创建默认文件: ${filePath}`);
    createDefaultLanguageFile(filePath);
    return {}; // 返回空对象，因为刚创建的文件message为空
  }

  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);

  const variableStatements = sourceFile.getVariableStatements();

  for (const statement of variableStatements) {
    const declarations = statement.getDeclarations();
    for (const declaration of declarations) {
      const name = declaration.getName();
      if (name === "message") {
        const initializer = declaration.getInitializer();
        if (
          initializer &&
          initializer.getKind() === SyntaxKind.ObjectLiteralExpression
        ) {
          return parseObjectLiteral(initializer as ObjectLiteralExpression);
        }
      }
    }
  }

  console.log(`⚠️  未找到 message 变量声明: ${filePath}`);
  return {};
}

// 解析对象字面量
// ✅ 请用这个【新版本】替换你现有的 parseObjectLiteral 函数

// 解析对象字面量
function parseObjectLiteral(obj: ObjectLiteralExpression): any {
  const result: any = {};

  obj.getProperties().forEach((prop) => {
    if (prop.getKind() === SyntaxKind.PropertyAssignment) {
      const propAssignment = prop as PropertyAssignment;

      const nameNode = propAssignment.getNameNode();
      let key = nameNode.getText();
      if (nameNode.getKind() === SyntaxKind.StringLiteral) {
        key = key.substring(1, key.length - 1);
      }

      const valueNode = propAssignment.getInitializer();

      if (valueNode) {
        if (valueNode.getKind() === SyntaxKind.ObjectLiteralExpression) {
          result[key] = parseObjectLiteral(valueNode as ObjectLiteralExpression);
        } else if (valueNode.getKind() === SyntaxKind.ArrayLiteralExpression) {
          result[key] = parseArrayLiteral(valueNode as any);
        } else if (valueNode.getKind() === SyntaxKind.StringLiteral) {
          // 字符串字面量
          let value = valueNode.getText().slice(1, -1);

          // ================== ✨ 净化逻辑 ✨ ==================
          // 在这里修复从文件中读到的、历史遗留的错误转义。
          // 这可以防止 "滚雪球" 效应，确保内存中的数据始终是干净的。
          if (value.includes('\\"')) {
            console.log(`🧼 净化历史数据: "${key}"`);
            value = value.replace(/\\"/g, '"');
          }
          // =====================================================

          result[key] = value; // 使用净化后的值
        } else if (
          valueNode.getKind() === SyntaxKind.TemplateExpression ||
          valueNode.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral
        ) {
          // 模板字符串 (模板字符串通常不会有这种转义问题，但以防万一)
          let value = valueNode.getText().slice(1, -1);
          if (value.includes('\\"')) {
            console.log(`🧼 净化历史数据 (模板字符串): "${key}"`);
            value = value.replace(/\\"/g, '"');
          }
          result[key] = value;
        }
      }
    }
  });

  return result;
}

// 🆕 新增：解析数组字面量
function parseArrayLiteral(arr: any): any[] {
  const result: any[] = [];

  // 获取数组元素
  arr.getElements().forEach((element: any) => {
    if (element.getKind() === SyntaxKind.StringLiteral) {
      // 字符串元素
      result.push(element.getText().slice(1, -1));
    } else if (element.getKind() === SyntaxKind.ObjectLiteralExpression) {
      // 对象元素
      result.push(parseObjectLiteral(element));
    } else if (element.getKind() === SyntaxKind.ArrayLiteralExpression) {
      // 嵌套数组
      result.push(parseArrayLiteral(element));
    } else if (
      element.getKind() === SyntaxKind.TemplateExpression ||
      element.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral
    ) {
      // 模板字符串
      const text = element.getText();
      result.push(text.slice(1, -1));
    } else if (element.getKind() === SyntaxKind.NumericLiteral) {
      // 数字
      result.push(Number(element.getText()));
    } else if (element.getKind() === SyntaxKind.TrueKeyword) {
      // 布尔值 true
      result.push(true);
    } else if (element.getKind() === SyntaxKind.FalseKeyword) {
      // 布尔值 false
      result.push(false);
    } else if (element.getKind() === SyntaxKind.NullKeyword) {
      // null
      result.push(null);
    } else {
      // 其他类型，保留原始文本
      result.push(element.getText());
    }
  });

  return result;
}

// 🆕 新增：格式化数组用于输出
function formatArray(arr: any[], indent: number = 2): string {
  if (arr.length === 0) {
    return "[]";
  }

  // 如果数组比较简单（只包含字符串、数字、布尔值），使用单行格式
  const isSimpleArray = arr.every(item =>
    typeof item === 'string' ||
    typeof item === 'number' ||
    typeof item === 'boolean' ||
    item === null
  );

  if (isSimpleArray && arr.length <= 3) {
    return "[" + arr.map(formatSimpleArrayValue).join(", ") + "]";
  }

  // 复杂数组使用多行格式
  const spaces = " ".repeat(indent);
  let result = "[\n";

  arr.forEach((item, index) => {
    const isLast = index === arr.length - 1;

    if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
      // 对象元素
      result += `${spaces}${formatObjectCompletely(item, indent + 2)}${isLast ? "" : ","}\n`;
    } else if (Array.isArray(item)) {
      // 数组元素
      result += `${spaces}${formatArray(item, indent + 2)}${isLast ? "" : ","}\n`;
    } else {
      // 简单值
      result += `${spaces}${formatSimpleArrayValue(item)}${isLast ? "" : ","}\n`;
    }
  });

  result += " ".repeat(indent - 2) + "]";
  return result;
}

// 🆕 格式化数组中的简单值
function formatSimpleArrayValue(value: any): string {
  if (typeof value === 'string') {
    return formatSimpleValue(value);
  } else if (typeof value === 'number') {
    return value.toString();
  } else if (typeof value === 'boolean') {
    return value.toString();
  } else if (value === null) {
    return 'null';
  } else {
    return String(value);
  }
}



// 🆕 新增：格式化简单值
// 🆕 更好的解决方案：使用 JSON.stringify 自动处理转义
// 🆕 强制使用单引号的版本（更清晰）
// ✅ 替换 formatSimpleValue 函数
function formatSimpleValue(value: any): string {
  // ================== 监控点 D ==================
  if (typeof value === 'string' && value.includes('"')) {
    console.log(`🕵️ [LOG D - formatSimpleValue] 准备格式化 (备用路径):`);
    console.log(`  - Input:           '${value}'`);
  }
  // ===============================================

  // 确保调用我们最健壮的函数，并传递日志
  const result = formatValue(value, '"');

  if (typeof value === 'string' && value.includes('"')) {
    console.log(`  - Output:          ${result}`);
  }
  return result;
}


// 🆕 HTML实体解码函数
function decodeApiResponseString(text: string): string {
  if (!text) return ""; // 处理空或null输入

  // 顺序很重要：先处理反斜杠转义，再处理HTML实体
  const unescapedText = text
    .replace(/\\"/g, '"')  // \" -> "
    .replace(/\\'/g, "'"); // \' -> '
  // 注意：我们暂时不处理 \\ -> \，以避免过度解码用户本意输入的反斜杠

  // 然后再进行HTML实体解码
  return unescapedText
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}
// 🆕 新增：从对象字面量中删除指定的keys
function removeKeysFromObjectLiteral(
  objLiteral: ObjectLiteralExpression,
  keysToRemove: string[]
): void {
  const propertiesToRemove: PropertyAssignment[] = [];

  // 收集需要删除的属性
  objLiteral.getProperties().forEach((prop) => {
    if (prop.getKind() === SyntaxKind.PropertyAssignment) {
      const propAssignment = prop as PropertyAssignment;
      const key = propAssignment.getName();

      if (keysToRemove.includes(key)) {
        propertiesToRemove.push(propAssignment);
      }
    }
  });

  // 删除收集到的属性
  propertiesToRemove.forEach((prop) => {
    console.log(`🗑️  删除属性: ${prop.getName()}`);
    prop.remove();
  });
}

interface KeySegment {
  name: string;
  isArray: boolean;
  index?: number;
}

function parseKeyPath(key: string): KeySegment[] {
  const segments: KeySegment[] = [];
  const parts = key.split('.');

  for (const part of parts) {
    const arrayMatch = part.match(/^(.+)\[(\d+)\]$/);
    if (arrayMatch) {
      // 这是数组索引格式，如 "items[0]"
      const segment = {
        name: arrayMatch[1],
        isArray: true,
        index: parseInt(arrayMatch[2])
      };
      segments.push(segment);
      console.log(`   数组段: ${segment.name}[${segment.index}]`);
    } else {
      // 这是普通属性
      const segment = {
        name: part,
        isArray: false
      };
      segments.push(segment);
    }
  }

  return segments;
}
// 🆕 新增：智能删除嵌套对象中的keys
function removeKeysFromNestedObject(obj: any, keysToRemove: string[]): any {
  const result = JSON.parse(JSON.stringify(obj)); // 深拷贝

  keysToRemove.forEach((key) => {
    const segments = parseKeyPath(key);
    let current = result;
    const path: any[] = [current];

    // 找到目标路径
    for (let i = 0; i < segments.length - 1; i++) {
      const segment = segments[i];

      if (segment.isArray) {
        if (current[segment.name] && Array.isArray(current[segment.name]) &&
          current[segment.name][segment.index!] !== undefined) {
          current = current[segment.name][segment.index!];
          path.push(current);
        } else {
          return; // 路径不存在
        }
      } else {
        if (current[segment.name] && typeof current[segment.name] === "object") {
          current = current[segment.name];
          path.push(current);
        } else {
          return; // 路径不存在
        }
      }
    }

    // 删除最后的key
    const finalSegment = segments[segments.length - 1];
    if (finalSegment.isArray) {
      if (current[finalSegment.name] && Array.isArray(current[finalSegment.name])) {
        console.log(`🗑️  删除数组元素: ${key}`);
        current[finalSegment.name].splice(finalSegment.index!, 1);
      }
    } else {
      if (finalSegment.name in current) {
        console.log(`🗑️  删除属性: ${key}`);
        delete current[finalSegment.name];
      }
    }
  });

  return result;
}

// =================================================================
// ✨ 新增功能：辅助函数 ✨
// =================================================================

/**
 * 根据点状路径字符串从对象中获取嵌套值，支持数组索引。
 * @param obj - 要查询的对象
 * @param path - 点状路径，例如 'a.b.c' 或 'a.b[0].c' 或 'a.b[0][1].c'
 * @returns 找到的值，如果路径不存在则返回 undefined
 */
function getValueByDotNotation(obj: any, path: string): any {
  // 将路径标准化，处理数组索引
  const normalizedPath = path
    .replace(/\[(\d+)\]/g, '.$1') // 将 [0] 转换为 .0
    .replace(/^\./, ''); // 移除开头的点

  return normalizedPath.split('.').reduce((current, key) => {
    if (current === null || current === undefined) {
      return undefined;
    }

    // 检查是否为数组索引
    const arrayIndex = parseInt(key, 10);
    if (!isNaN(arrayIndex) && Array.isArray(current)) {
      return current[arrayIndex];
    }

    // 普通对象属性访问
    return current[key];
  }, obj);
}

/**
 * 递归地获取一个对象下所有“叶子节点”的完整点状路径。
 * @param obj - 要展开的对象
 * @param prefix - 当前路径前缀（用于递归）
 * @returns 一个包含所有叶子节点完整路径的字符串数组
 */
function getLeafKeys(obj: any, prefix: string = ''): string[] {
  const keys: string[] = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newPrefix = prefix ? `${prefix}.${key}` : key;
      // 如果值是对象且不是数组或null，则继续递归
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        keys.push(...getLeafKeys(obj[key], newPrefix));
      } else {
        // 否则，这是一个叶子节点，添加其完整路径
        keys.push(newPrefix);
      }
    }
  }
  return keys;
}


// ❗️❗️❗️ 请将以下三个函数作为一个整体，替换掉你脚本中对应的旧函数 ❗️❗️❗️

/**
 * ✨ 全新升级的辅助函数
 * 将JS值转为代码字符串，并智能处理引号风格。
 * @param value - 要格式化的值
 * @param quotePreference - 优先使用的引号类型, "'" 或 '"'
 * @returns 代表该值的代码字符串
 */
// ✅ 替换 formatValue 函数
function formatValue(value: any, quotePreference: "'" | '"' = "'"): string {
  // 对于非字符串类型，JSON.stringify 总是安全可靠的
  if (typeof value !== 'string') {
    return JSON.stringify(value, null, 2);
  }

  // ================== 监控点 C ==================
  if (value.includes('"')) {
    console.log(`🕵️ [LOG C - formatValue] 准备格式化 (主路径):`);
    console.log(`  - Input:           '${value}'`);
  }
  // ===============================================

  if (quotePreference === '"') {
    const result = JSON.stringify(value);
    if (value.includes('"')) {
      console.log(`  - Output (pref "):  ${result}`);
    }
    return result;
  }

  const content = value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'");

  const result = `'${content}'`;
  if (value.includes('"')) {
    console.log(`  - Output (pref '):  ${result}`);
  }
  return result;
}


/**
 * ✨ 升级版的数组更新函数
 * (替换旧的同名函数)
 */
function updateArrayLiteral(
  arrayNode: any,
  newArray: any[]
): void {
  const astElements = arrayNode.getElements();
  const maxLength = Math.max(astElements.length, newArray.length);

  for (let i = 0; i < maxLength; i++) {
    const astElement = astElements[i];
    const newElementValue = newArray[i];

    if (i < newArray.length && i < astElements.length) {
      // --- 更新现有元素 ---
      let quotePreference: "'" | '"' = "'"; // 默认单引号
      if (astElement.getKind() === SyntaxKind.StringLiteral) {
        if (astElement.getText().startsWith('"')) {
          quotePreference = '"';
        }
      }

      const isNewValueObject = typeof newElementValue === "object" && newElementValue !== null && !Array.isArray(newElementValue);
      const isNewValueArray = Array.isArray(newElementValue);

      if (isNewValueObject && astElement.getKind() === SyntaxKind.ObjectLiteralExpression) {
        updateObjectLiteralWithCommentsAndRemoval(astElement as ObjectLiteralExpression, newElementValue);
      } else if (isNewValueArray && astElement.getKind() === SyntaxKind.ArrayLiteralExpression) {
        updateArrayLiteral(astElement as ArrayLiteralExpression, newElementValue);
      } else {
        const formattedValue = formatValue(newElementValue, quotePreference);
        if (astElement.getText() !== formattedValue) {
          astElement.replaceWithText(formattedValue);
        }
      }
    } else if (i < newArray.length) {
      // --- 新增元素 (默认使用单引号) ---
      arrayNode.addElement(formatValue(newElementValue, "'"));
    }
  }
  if (newArray.length < astElements.length) {
    arrayNode.removeElements([newArray.length, astElements.length - 1]);
  }
}

/**
 * ✨ 升级版的对象更新函数
 * (替换旧的同名函数)
 */
function updateObjectLiteralWithCommentsAndRemoval(
  objLiteral: ObjectLiteralExpression,
  newObj: any,
  keysToRemove: string[] = []
): void {
  const existingProps = new Map<string, PropertyAssignment>();

  objLiteral.getProperties().forEach((prop) => {
    if (prop.getKind() === SyntaxKind.PropertyAssignment) {
      const propAssignment = prop as PropertyAssignment;
      const nameNode = propAssignment.getNameNode();
      let key = nameNode.getText();
      if (nameNode.getKind() === SyntaxKind.StringLiteral) {
        key = key.substring(1, key.length - 1);
      }
      existingProps.set(key, propAssignment);
    }
  });

  for (const [key, newValue] of Object.entries(newObj)) {
    const existingProp = existingProps.get(key);

    if (existingProp) {
      // --- 属性已存在，智能更新 ---
      const initializer = existingProp.getInitializer();
      let quotePreference: "'" | '"' = "'"; // 默认单引号
      if (initializer && initializer.getKind() === SyntaxKind.StringLiteral) {
        // 检测原始引号风格
        if (initializer.getText().startsWith('"')) {
          quotePreference = '"';
        }
      }

      if (!initializer) {
        existingProp.setInitializer(formatValue(newValue, quotePreference));
        continue;
      }

      const isNewValueObject = typeof newValue === "object" && newValue !== null && !Array.isArray(newValue);
      const isNewValueArray = Array.isArray(newValue);

      if (isNewValueObject && initializer.getKind() === SyntaxKind.ObjectLiteralExpression) {
        updateObjectLiteralWithCommentsAndRemoval(initializer as ObjectLiteralExpression, newValue);
      }
      else if (isNewValueArray && initializer.getKind() === SyntaxKind.ArrayLiteralExpression) {
        updateArrayLiteral(initializer as ArrayLiteralExpression, newValue);
      }
      else {
        const formattedValue = formatValue(newValue, quotePreference);
        if (initializer.getText() !== formattedValue) {
          existingProp.setInitializer(formattedValue);
        }
      }
      existingProps.delete(key);
    } else {
      // --- 属性不存在，新增 (默认使用单引号) ---
      const keyIdentifier = key.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/) ? key : `'${key}'`;
      objLiteral.addPropertyAssignment({
        name: keyIdentifier,
        initializer: formatValue(newValue, "'"),
      });
    }
  }

  for (const [key, prop] of existingProps.entries()) {
    if (keysToRemove.includes(key)) {
      prop.remove();
    }
  }
}

// 修改原来的智能更新函数
function updateObjectLiteralWithComments(
  objLiteral: ObjectLiteralExpression,
  newObj: any
): void {
  updateObjectLiteralWithCommentsAndRemoval(objLiteral, newObj, []);
}

// 🆕 新增：格式化对象用于内联
function formatObjectForInline(obj: any): string {
  return formatObjectCompletely(obj, 2);
}

// 原来的 formatObject 函数，重命名为 formatObjectCompletely
function formatObjectCompletely(obj: any, indent: number = 2): string {
  const spaces = " ".repeat(indent);
  let result = "{\n";

  const entries = Object.entries(obj);

  entries.forEach(([key, value], index) => {
    const isLast = index === entries.length - 1;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      // 嵌套对象
      result += `${spaces}${key}: ${formatObjectCompletely(value, indent + 2)}${isLast ? "" : ","}\n`;
    } else if (Array.isArray(value)) {
      // 🆕 数组
      result += `${spaces}${key}: ${formatArray(value, indent + 2)}${isLast ? "" : ","}\n`;
    } else {
      // 简单值
      const quotedValue = formatSimpleValue(value as string);
      result += `${spaces}${key}: ${quotedValue}${isLast ? "" : ","}\n`;
    }
  });

  result += " ".repeat(indent - 2) + "}";
  return result;
}

// 将对象写入TypeScript文件，保留原有注释和结构，支持删除keys
async function writeObjectToFileWithRemoval(
  filePath: string,
  obj: any,
  keysToRemove: string[] = []
): Promise<void> {
  // 检查文件是否存在
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  文件不存在，创建默认文件: ${filePath}`);
    createDefaultLanguageFile(filePath);
  }

  try {
    // 使用 ts-morph 来精确修改文件，保留注释和其他内容
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(filePath);

    // 找到 message 变量声明
    const variableStatements = sourceFile.getVariableStatements();
    let messageDeclaration: VariableDeclaration | undefined;

    for (const statement of variableStatements) {
      const declarations = statement.getDeclarations();
      for (const declaration of declarations) {
        if (declaration.getName() === "message") {
          messageDeclaration = declaration;
          break;
        }
      }
      if (messageDeclaration) break;
    }

    if (messageDeclaration) {
      const initializer = messageDeclaration.getInitializer();
      if (
        initializer &&
        initializer.getKind() === SyntaxKind.ObjectLiteralExpression
      ) {
        // 🆕 关键修改：使用支持删除的智能合并
        updateObjectLiteralWithCommentsAndRemoval(
          initializer as ObjectLiteralExpression,
          obj,
          keysToRemove
        );
        await sourceFile.save();
        console.log(
          `📝 已更新文件: ${filePath} (保留原有注释和结构, 删除了 ${keysToRemove.length} 个多余keys)`
        );
      } else {
        throw new Error("message 不是对象字面量");
      }
    } else {
      console.error(`❌ 未找到 message 变量声明: ${filePath}`);
    }
  } catch (error: any) {
    console.error(`❌ 更新文件失败: ${filePath}`, error.message);

    // 如果 ts-morph 方式失败，回退到简单的字符串替换方式
    console.log(`⚠️  回退到对象删除+字符串替换方式...`);

    try {
      // 先从对象中删除多余的keys
      const cleanedObj = removeKeysFromNestedObject(obj, keysToRemove);

      const content = fs.readFileSync(filePath, "utf-8");
      const objectStr = formatObjectCompletely(cleanedObj);

      // 使用正则表达式找到并替换 message 对象
      const updatedContent = content.replace(
        /let\s+message\s*=\s*\{[\s\S]*?\};/,
        `let message = ${objectStr};`
      );

      fs.writeFileSync(filePath, updatedContent, "utf-8");
      console.log(
        `📝 已通过字符串替换更新文件: ${filePath} (删除了 ${keysToRemove.length} 个多余keys)`
      );
    } catch (fallbackError: any) {
      console.error(`❌ 字符串替换方式也失败了:`, fallbackError.message);

      // 最后的备用方案：完全重写文件（会丢失注释）
      const cleanedObj = removeKeysFromNestedObject(obj, keysToRemove);
      const objectStr = formatObjectCompletely(cleanedObj);
      const fileContent = `let message = ${objectStr};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
`;
      fs.writeFileSync(filePath, fileContent, "utf-8");
      console.log(`⚠️  已重写文件 (可能丢失注释): ${filePath}`);
    }
  }
}

// 原来的写入函数保持不变（向后兼容）
async function writeObjectToFile(filePath: string, obj: any): Promise<void> {
  return writeObjectToFileWithRemoval(filePath, obj, []);
}

// 找出缺失的键
function findMissingKeys(
  baseFlat: { [key: string]: string },
  targetFlat: { [key: string]: string }
): string[] {
  const missingKeys: string[] = [];

  for (const key in baseFlat) {
    if (!(key in targetFlat)) {
      missingKeys.push(key);
    }
  }

  return missingKeys;
}

// 🆕 新增：找出多余的键（目标文件有但基准文件没有的）
function findExtraKeys(
  baseFlat: { [key: string]: string },
  targetFlat: { [key: string]: string }
): string[] {
  const extraKeys: string[] = [];

  for (const key in targetFlat) {
    if (!(key in baseFlat)) {
      extraKeys.push(key);
    }
  }

  return extraKeys;
}

// ✅ 请用下面这个【完整的新版本】替换你现有的 updateSpecificKeys 函数 ✅

async function updateSpecificKeys(options: UpdateKeysOptions) {
  const {
    keys,
    useAI = false,
    targetLanguages,
    forceUpdate = true,
    baseLanguage = "en-US"
  } = options;

  console.log("🚀 开始更新指定的keys...");
  console.log(`🎯 原始指定keys: ${keys.join(", ")}`);
  console.log(`🔄 强制更新: ${forceUpdate ? "是" : "否"}`);
  console.log(`🤖 使用AI翻译: ${useAI ? "是" : "否"}`);
  console.log(`📚 基准语言: ${baseLanguage}`);

  const baseFilePath = path.join(langPath, `${baseLanguage}.ts`);
  console.log(`📖 读取基准文件: ${baseFilePath}`);

  // ✨ 关键：我们需要未平铺的原始对象来进行展开操作
  const baseObj = parseObjectFromFile(baseFilePath);
  const baseFlat = flattenObject(baseObj);

  // =================================================================
  // ✨ 全新、更强大的键展开逻辑 ✨
  // =================================================================
  console.log('正在展开用户指定的 keys...');
  const expandedKeys: string[] = [];
  for (const key of keys) {
    // 使用 getValueByDotNotation 从【原始对象】中查找这个 key 对应的值
    const value = getValueByDotNotation(baseObj, key);
    console.log(`${key}====getValueByDotNotation-------${JSON.stringify(value)}`);

    // 检查这个值是不是一个可以展开的对象
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      console.log(`  -> 键 '${key}' 是一个对象，正在展开其所有子键...`);
      // 使用 getLeafKeys 展开所有叶子节点，并提供当前 key 作为前缀
      const leafKeys = getLeafKeys(value, key);
      expandedKeys.push(...leafKeys);
    } else {
      // 如果不是对象，或者 key 在基准文件中不存在，就按原样处理
      console.log(`  -> 键 '${key}' 是一个具体的值或不存在，直接处理。`);
      expandedKeys.push(key);
    }
  }

  // =================================================================

  // 验证展开后的keys是否存在于基准文件中
  const validKeys: string[] = [];
  const invalidKeys: string[] = [];

  // 使用 Set 去重，以防用户输入了 'a.b' 和 'a.b.c' 这样的重复情况
  const uniqueKeys = [...new Set(expandedKeys)];
  console.log(`uniqueKeys-------${uniqueKeys.join(", ")}`);

  for (const key of uniqueKeys) {
    if (key in baseFlat || `${key}[0]` in baseFlat) {
      validKeys.push(key);
    } else {
      invalidKeys.push(key);
    }
  }

  // console.log(`baseFlat-------${JSON.stringify(baseFlat)}`);
  // console.log(`validKeys-------${validKeys.join(", ")}`);
  // console.log(`invalidKeys-------${invalidKeys.join(", ")}`);
  // if (invalidKeys.length > -10) {
  //   return;
  // }

  if (invalidKeys.length > 0) {
    console.warn(`⚠️  以下keys在基准文件中不存在: ${invalidKeys.join(", ")}`);
  }

  if (validKeys.length === 0) {
    console.log("❌ 没有有效的keys需要更新");
    return;
  }

  console.log(`✅ 最终有效keys: ${validKeys.length} 个`);
  console.log(`   前5个: ${validKeys.slice(0, 5).join(", ")}${validKeys.length > 5 ? '...' : ''}`);

  // 🆕 修复：确定目标语言（排除基准语言，并且只处理存在的语言）
  let langs: string[];

  if (targetLanguages) {
    // 用户指定了目标语言，需要过滤掉基准语言，并验证语言代码
    langs = targetLanguages
      .filter((lang) => lang !== baseLanguage)
      .filter((lang) => {
        if (languages.includes(lang)) {
          return true;
        } else {
          console.warn(`⚠️  未知语言代码: ${lang}，跳过`);
          return false;
        }
      });

    if (targetLanguages.includes(baseLanguage)) {
      console.log(`🔄 跳过基准语言 ${baseLanguage}，只处理其他语言`);
    }

    console.log(`🎯 指定目标语言: ${langs.join(", ")}`);
  } else {
    // 未指定目标语言，处理所有语言（除了基准语言）
    langs = languages.filter((lang) => lang !== baseLanguage);
    console.log(`🌍 处理所有语言 (除基准语言 ${baseLanguage}): ${langs.length} 个`);
  }

  if (langs.length === 0) {
    console.log("❌ 没有有效的目标语言需要处理");
    return;
  }

  for (const lang of langs) {
    console.log(`\n🌍 处理语言: ${lang}`);

    const targetFilePath = path.join(langPath, `${lang}.ts`);
    const targetObj = parseObjectFromFile(targetFilePath);
    const targetFlat = flattenObject(targetObj);

    // 确定需要更新的keys
    let keysToUpdate: string[] = [];

    if (forceUpdate) {
      keysToUpdate = validKeys;
      console.log(
        `🔄 强制更新模式: 将更新所有 ${keysToUpdate.length} 个指定keys`
      );
    } else {
      // 只更新不存在的keys
      keysToUpdate = validKeys.filter((key) => !(key in targetFlat));
      console.log(`🔍 增量更新模式: 发现 ${keysToUpdate.length} 个缺失的keys`);

      if (keysToUpdate.length === 0) {
        console.log(`✅ ${lang} 文件中所有指定keys都已存在，跳过`);
        continue;
      }
    }

    // 🆕 重要：始终从基准语言文件获取最新的文本进行翻译
    console.log(`📚 从基准语言 ${baseLanguage} 获取要翻译的文本...`);
    const textsToTranslate = keysToUpdate.map((key) => baseFlat[key]);

    console.log(`📝 需要翻译的keys示例:`);
    keysToUpdate.slice(0, 3).forEach((key) => {
      console.log(
        `  ${key}: "${baseFlat[key]}" (来自基准语言 ${baseLanguage})`
      );
    });

    // 调用翻译函数
    const translatedTexts = await translateTexts(textsToTranslate, lang, useAI);

    // 更新目标语言文件
    const updatedFlat = { ...targetFlat };
    keysToUpdate.forEach((key, index) => {
      const originalValue = targetFlat[key] || "(不存在)";
      const newValue = translatedTexts[index];

      // 🆕 记录更新详情
      if (forceUpdate && targetFlat[key]) {
        console.log(`🔄 更新 ${key}: "${originalValue}" → "${newValue}"`);
      } else {
        console.log(`➕ 新增 ${key}: "${newValue}"`);
      }

      updatedFlat[key] = newValue;
    });

    console.log(
      `📊 更新后 ${lang} 包含 ${Object.keys(updatedFlat).length} 个翻译键`
    );

    const updatedObj = unflattenObject(updatedFlat);

    console.log(`💾 写入文件: ${targetFilePath}`);
    await writeObjectToFile(targetFilePath, updatedObj);

    console.log(`✅ ${lang} 处理完成`);
  }

  console.log("\n🎉 指定keys更新完成！");
}


// 🆕 新增功能：更新指定的keys
interface UpdateKeysOptions {
  keys: string[]; // 要更新的key数组，支持嵌套路径如 "user.profile.name"
  useAI?: boolean; // 是否使用AI翻译
  targetLanguages?: string[]; // 目标语言，不传则更新所有语言
  forceUpdate?: boolean; // 是否强制更新（即使目标key已存在）
  baseLanguage?: string; // 🆕 基准语言文件，默认为 'zh-CN'
}

// 🆕 解析命令行参数的功能
function parseCommandLineArgs(): {
  mode: "all" | "keys";
  keys?: string[];
  useAI?: boolean;
  targetLanguages?: string[];
  forceUpdate?: boolean;
  baseLanguage?: string; // 🆕 基准语言参数
} {
  const args = process.argv.slice(2);

  // 检查是否指定了特定keys
  const keysIndex = args.indexOf("--keys");
  const useAIIndex = args.indexOf("--ai");
  const forceUpdateIndex = args.indexOf("--force");
  const langIndex = args.indexOf("--lang");
  const baseIndex = args.indexOf("--base"); // 🆕 基准语言参数

  // 🆕 获取基准语言参数
  let baseLanguage: string | undefined;
  if (baseIndex !== -1 && baseIndex + 1 < args.length) {
    baseLanguage = args[baseIndex + 1];
  }

  if (keysIndex !== -1 && keysIndex + 1 < args.length) {
    // 获取keys参数
    const keysString = args[keysIndex + 1];
    const keys = keysString.split(",").map((key) => key.trim());

    let targetLanguages: string[] | undefined;
    if (langIndex !== -1 && langIndex + 1 < args.length) {
      const langString = args[langIndex + 1];
      targetLanguages = langString.split(",").map((lang) => lang.trim());
    }

    return {
      mode: "keys",
      keys,
      useAI: useAIIndex !== -1,
      forceUpdate: forceUpdateIndex !== -1,
      targetLanguages,
      baseLanguage // 🆕 返回基准语言
    };
  }

  return {
    mode: "all",
    useAI: useAIIndex !== -1,
    baseLanguage // 🆕 返回基准语言
  };
}

// 🆕 修改主函数，默认增加删除多余keys的功能
async function processAllMissingKeys(
  useAI: boolean = false,
  baseLanguage: string = "en-US"
) {
  console.log("🚀 开始处理多语言文件...");
  console.log(`📚 基准语言: ${baseLanguage}`);

  const baseFilePath = path.join(langPath, `${baseLanguage}.ts`);
  console.log(`📖 读取基准文件: ${baseFilePath}`);

  const baseObj = parseObjectFromFile(baseFilePath);
  const baseFlat = flattenObject(baseObj);

  console.log(`📊 基准文件包含 ${Object.keys(baseFlat).length} 个翻译键`);
  console.log("基准文件平铺结构预览:", Object.keys(baseFlat).slice(0, 3));

  for (const lang of languages) {
    if (lang === baseLanguage) continue;

    console.log(`\n🌍 处理语言: ${lang}`);

    const targetFilePath = path.join(langPath, `${lang}.ts`);
    const targetObj = parseObjectFromFile(targetFilePath);
    const targetFlat = flattenObject(targetObj);

    console.log(
      `📊 ${lang} 文件当前包含 ${Object.keys(targetFlat).length} 个翻译键`
    );

    // 🆕 1. 查找缺失的keys（需要添加）
    const missingKeys = findMissingKeys(baseFlat, targetFlat);

    // 🆕 2. 查找多余的keys（需要删除）
    const extraKeys = findExtraKeys(baseFlat, targetFlat);

    console.log(
      `🔍 发现 ${missingKeys.length} 个缺失的键，${extraKeys.length} 个多余的键`
    );

    // 显示缺失和多余的keys示例
    if (missingKeys.length > 0) {
      console.log(
        "缺失键示例:",
        missingKeys.slice(0, 3).map((key) => `${key}: "${baseFlat[key]}"`)
      );
    }
    if (extraKeys.length > 0) {
      console.log(
        "多余键示例:",
        extraKeys.slice(0, 3).map((key) => `${key}: "${targetFlat[key]}"`)
      );
    }

    // 🆕 3. 处理翻译（只处理缺失的keys）
    let updatedFlat = { ...targetFlat };

    if (missingKeys.length > 0) {
      const textsToTranslate = missingKeys.map((key) => baseFlat[key]);

      console.log("开始翻译缺失的keys...");
      const translatedTexts = await translateTexts(
        textsToTranslate,
        lang,
        useAI
      );

      // 添加翻译结果
      missingKeys.forEach((key, index) => {
        updatedFlat[key] = translatedTexts[index];
        console.log(`➕ 新增: ${key}`);
      });
    }

    // 🆕 4. 删除多余的keys（从平铺对象中删除）
    if (extraKeys.length > 0) {
      console.log("开始删除多余的keys...");
      extraKeys.forEach((key) => {
        console.log(`🗑️  删除: ${key}: "${updatedFlat[key]}"`);
        delete updatedFlat[key];
      });
    }

    console.log(
      `📊 处理后 ${lang} 包含 ${Object.keys(updatedFlat).length} 个翻译键 (新增: ${missingKeys.length}, 删除: ${extraKeys.length})`
    );

    // 🆕 5. 转换回嵌套对象并写入文件（使用支持删除的版本）
    const updatedObj = unflattenObject(updatedFlat);

    console.log(`💾 写入文件: ${targetFilePath}`);
    await writeObjectToFileWithRemoval(targetFilePath, updatedObj, extraKeys);

    console.log(`✅ ${lang} 处理完成`);
  }

  console.log("\n🎉 所有语言文件处理完成！");
  console.log(
    "📈 总结：自动添加了缺失的翻译，并删除了多余的翻译，保持所有语言文件与基准文件同步。"
  );
}

// 修改后的主函数
async function main() {
  const config = parseCommandLineArgs();

  if (config.mode === "keys" && config.keys) {
    // 更新指定keys模式
    await updateSpecificKeys({
      keys: config.keys,
      useAI: config.useAI,
      targetLanguages: config.targetLanguages,
      forceUpdate: config.forceUpdate,
      baseLanguage: config.baseLanguage // 🆕 传递基准语言参数
    });
  } else {
    // 🆕 处理所有缺失keys模式（现在默认包含删除多余keys功能）
    await processAllMissingKeys(config.useAI, config.baseLanguage || "en-US");
  }
}

// 🆕 更新帮助信息
function showHelp() {
  console.log(`
📖 多语言翻译工具使用说明 (现已默认包含删除多余翻译功能)

# 处理所有缺失的翻译，并删除多余的翻译（默认基于 en-US）
tsx ./updatei18n.ts

# 使用AI翻译处理所有缺失和多余的翻译
tsx ./updatei18n.ts --ai

# 指定基准语言文件（默认为 en-US）
tsx ./updatei18n.ts --base zh-CN

# 更新指定的keys到所有语言（不会删除多余keys）
tsx ./updatei18n.ts --keys "user.name,user.email,settings.title"

# 🆕 更新指定顶级key下的所有子keys（自动展开）
tsx ./updatei18n.ts --keys "user,settings"

# 🆕 混合使用：既可以指定具体keys，也可以指定顶级keys
tsx ./updatei18n.ts --keys "user,settings.theme,profile.email"

# 使用AI翻译指定的keys
tsx ./updatei18n.ts --keys "user.name,user.email" --ai

# 强制更新指定的keys（即使已存在）
tsx ./updatei18n.ts --keys "user.name,user.email" --force

# 🆕 修复：只更新到指定语言（现在会正确排除基准语言）
tsx ./updatei18n.ts --keys "user.name,user.email" --lang "fr-FR,ja-JP"

# 指定基准语言为英文，更新指定keys
tsx ./updatei18n.ts --keys "user.profile.name,settings.theme" --base en-US

# 组合使用：指定基准语言+AI翻译+强制更新+指定目标语言
tsx ./updatei18n.ts --keys "user.profile.name,settings.theme" --base en-US --ai --force --lang "zh-CN,fr-FR"

# 🆕 展开顶级keys示例：
tsx ./updatei18n.ts --keys "user" --lang "fr-FR"
# 这会自动找到并翻译所有以 "user." 开头的keys，如：
# user.name, user.email, user.profile.avatar, user.settings.theme 等

🆕 新功能说明：
✅ 顶级keys自动展开：指定 "user" 会自动翻译 user.name, user.email 等所有子keys
✅ 混合指定：可以同时指定顶级keys和具体keys，如 --keys "user,settings.theme"
✅ 修复语言过滤：--lang 参数现在会正确排除基准语言，避免重复处理
✅ 详细日志：显示展开的keys数量和处理详情
✅ 智能去重：展开后的keys会自动去重

参数说明：
--base <语言代码>     指定基准语言文件（如：zh-CN, en-US），默认处理全部时为 en-US，处理指定keys时为 zh-CN
--keys <键列表>       指定要更新的keys，支持顶级keys自动展开，用逗号分隔（不会删除多余keys）
--ai                 使用AI翻译替代Google翻译
--force              强制更新（即使目标key已存在）
--lang <语言列表>     指定目标语言，用逗号分隔（会自动排除基准语言）
--help, -h           显示此帮助信息

🔧 修复内容：
✅ --lang 参数现在会正确过滤掉基准语言
✅ 添加了语言代码验证，无效语言会被跳过并警告
✅ 改进了日志显示，更清楚地显示处理的语言列表
`);
}

// 检查是否需要显示帮助
if (process.argv.includes("--help") || process.argv.includes("-h")) {
  showHelp();
  process.exit(0);
}

main().catch(console.error);
