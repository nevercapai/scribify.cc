#!/usr/bin/env ts-node

import {
  Project,
  SyntaxKind,
  ObjectLiteralExpression,
  PropertyAssignment
} from "ts-morph";
import path from "path";
import fs from "fs";

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

// 翻译映射 - 支持嵌套键路径
const translations: Record<string, Record<string, string>> = {
  "en-US": {
    "FileUploadAndRecording.upload.howToSetup": "How to setup?",
    "FileUploadAndRecording.upload.shareFilePublicly": "Share a file publicly",
    "FileUploadAndRecording.upload.retry": "Retry",
    "FileUploadAndRecording.upload.edit": "Edit",
    "FileUploadAndRecording.upload.delete": "Delete",
    "FileUploadAndRecording.upload.updateAndRetry": "Update and Retry"
  },
  "es-ES": {
    "FileUploadAndRecording.upload.howToSetup": "¿Cómo configurar?",
    "FileUploadAndRecording.upload.shareFilePublicly":
      "Compartir un archivo públicamente",
    "FileUploadAndRecording.upload.retry": "Reintentar",
    "FileUploadAndRecording.upload.edit": "Editar",
    "FileUploadAndRecording.upload.delete": "Eliminar",
    "FileUploadAndRecording.upload.updateAndRetry": "Actualizar y Reintentar"
  },
  "it-IT": {
    "FileUploadAndRecording.upload.howToSetup": "Come configurare?",
    "FileUploadAndRecording.upload.shareFilePublicly":
      "Condividi un file pubblicamente",
    "FileUploadAndRecording.upload.retry": "Riprova",
    "FileUploadAndRecording.upload.edit": "Modifica",
    "FileUploadAndRecording.upload.delete": "Elimina",
    "FileUploadAndRecording.upload.updateAndRetry": "Aggiorna e Riprova"
  },
  "fr-FR": {
    "FileUploadAndRecording.upload.howToSetup": "Comment configurer ?",
    "FileUploadAndRecording.upload.shareFilePublicly":
      "Partager un fichier publiquement",
    "FileUploadAndRecording.upload.retry": "Réessayer",
    "FileUploadAndRecording.upload.edit": "Modifier",
    "FileUploadAndRecording.upload.delete": "Supprimer",
    "FileUploadAndRecording.upload.updateAndRetry": "Mettre à jour et Réessayer"
  },
  "de-DE": {
    "FileUploadAndRecording.upload.howToSetup": "Wie einrichten?",
    "FileUploadAndRecording.upload.shareFilePublicly":
      "Datei öffentlich teilen",
    "FileUploadAndRecording.upload.retry": "Wiederholen",
    "FileUploadAndRecording.upload.edit": "Bearbeiten",
    "FileUploadAndRecording.upload.delete": "Löschen",
    "FileUploadAndRecording.upload.updateAndRetry":
      "Aktualisieren und Wiederholen"
  },
  "zh-CN": {
    "FileUploadAndRecording.upload.howToSetup": "如何设置？",
    "FileUploadAndRecording.upload.shareFilePublicly": "公开分享文件",
    "FileUploadAndRecording.upload.retry": "重试",
    "FileUploadAndRecording.upload.edit": "编辑",
    "FileUploadAndRecording.upload.delete": "删除",
    "FileUploadAndRecording.upload.updateAndRetry": "更新并重试"
  },
  "zh-TW": {
    "FileUploadAndRecording.upload.howToSetup": "如何設定？",
    "FileUploadAndRecording.upload.shareFilePublicly": "公開分享檔案",
    "FileUploadAndRecording.upload.retry": "重試",
    "FileUploadAndRecording.upload.edit": "編輯",
    "FileUploadAndRecording.upload.delete": "刪除",
    "FileUploadAndRecording.upload.updateAndRetry": "更新並重試"
  },
  "ja-JP": {
    "FileUploadAndRecording.upload.howToSetup": "設定方法は？",
    "FileUploadAndRecording.upload.shareFilePublicly": "ファイルを公開で共有",
    "FileUploadAndRecording.upload.retry": "再試行",
    "FileUploadAndRecording.upload.edit": "編集",
    "FileUploadAndRecording.upload.delete": "削除",
    "FileUploadAndRecording.upload.updateAndRetry": "更新して再試行"
  },
  "ko-KR": {
    "FileUploadAndRecording.upload.howToSetup": "설정 방법은?",
    "FileUploadAndRecording.upload.shareFilePublicly": "파일 공개 공유",
    "FileUploadAndRecording.upload.retry": "다시 시도",
    "FileUploadAndRecording.upload.edit": "편집",
    "FileUploadAndRecording.upload.delete": "삭제",
    "FileUploadAndRecording.upload.updateAndRetry": "업데이트 후 다시 시도"
  },
  "nl-NL": {
    "FileUploadAndRecording.upload.howToSetup": "Hoe instellen?",
    "FileUploadAndRecording.upload.shareFilePublicly": "Bestand openbaar delen",
    "FileUploadAndRecording.upload.retry": "Opnieuw proberen",
    "FileUploadAndRecording.upload.edit": "Bewerken",
    "FileUploadAndRecording.upload.delete": "Verwijderen",
    "FileUploadAndRecording.upload.updateAndRetry":
      "Bijwerken en opnieuw proberen"
  },
  "pl-PL": {
    "FileUploadAndRecording.upload.howToSetup": "Jak skonfigurować?",
    "FileUploadAndRecording.upload.shareFilePublicly":
      "Udostępnij plik publicznie",
    "FileUploadAndRecording.upload.retry": "Ponów",
    "FileUploadAndRecording.upload.edit": "Edytuj",
    "FileUploadAndRecording.upload.delete": "Usuń",
    "FileUploadAndRecording.upload.updateAndRetry": "Aktualizuj i ponów"
  },
  "da-DK": {
    "FileUploadAndRecording.upload.howToSetup": "Hvordan konfigureres?",
    "FileUploadAndRecording.upload.shareFilePublicly": "Del en fil offentligt",
    "FileUploadAndRecording.upload.retry": "Prøv igen",
    "FileUploadAndRecording.upload.edit": "Rediger",
    "FileUploadAndRecording.upload.delete": "Slet",
    "FileUploadAndRecording.upload.updateAndRetry": "Opdater og prøv igen"
  },
  "hu-HU": {
    "FileUploadAndRecording.upload.howToSetup": "Hogyan állíthatom be?",
    "FileUploadAndRecording.upload.shareFilePublicly":
      "Fájl nyilvános megosztása",
    "FileUploadAndRecording.upload.retry": "Újra",
    "FileUploadAndRecording.upload.edit": "Szerkesztés",
    "FileUploadAndRecording.upload.delete": "Törlés",
    "FileUploadAndRecording.upload.updateAndRetry": "Frissítés és újra"
  },
  "no-NO": {
    "FileUploadAndRecording.upload.howToSetup": "Hvordan sette opp?",
    "FileUploadAndRecording.upload.shareFilePublicly": "Del en fil offentlig",
    "FileUploadAndRecording.upload.retry": "Prøv igjen",
    "FileUploadAndRecording.upload.edit": "Rediger",
    "FileUploadAndRecording.upload.delete": "Slett",
    "FileUploadAndRecording.upload.updateAndRetry": "Oppdater og prøv igjen"
  },
  "pt-PT": {
    "FileUploadAndRecording.upload.howToSetup": "Como configurar?",
    "FileUploadAndRecording.upload.shareFilePublicly":
      "Partilhar um ficheiro publicamente",
    "FileUploadAndRecording.upload.retry": "Repetir",
    "FileUploadAndRecording.upload.edit": "Editar",
    "FileUploadAndRecording.upload.delete": "Eliminar",
    "FileUploadAndRecording.upload.updateAndRetry": "Atualizar e Repetir"
  },
  "fi-FI": {
    "FileUploadAndRecording.upload.howToSetup": "Miten asennan?",
    "FileUploadAndRecording.upload.shareFilePublicly":
      "Jaa tiedosto julkisesti",
    "FileUploadAndRecording.upload.retry": "Yritä uudelleen",
    "FileUploadAndRecording.upload.edit": "Muokkaa",
    "FileUploadAndRecording.upload.delete": "Poista",
    "FileUploadAndRecording.upload.updateAndRetry": "Päivitä ja yritä uudelleen"
  },
  "sv-SE": {
    "FileUploadAndRecording.upload.howToSetup": "Hur ställer jag in?",
    "FileUploadAndRecording.upload.shareFilePublicly": "Dela en fil offentligt",
    "FileUploadAndRecording.upload.retry": "Försök igen",
    "FileUploadAndRecording.upload.edit": "Redigera",
    "FileUploadAndRecording.upload.delete": "Radera",
    "FileUploadAndRecording.upload.updateAndRetry": "Uppdatera och försök igen"
  },
  "ru-RU": {
    "FileUploadAndRecording.upload.howToSetup": "Как настроить?",
    "FileUploadAndRecording.upload.shareFilePublicly":
      "Поделиться файлом публично",
    "FileUploadAndRecording.upload.retry": "Повторить",
    "FileUploadAndRecording.upload.edit": "Редактировать",
    "FileUploadAndRecording.upload.delete": "Удалить",
    "FileUploadAndRecording.upload.updateAndRetry": "Обновить и повторить"
  },
  "tr-TR": {
    "FileUploadAndRecording.upload.howToSetup": "Nasıl kurulur?",
    "FileUploadAndRecording.upload.shareFilePublicly":
      "Dosyayı herkese açık paylaş",
    "FileUploadAndRecording.upload.retry": "Yeniden Dene",
    "FileUploadAndRecording.upload.edit": "Düzenle",
    "FileUploadAndRecording.upload.delete": "Sil",
    "FileUploadAndRecording.upload.updateAndRetry": "Güncelle ve Yeniden Dene"
  },
  "el-GR": {
    "FileUploadAndRecording.upload.howToSetup": "Πώς να ρυθμίσετε;",
    "FileUploadAndRecording.upload.shareFilePublicly":
      "Κοινοποίηση αρχείου δημοσίως",
    "FileUploadAndRecording.upload.retry": "Δοκιμάστε ξανά",
    "FileUploadAndRecording.upload.edit": "Επεξεργασία",
    "FileUploadAndRecording.upload.delete": "Διαγραφή",
    "FileUploadAndRecording.upload.updateAndRetry": "Ενημέρωση και Δοκιμή ξανά"
  },
  "uk-UA": {
    "FileUploadAndRecording.upload.howToSetup": "Як налаштувати?",
    "FileUploadAndRecording.upload.shareFilePublicly":
      "Опублікувати файл публічно",
    "FileUploadAndRecording.upload.retry": "Повторити",
    "FileUploadAndRecording.upload.edit": "Редагувати",
    "FileUploadAndRecording.upload.delete": "Видалити",
    "FileUploadAndRecording.upload.updateAndRetry": "Оновити та повторити"
  },
  "he-IL": {
    "FileUploadAndRecording.upload.howToSetup": "איך להגדיר?",
    "FileUploadAndRecording.upload.shareFilePublicly": "שתף קובץ באופן ציבורי",
    "FileUploadAndRecording.upload.retry": "נסה שוב",
    "FileUploadAndRecording.upload.edit": "ערוך",
    "FileUploadAndRecording.upload.delete": "מחק",
    "FileUploadAndRecording.upload.updateAndRetry": "עדכן ונסה שוב"
  },
  "ar-SA": {
    "FileUploadAndRecording.upload.howToSetup": "كيفية الإعداد؟",
    "FileUploadAndRecording.upload.shareFilePublicly": "مشاركة ملف بشكل علني",
    "FileUploadAndRecording.upload.retry": "إعادة المحاولة",
    "FileUploadAndRecording.upload.edit": "تحرير",
    "FileUploadAndRecording.upload.delete": "حذف",
    "FileUploadAndRecording.upload.updateAndRetry": "تحديث وإعادة المحاولة"
  }
};

