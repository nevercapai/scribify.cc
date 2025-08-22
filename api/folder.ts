import request from "~/utils/request";
import type {
  FileListParams,
  FileListResponse,
  Folder,
  FolderCreateParams,
  FolderDeleteParams,
  FolderEditParams,
  FolderMoveParams,
  HttpResponse
} from "~/api/type/folder";

export const useFolderApi = {
  // 创建文件夹
  async createFolder(data: FolderCreateParams): Promise<boolean> {
    try {
      const res = await request<HttpResponse<Folder>>(
        "/wapi/fileServer/file/folder/create",
        {
          method: "POST",
          body: data
        }
      );
      if (res.code === 0) {
        return true;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 编辑文件夹名
  async editFolder(data: FolderEditParams): Promise<boolean> {
    try {
      const res = await request<HttpResponse<boolean>>(
        "/wapi/fileServer/file/folder/create",
        {
          method: "POST",
          body: data
        }
      );
      if (res.code === 0) {
        return true;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 删除文件夹
  async deleteFolder(data: FolderDeleteParams): Promise<boolean> {
    try {
      const res = await request<HttpResponse<boolean>>(
        "/wapi/fileServer/file/folder/del",
        {
          method: "POST",
          body: data
        }
      );
      if (res.code === 0) {
        return true;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 获取文件夹列表
  async getFolderList(): Promise<Folder[]> {
    try {
      const res = await request<HttpResponse<Folder[]>>(
        "/wapi/fileServer/file/folder/list",
        {
          method: "POST",
          body: {}
        }
      );
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 移动文件夹
  async moveFolder(data: FolderMoveParams): Promise<boolean> {
    try {
      const res = await request<HttpResponse<boolean>>(
        "/wapi/fileServer/file/folder/move",
        {
          method: "POST",
          body: data
        }
      );
      if (res.code === 0) {
        return true;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 获取文件列表
  async getFileList(
    data: FileListParams,
    controller: any
  ): Promise<FileListResponse> {
    try {
      const res = await request<HttpResponse<FileListResponse>>(
        "/wapi/fileServer/file/file/list",
        {
          method: "POST",
          body: data,
          signal: controller.signal
        }
      );
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 文件删除
  async deleteFile(data: { taskIds: string[] }): Promise<any> {
    try {
      const res = await request<HttpResponse<boolean>>(
        "/wapi/taskServer/api/v1/transcription/task/del",
        {
          method: "POST",
          body: data
        }
      );
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 文件重命名
  async renameFile(data: {
    id: string;
    fileName: string;
    taskId: string;
  }): Promise<any> {
    try {
      const res = await request<any>("/wapi/fileServer/file/file/rename", {
        method: "POST",
        body: data
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 文件移动
  async moveFile(data: {
    ids: number[];
    targetParentId: number;
  }): Promise<any> {
    try {
      const res = await request<any>("/wapi/fileServer/file/file/move", {
        method: "POST",
        body: data
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 文件转录
  async transcribeFile(body: any) {
    try {
      const res = await request<any>(
        "/wapi/taskServer/api/v1/transcription/tasks",
        {
          method: "POST",
          body
        }
      );
      if (res.code === 0) {
        return res.data;
      }
      throw res;
    } catch (e) {
      throw e;
    }
  },

  // cos预签名
  async getCosPreSignedUrl() {
    try {
      const res = await request<any>("/wapi/fileServer/file/presigned/url", {
        method: "POST"
      });
      if (res.code === 0) {
        return res.data;
      }
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 保存文件信息
  async saveFileInfo(body: any) {
    try {
      const res = await request<any>("/wapi/fileServer/file/meta-info", {
        method: "POST",
        body: body
      });
      if (res.code === 0) {
        return res.data;
      }
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 任务状态查询
  async queryTaskStatus(taskIds: string[], controller: any) {
    try {
      const res = await request<
        HttpResponse<
          {
            progress: number;
            taskId: string;
            duration: number;
            status:
              | "PENDING"
              | "QUEUED"
              | "PROCESSING"
              | "PAUSED"
              | "CANCELLED"
              | "FAILED_RETRYABLE"
              | "FAILED_PERMANENT"
              | "COMPLETED";
          }[]
        >
      >("/wapi/taskServer/api/v1/transcription/task/status", {
        method: "POST",
        body: {
          taskIds
        },
        signal: controller.signal
      });
      if (res.code === 0) {
        return res.data;
      }
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 链接创建文件
  async createFileByLink(body: any) {
    try {
      const res = await request<any>("/wapi/fileServer/file/file/uploadUrl", {
        method: "POST",
        body
      });
      if (res.code === 0) {
        return res.data;
      }
      throw res;
    } catch (e) {
      throw e;
    }
  },

  // 链接获取文件上传状态
  async getFileUploadStatus(body: any) {
    try {
      const res = await request<any>(
        "/wapi/fileServer/file/file/uploadUrlStatus",
        {
          method: "POST",
          body
        }
      );
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 同步导出
  async syncExport(body: {
    fileType: string;
    taskId: string;
    haveSpeaker: number;
    haveTimestamp: number;
  }) {
    try {
      const res = await request<any>("/wapi/fileServer/tran/export", {
        method: "POST",
        body
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 异步导出
  async asyncExport(body: any) {
    try {
      const res = await request<any>("/wapi/fileServer/tran/batch/export", {
        method: "POST",
        body
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 异步导出状态
  async asyncExportStatus(body: { exportTaskIdList: string[] }) {
    try {
      const res = await request<
        HttpResponse<
          {
            targetUrl: string;
            id: string;
            status: string;
          }[]
        >
      >("/wapi/fileServer/tran/export/status", {
        method: "POST",
        body
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 异步导出状态不要token
  async asyncExportStatusWithOutToken(body: {
    exportTaskIdList: string[];
    userId: string;
  }) {
    try {
      const res = await request<
        HttpResponse<
          {
            targetUrl: string;
            id: string;
            status: string;
          }[]
        >
      >("/wapi/fileServer/tran/export/statush5", {
        method: "POST",
        body
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 不鉴权的异步导出
  async asyncExportWithoutToken(body: any) {
    try {
      const res = await request<any>("/wapi/fileServer/tran/batch/exporth5", {
        method: "POST",
        body
      });

      if (res.code === 0) {
        return res.data;
      }
    } catch (e) {
      throw new Error(e as any);
    }
  }
};
