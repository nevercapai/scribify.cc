import request from "~/utils/request";
import { type FileItem } from "./type/folder";
// 内容片段（content）
export interface Content {
  cid: string; // 内容 ID
  start_time: string; // 开始时间（毫秒级时间戳字符串）
  stop_time: string; // 结束时间（毫秒级时间戳字符串）
  content: string; // 具体文本内容
  [key: string]: any;
}

// 句子（sentence）
export interface Sentence {
  sid: string; // 句子 ID
  start_time: string; // 句子开始时间
  stop_time: string; // 句子结束时间
  contents: Content[]; // 句子包含的内容片段（可能有多个分段）
  [key: string]: any;
}

// 段落（paragraph）
export interface Paragraph {
  pid: string; // 段落 ID
  speakerId: string; // 说话人 ID
  start_time: string; // 段落开始时间
  stop_time: string; // 段落结束时间
  sentences: Sentence[]; // 段落包含的句子列表
  [key: string]: any;
}

// 最终数据结构（根对象）
export interface ParagraphsData {
  fileMetaInfo: FileBaseInfo;
  paragraphs: Paragraph[]; // 段落列表
}

export interface ParagraphOther {
  pid: string;
  content: string;
  translateContent: string;
}

export interface FileBaseEditQuery {
  lastPlayTime?: string; // 上次播放停留的时间
  lastPlayRate?: number; // 上次播放的播放速度
  lastPlayVolume?: number; // 上次播放的音量
  isShowTimestamp?: boolean; // 是否显示时间戳
  translateLang?: string; // 翻译语言
  isShowVideo?: boolean; // 是否显示视频
  isShowSpeaker?: boolean; // 是否显示视频
}

export interface Speaker {
  id: string | number;
  name: string;
  count: number;
}

export type FileBaseInfo = FileItem & FileBaseEditQuery;

// 转录详情
export const transcriptApi = {
  async getSpeakerList(id: string | number): Promise<Speaker[]> {
    try {
      const res = await request("/transcriptServer/getSpeakerList", {
        method: "POST",
        body: { id }
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (err) {
      throw new Error(err as any);
    }
  },
  // 编辑文件基础设置
  async editFileInfo(body: FileBaseEditQuery) {
    try {
      const res = await request("/transcriptServer/editFileBaseInfo", {
        method: "POST",
        body
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (err) {
      throw new Error(err as any);
    }
  },
  // 获取转录内容
  async getTranscriptInfo(
    fileId: string | number,
    taskId: string | number
  ): Promise<ParagraphsData> {
    try {
      const res = await request("/wapi/fileServer/tran/getTranscribeResult", {
        method: "POST",
        body: { fileId, taskId }
      });
      if (res.code === 0) {
        return res.data;
      }
      return Promise.reject(res);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 获取转录内容(无token)
  async getTranscriptInfoWithoutToken(
    fileId: string | number,
    taskId: string | number,
    userId: string | number
  ): Promise<ParagraphsData> {
    try {
      const res = await request("/wapi/fileServer/tran/getTranscribeResultH5", {
        method: "POST",
        body: { fileId, userId, taskId }
      });
      if (res.code === 0) {
        return res.data;
      }
      return Promise.reject(res);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 编辑转录内容
  async editFileTranscriptInfo(body) {
    try {
      const res = await request("/wapi/fileServer/tran/edit", {
        method: "POST",
        body
      });
      if (res.code === 0) {
        return res.data;
      }
      return Promise.reject(res);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 获取其他语言翻译内容
  async getOtherLangOfTranscript(body: {
    fileId: string | number;
    targetLang: string;
    langName: string;
    originLang: string;
  }): Promise<ParagraphOther[]> {
    try {
      const res = await request("/wapi/fileServer/file/file/translate", {
        method: "POST",
        body
      });
      if (res.code === 0) {
        return res.data?.text || [];
      }
      return Promise.reject(res);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 获取最近使用语言
  async getRecentLangById(body: { id: string | number }): Promise<string[]> {
    try {
      const res = await request("/transcriptServer/getRecentLangById", {
        method: "POST",
        body
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (err) {
      throw new Error(err as any);
    }
  },
  // 保存播放设置
  async saveFileConfig(body: {
    fileId: string | number;
    taskId: string | number;
    options: FileBaseEditQuery;
  }): Promise<string[]> {
    try {
      const res = await request("/wapi/fileServer/tran/save/options", {
        method: "POST",
        body
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (err) {
      throw new Error(err as any);
    }
  },
  // 说话人编辑
  async editSpeaker(body) {
    try {
      const res = await request("/wapi/fileServer/tran/speaker/edit", {
        method: "POST",
        body
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (err) {
      throw new Error(err as any);
    }
  },
  async getRecentLang() {
    try {
      const res = await request("/wapi/fileServer/file/file/translateLang", {
        method: "GET"
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (err) {
      throw new Error(err as any);
    }
  },
  async getTranRecentLang() {
    try {
      const res = await request(
        "/wapi/taskServer/api/v1/transcription/trans/lanauage/get",
        {
          method: "POST"
        }
      );
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (err) {
      throw new Error(err as any);
    }
  }
};