interface NestedKeyConfig {
  path: string[]; // 嵌套路径，如 ['a', 'b', 'c']
  targetObject?: ObjectLiteralExpression; // 目标对象
  targetIndex?: number; // 在目标对象中的索引
}

interface KeyLocation {
  found: boolean;
  object: ObjectLiteralExpression;
  property?: PropertyAssignment;
  index?: number;
  nestedPath?: string[];
}

type OperationType = "insert" | "replace" | "upsert";

class NestedI18nUpdater {
  private project: Project;

  constructor() {
    this.project = new Project({
      useInMemoryFileSystem: false,
      skipFileDependencyResolution: true
    });
  }

  /**
   * 解析嵌套路径
   */
  private parseNestedPath(nestedKey: string): string[] {
    return nestedKey
      .split(".")
      .map((key) => key.trim())
      .filter((key) => key.length > 0);
  }

  /**
   * 查找嵌套对象和位置
   */
  private findNestedTarget(
    rootObject: ObjectLiteralExpression,
    nestedPath: string[]
  ): NestedKeyConfig | null {
    let currentObject = rootObject;
    const fullPath = [...nestedPath];

    // 如果只有一个路径，直接在根对象中查找
    if (fullPath.length === 1) {
      const targetKey = fullPath[0];
      const properties = currentObject.getProperties();
      const targetIndex = properties.findIndex(
        (prop) => this.getPropertyName(prop) === targetKey
      );

      if (targetIndex !== -1) {
        return {
          path: fullPath,
          targetObject: currentObject,
          targetIndex
        };
      }
      return null;
    }

    // 遍历嵌套路径，找到目标位置
    const parentPath = fullPath.slice(0, -1); // 父路径
    const targetKey = fullPath[fullPath.length - 1]; // 目标键

    // 导航到父对象
    for (let i = 0; i < parentPath.length; i++) {
      const key = parentPath[i];
      const property = currentObject.getProperty(key);

      if (!property || property.getKind() !== SyntaxKind.PropertyAssignment) {
        console.warn(
          `⚠️  嵌套路径中未找到: ${parentPath.slice(0, i + 1).join(".")}`
        );
        return null;
      }

      const propAssignment = property as PropertyAssignment;
      const initializer = propAssignment.getInitializer();

      if (
        !initializer ||
        initializer.getKind() !== SyntaxKind.ObjectLiteralExpression
      ) {
        console.warn(`⚠️  ${key} 不是对象类型`);
        return null;
      }

      currentObject = initializer as ObjectLiteralExpression;
    }

    // 在父对象中查找目标键
    const properties = currentObject.getProperties();
    const targetIndex = properties.findIndex(
      (prop) => this.getPropertyName(prop) === targetKey
    );

    if (targetIndex !== -1) {
      return {
        path: fullPath,
        targetObject: currentObject,
        targetIndex
      };
    }

    console.warn(`⚠️  未找到目标键: ${fullPath.join(".")}`);
    return null;
  }

