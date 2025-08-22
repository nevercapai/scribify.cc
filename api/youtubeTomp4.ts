import request from "~/utils/request";

export const downloadFileApi = {
  // 链接创建文件
  async createFileByLink(body: any) {
    try {
      const res = await request<any>("/wapi/fileServer/file/file/uploadUrlOpen", {
        method: "POST",
        headers: {
          'X-Language': 'en-US'
        },
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

  // 链接获取文件上传状态
  async getFileUploadStatus(body: any) {
    try {
      const res = await request<any>(
        "/wapi/fileServer/file/file/uploadUrlStatusOpen",
        {
          method: "POST",
          headers: {
            'X-Language': 'en-US'
          },
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
};