  /**
   * 查找现有的键位置（支持嵌套）
   */
  private findExistingKey(
    rootObject: ObjectLiteralExpression,
    key: string
  ): KeyLocation {
    // 检查是否是嵌套键
    if (key.includes(".")) {
      const nestedPath = this.parseNestedPath(key);
      let currentObject = rootObject;
      const pathToTarget = [...nestedPath];

      // 逐层导航到目标位置
      for (let i = 0; i < pathToTarget.length; i++) {
        const currentKey = pathToTarget[i];
        const properties = currentObject.getProperties();
        const propIndex = properties.findIndex(
          (prop) => this.getPropertyName(prop) === currentKey
        );

        if (propIndex === -1) {
          console.log(
            `🔍 未找到嵌套键路径: ${pathToTarget.slice(0, i + 1).join(".")} (在 ${key} 中)`
          );
          return { found: false, object: rootObject };
        }

        const property = properties[propIndex] as PropertyAssignment;

        // 如果是最后一个键，找到了目标
        if (i === pathToTarget.length - 1) {
          console.log(`✅ 找到嵌套键: ${key}`);
          return {
            found: true,
            object: currentObject,
            property,
            index: propIndex,
            nestedPath: nestedPath.slice(0, -1)
          };
        }

        // 继续导航到下一层
        const initializer = property.getInitializer();
        if (
          !initializer ||
          initializer.getKind() !== SyntaxKind.ObjectLiteralExpression
        ) {
          console.log(
            `🔍 嵌套键路径中断: ${currentKey} 不是对象 (在 ${key} 中)`
          );
          return { found: false, object: rootObject };
        }

        currentObject = initializer as ObjectLiteralExpression;
      }
    } else {
      // 简单键，直接在根对象查找
      const properties = rootObject.getProperties();
      const propIndex = properties.findIndex(
        (prop) => this.getPropertyName(prop) === key
      );

      if (propIndex !== -1) {
        console.log(`✅ 找到根级键: ${key}`);
        return {
          found: true,
          object: rootObject,
          property: properties[propIndex] as PropertyAssignment,
          index: propIndex
        };
      } else {
        console.log(`🔍 未找到根级键: ${key}`);
      }
    }

    return { found: false, object: rootObject };
  }

  /**
   * 获取属性名称
   */
  private getPropertyName(property: any): string {
    if (property.getKind() === SyntaxKind.PropertyAssignment) {
      const nameNode = property.getNameNode();
      const name = nameNode.getText();
      // 去除引号
      return name.replace(/^["']|["']$/g, "");
    }
    return "";
  }

  /**
   * 解析嵌套插入配置
   */
  private parseInsertConfig(referenceKey: string): {
    insertInNested: boolean;
    parentPath?: string[];
    targetKey?: string;
    flatKey?: string;
  } {
    if (!referenceKey.includes(".")) {
      return {
        insertInNested: false,
        flatKey: referenceKey
      };
    }

    const parts = this.parseNestedPath(referenceKey);

    // 检查是否要在嵌套对象内部插入
    // 格式: "a.b.c*" 表示在 a.b.c 对象内部插入
    // 格式: "a.b.c" 表示在 a.b.c 键后面插入
    if (referenceKey.endsWith("*")) {
      const cleanPath = referenceKey.replace("*", "");
      const pathParts = this.parseNestedPath(cleanPath);
      return {
        insertInNested: true,
        parentPath: pathParts
      };
    }

    return {
      insertInNested: false,
      parentPath: parts.slice(0, -1),
      targetKey: parts[parts.length - 1]
    };
  }

  /**
   * 更新多个语言文件 (支持嵌套和替换)
   */
  updateMultipleLanguageFiles(
    baseDir: string,
    operation: OperationType = "insert",
    insertPosition: "first" | "last" | "after" | "before" = "last",
    referenceKey?: string
  ) {
    console.log(`🌍 开始批量更新多语言文件 (支持嵌套和替换)...`);
    console.log(`📁 基础目录: ${baseDir}`);
    console.log(`🔧 操作类型: ${operation}`);
    console.log(`📍 插入位置: ${insertPosition}`);

    if (referenceKey) {
      const config = this.parseInsertConfig(referenceKey);
      console.log(`🔗 参考键: ${referenceKey}`);
      console.log(`📊 解析结果:`, {
        嵌套插入: config.insertInNested,
        父路径: config.parentPath?.join(".") || "无",
        目标键: config.targetKey || config.flatKey || "无"
      });
    }
    console.log();

    let successCount = 0;
    let errorCount = 0;

    languages.forEach((lang) => {
      const filePath = path.resolve(baseDir, `${lang}.ts`);

      try {
        if (!fs.existsSync(filePath)) {
          console.warn(`⚠️  文件不存在: ${filePath}`);
          return;
        }

        console.log(`🔄 正在处理: ${lang}`);

        const sourceFile = this.project.addSourceFileAtPath(filePath);

        // 查找根配置对象
        const rootObject = this.findRootConfigObject(sourceFile);
        if (!rootObject) {
          console.error(`❌ 未找到根配置对象在 ${filePath}`);
          errorCount++;
          return;
        }

        const langTranslations = translations[lang];
        if (!langTranslations) {
          console.warn(`⚠️  未找到 ${lang} 的翻译配置`);
          return;
        }

        // 批量处理所有键值对
        const keysToProcess = Object.keys(langTranslations);
        let processedCount = 0;

        for (const key of keysToProcess) {
          const translationText = langTranslations[key];

          console.log(`🔍 处理键: ${key}`);

          // 根据操作类型执行相应处理
          const result = this.processTranslationKey(
            rootObject,
            key,
            translationText,
            operation,
            insertPosition,
            referenceKey,
            lang
          );

          if (result.processed) {
            console.log(`   ${result.action} ${key}: "${translationText}"`);
            processedCount++;
          } else if (result.skipped) {
            console.log(`   ⏭️  ${result.reason}`);
          } else {
            console.error(`   ❌ ${key} 处理失败: ${result.error}`);
          }
        }

        if (processedCount > 0) {
          sourceFile.saveSync();
          console.log(`✅ ${lang} 完成，共处理 ${processedCount} 个键`);
          successCount++;
        } else {
          console.log(`⏭️  ${lang} 无需更新`);
        }
      } catch (error) {
        console.error(
          `❌ 处理文件 ${filePath} 时出错:`,
          (error as Error).message
        );
        errorCount++;
      }
    });

    console.log(`\n🎉 批量更新完成！`);
    console.log(`✅ 成功: ${successCount} 个文件`);
    console.log(`❌ 失败: ${errorCount} 个文件`);
  }

  /**
   * 处理单个翻译键
   */
  private processTranslationKey(
    rootObject: ObjectLiteralExpression,
    key: string,
    value: string,
    operation: OperationType,
    insertPosition: "first" | "last" | "after" | "before",
    referenceKey: string | undefined,
    lang: string
  ): {
    processed: boolean;
    skipped: boolean;
    action?: string;
    reason?: string;
    error?: string;
  } {
    // 查找键是否已存在
    const keyLocation = this.findExistingKey(rootObject, key);

    switch (operation) {
      case "insert":
        if (keyLocation.found) {
          return {
            processed: false,
            skipped: true,
            reason: `${lang} 已存在 ${key}，跳过插入`
          };
        }
        // 执行插入
        try {
          const success = this.insertTranslationNested(
            rootObject,
            key,
            value,
            insertPosition,
            referenceKey
          );
          return success
            ? { processed: true, action: "✅ 插入" }
            : { processed: false, skipped: false, error: "插入失败" };
        } catch (error) {
          return {
            processed: false,
            skipped: false,
            error: (error as Error).message
          };
        }

      case "replace":
        if (!keyLocation.found) {
          return {
            processed: false,
            skipped: true,
            reason: `${lang} 未找到 ${key}，跳过替换`
          };
        }
        // 执行替换
        try {
          const success = this.replaceTranslation(keyLocation, key, value);
          return success
            ? { processed: true, action: "🔄 替换" }
            : { processed: false, skipped: false, error: "替换失败" };
        } catch (error) {
          return {
            processed: false,
            skipped: false,
            error: (error as Error).message
          };
        }

      case "upsert":
        if (keyLocation.found) {
          // 替换现有
          try {
            const success = this.replaceTranslation(keyLocation, key, value);
            return success
              ? { processed: true, action: "🔄 更新" }
              : { processed: false, skipped: false, error: "更新失败" };
          } catch (error) {
            return {
              processed: false,
              skipped: false,
              error: (error as Error).message
            };
          }
        } else {
          // 插入新的
          try {
            const success = this.insertTranslationNested(
              rootObject,
              key,
              value,
              insertPosition,
              referenceKey
            );
            return success
              ? { processed: true, action: "✅ 新增" }
              : { processed: false, skipped: false, error: "新增失败" };
          } catch (error) {
            return {
              processed: false,
              skipped: false,
              error: (error as Error).message
            };
          }
        }

      default:
        return {
          processed: false,
          skipped: false,
          error: `未知操作类型: ${operation}`
        };
    }
  }

  /**
   * 替换现有翻译
   */
  private replaceTranslation(
    keyLocation: KeyLocation,
    key: string,
    newValue: string
  ): boolean {
    if (!keyLocation.found || !keyLocation.property) {
      return false;
    }

    const escapedValue = newValue.replace(/"/g, '\\"');

    try {
      // 直接设置新的值
      keyLocation.property.setInitializer(`"${escapedValue}"`);
      console.log(`✅ 成功替换嵌套键 ${key} 的值`);
      return true;
    } catch (error) {
      console.error(`❌ 替换 ${key} 失败:`, (error as Error).message);
      return false;
    }
  }

  /**
   * 查找根配置对象
   */
  private findRootConfigObject(
    sourceFile: any
  ): ObjectLiteralExpression | null {
    // 尝试找到默认导出
    const exportAssignments = sourceFile.getExportAssignments();
    const defaultExport = exportAssignments.find(
      (exp: any) => !exp.isExportEquals()
    );

    if (defaultExport) {
      const expression = defaultExport.getExpression();
      if (expression.getKind() === SyntaxKind.ObjectLiteralExpression) {
        return expression as ObjectLiteralExpression;
      }
    }

    // 如果没有默认导出，尝试查找变量声明
    const variableDeclarations = sourceFile.getVariableDeclarations();
    for (const decl of variableDeclarations) {
      const initializer = decl.getInitializer();
      if (
        initializer &&
        initializer.getKind() === SyntaxKind.ObjectLiteralExpression
      ) {
        return initializer as ObjectLiteralExpression;
      }
    }

    return null;
  }

  /**
   * 插入翻译 (支持嵌套)
   */
  private insertTranslationNested(
    rootObject: ObjectLiteralExpression,
    key: string,
    value: string,
    position: "first" | "last" | "after" | "before",
    referenceKey?: string
  ): boolean {
    // 如果键包含点号，说明是嵌套键，需要特殊处理
    if (key.includes(".")) {
      return this.insertNestedKey(
        rootObject,
        key,
        value,
        position,
        referenceKey
      );
    }

    if (!referenceKey) {
      // 没有参考键，直接在根对象插入
      this.insertTranslation(rootObject, key, value, position);
      return true;
    }

    const config = this.parseInsertConfig(referenceKey);

    if (config.insertInNested && config.parentPath) {
      // 在嵌套对象内部插入
      return this.insertInNestedObject(
        rootObject,
        config.parentPath,
        key,
        value,
        position
      );
    } else if (config.flatKey) {
      // 平级插入
      this.insertTranslation(rootObject, key, value, position, config.flatKey);
      return true;
    } else if (config.parentPath && config.targetKey) {
      // 嵌套引用插入
      return this.insertAfterNestedReference(
        rootObject,
        config.parentPath,
        config.targetKey,
        key,
        value,
        position
      );
    }

    return false;
  }

  /**
   * 插入嵌套键
   */
  private insertNestedKey(
    rootObject: ObjectLiteralExpression,
    nestedKey: string,
    value: string,
    position: "first" | "last" | "after" | "before",
    referenceKey?: string
  ): boolean {
    const pathParts = this.parseNestedPath(nestedKey);
    const targetKey = pathParts[pathParts.length - 1];
    const parentPath = pathParts.slice(0, -1);

    let currentObject = rootObject;

    // 导航到目标父对象，如果不存在则创建
    for (const pathKey of parentPath) {
      let property = currentObject.getProperty(pathKey);

      if (!property || property.getKind() !== SyntaxKind.PropertyAssignment) {
        // 创建新的嵌套对象
        currentObject.addPropertyAssignment({
          name: pathKey,
          initializer: "{}"
        });
        property = currentObject.getProperty(pathKey);
      }

      const propAssignment = property as PropertyAssignment;
      const initializer = propAssignment.getInitializer();

      if (
        !initializer ||
        initializer.getKind() !== SyntaxKind.ObjectLiteralExpression
      ) {
        console.error(`❌ ${pathKey} 不是对象类型`);
        return false;
      }

      currentObject = initializer as ObjectLiteralExpression;
    }

    // 在目标对象中插入
    this.insertTranslation(currentObject, targetKey, value, position);
    console.log(`📍 已在嵌套路径 ${parentPath.join(".")} 中插入 ${targetKey}`);
    return true;
  }

  /**
   * 在嵌套对象内部插入
   */
  private insertInNestedObject(
    rootObject: ObjectLiteralExpression,
    parentPath: string[],
    key: string,
    value: string,
    position: "first" | "last" | "after" | "before"
  ): boolean {
    let currentObject = rootObject;

    // 导航到目标嵌套对象
    for (const pathKey of parentPath) {
      const property = currentObject.getProperty(pathKey);

      if (!property || property.getKind() !== SyntaxKind.PropertyAssignment) {
        console.error(`❌ 嵌套路径中未找到: ${pathKey}`);
        return false;
      }

      const propAssignment = property as PropertyAssignment;
      const initializer = propAssignment.getInitializer();

      if (
        !initializer ||
        initializer.getKind() !== SyntaxKind.ObjectLiteralExpression
      ) {
        console.error(`❌ ${pathKey} 不是对象类型`);
        return false;
      }

      currentObject = initializer as ObjectLiteralExpression;
    }

    // 在目标对象中插入
    this.insertTranslation(currentObject, key, value, position);
    console.log(`📍 已在嵌套对象 ${parentPath.join(".")} 中插入 ${key}`);
    return true;
  }

  /**
   * 在嵌套引用后插入
   */
  private insertAfterNestedReference(
    rootObject: ObjectLiteralExpression,
    parentPath: string[],
    targetKey: string,
    newKey: string,
    newValue: string,
    position: "first" | "last" | "after" | "before"
  ): boolean {
    if (parentPath.length === 0) {
      // 直接在根对象中查找
      this.insertTranslation(rootObject, newKey, newValue, position, targetKey);
      return true;
    }

    // 在父对象中查找目标并插入
    let currentObject = rootObject;

    // 导航到父对象
    for (const pathKey of parentPath) {
      const property = currentObject.getProperty(pathKey);

      if (!property || property.getKind() !== SyntaxKind.PropertyAssignment) {
        console.error(`❌ 嵌套路径中未找到: ${pathKey}`);
        return false;
      }

      const propAssignment = property as PropertyAssignment;
      const initializer = propAssignment.getInitializer();

      if (
        !initializer ||
        initializer.getKind() !== SyntaxKind.ObjectLiteralExpression
      ) {
        console.error(`❌ ${pathKey} 不是对象类型`);
        return false;
      }

      currentObject = initializer as ObjectLiteralExpression;
    }

    // 在父对象中插入（相对于目标键）
    this.insertTranslation(
      currentObject,
      newKey,
      newValue,
      position,
      targetKey
    );
    console.log(
      `📍 已在 ${parentPath.join(".")}.${targetKey} ${position} 插入 ${newKey}`
    );
    return true;
  }

  /**
   * 基础插入方法
   */
  private insertTranslation(
    objectLiteral: ObjectLiteralExpression,
    key: string,
    value: string,
    position: "first" | "last" | "after" | "before",
    referenceKey?: string
  ) {
    const properties = objectLiteral.getProperties();
    const escapedValue = value.replace(/"/g, '\\"');

    switch (position) {
      case "first":
        objectLiteral.insertPropertyAssignment(0, {
          name: key,
          initializer: `"${escapedValue}"`
        });
        break;

      case "last":
        objectLiteral.addPropertyAssignment({
          name: key,
          initializer: `"${escapedValue}"`
        });
        break;

      case "after":
        if (!referenceKey) {
          objectLiteral.addPropertyAssignment({
            name: key,
            initializer: `"${escapedValue}"`
          });
          return;
        }

        const afterIndex = properties.findIndex(
          (prop) => this.getPropertyName(prop) === referenceKey
        );

        if (afterIndex !== -1) {
          objectLiteral.insertPropertyAssignment(afterIndex + 1, {
            name: key,
            initializer: `"${escapedValue}"`
          });
        } else {
          console.warn(`⚠️  未找到参考键 ${referenceKey}，使用 "last"`);
          objectLiteral.addPropertyAssignment({
            name: key,
            initializer: `"${escapedValue}"`
          });
        }
        break;

      case "before":
        if (!referenceKey) {
          objectLiteral.insertPropertyAssignment(0, {
            name: key,
            initializer: `"${escapedValue}"`
          });
          return;
        }

        const beforeIndex = properties.findIndex(
          (prop) => this.getPropertyName(prop) === referenceKey
        );

        if (beforeIndex !== -1) {
          objectLiteral.insertPropertyAssignment(beforeIndex, {
            name: key,
            initializer: `"${escapedValue}"`
          });
        } else {
          console.warn(`⚠️  未找到参考键 ${referenceKey}，使用 "first"`);
          objectLiteral.insertPropertyAssignment(0, {
            name: key,
            initializer: `"${escapedValue}"`
          });
        }
        break;
    }
  }
}

// 命令行参数解析
function parseArgs() {
  const args = process.argv.slice(2);

  return {
    mode: args[0] || "multiple",
    operation: (args[1] as OperationType) || "insert", // 新增操作类型参数
    insertPosition:
      (args[2] as "first" | "last" | "after" | "before") || "last",
    referenceKey: args[3],
    baseDir: args[4] || "./lang"
  };
}

// 主函数
async function main() {
  console.log("🚀 i18n 嵌套路径批量更新工具 (支持插入/替换)\n");

  const { mode, operation, insertPosition, referenceKey, baseDir } =
    parseArgs();

  console.log("📋 配置信息:");
  console.log(`   模式: ${mode}`);
  console.log(`   操作: ${operation}`);
  console.log(`   位置: ${insertPosition}`);
  console.log(`   参考键: ${referenceKey || "无"}`);
  console.log(`   目录: ${baseDir}\n`);

  const updater = new NestedI18nUpdater();

  try {
    if (mode === "multiple") {
      updater.updateMultipleLanguageFiles(
        baseDir,
        operation,
        insertPosition,
        referenceKey
      );
    } else {
      console.error("❌ 目前只支持 multiple 模式");
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ 执行失败:", (error as Error).message);
    process.exit(1);
  }
}

/*
使用示例:

# 替换现有的嵌套键值对
tsx .\updateI18n.ts multiple replace

# 智能更新（不存在则插入，存在则替换）
tsx .\updateI18n.ts multiple upsert

# 仅插入新的嵌套键值对（如果已存在则跳过）
tsx .\updateI18n.ts multiple insert

现在翻译配置支持嵌套键路径：
- "FileUploadAndRecording.upload.pasteLink": 表示 FileUploadAndRecording.upload.pasteLink 嵌套路径
- "FolderPage.dialog.export.select": 表示 FolderPage.dialog.export.select 嵌套路径
- 脚本会自动导航到正确的嵌套位置进行替换或插入
*/

main();
