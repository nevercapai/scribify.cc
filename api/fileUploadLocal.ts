import request from "~/utils/request";
// 后端接口文档 https://tanmarket.feishu.cn/docx/EQOfdyQtfoqhWyxWxdCciMF2nkT
interface uploadInitBody {
  fileName: string;
  fileSize: number; // 10737418240： 10GB 文件大小
  fileExtName: string; // 后缀
  partNum: number; // 分片数
  parentId: number;
}
interface partsUploadBody {
  id: number;  // 数据库id
  uploadId: string; // 分片上传唯一id
  partNumber: number; // 当前分片数
  fileKey: string; // cos文件唯一id  初始化接口传过来的
  file: any;
}
interface partsQueryBody {
  fileKey: string; // 分片初始化的返回值
  uploadId: string; // 分片初始化的返回值
}
interface PartETag {
  partNumber: string | number;  // 分片num  第几分片
  eTag: string;                 // cos标识
  size: string | number;
}

interface partsMergeBody {
  id: number;
  fileKey: string;
  uploadId: string;
  partETags: PartETag[];
}

interface uploadCancelBody {
  fileKey: string; // 分片初始化的返回值
  uploadId: string; // 分片初始化的返回值
}
// 大文件上传-分片上传
export const fileUploadApi = {
  // 初始化上传POST
  async uploadInit(data: uploadInitBody) {
    try {
      const res = await request<any>("/wapi/fileServer/file/shard/init", {
        method: "POST",
        body: data
      });
      if (res.code === 0) {
        return res.data;
      }
    } catch (e) {
      throw new Error(JSON.stringify(e as any));
    }
  },

  // 分片上传接口POST
  async partsUpload(data: partsUploadBody) {
    try {
      // 创建 FormData 对象
      const formData = new FormData();

      // 将数据添加到 FormData
      formData.append('id', data.id.toString());
      formData.append('uploadId', data.uploadId);
      formData.append('partNumber', data.partNumber.toString());
      formData.append('fileKey', data.fileKey);
      formData.append('file', data.file);

      const res = await request<any>("/wapi/fileServer/file/shard/part", {
        method: "POST",
        body: formData
      });
      if (res.code === 0) {
        return res.data;
      }
    } catch (e) {
      throw new Error(JSON.stringify(e as any));
    }
  },

  // 查询分片列表GET
  async partsQuery(data: partsQueryBody) {
    try {
      const res = await request<any>("/wapi/fileServer/file/parts/list", {
        method: "POST",
        body: data
      });
      if (res.code === 0) {
        return res.data;
      }
    } catch (e) {
      throw new Error(JSON.stringify(e as any));
    }
  },

  // 请求合并POST
  async partsMerge(data: partsMergeBody) {
    try {
      const res = await request<any>("/wapi/fileServer/file/parts/complete", {
        method: "POST",
        body: data
      });
      if (res.code === 0) {
        return res.data;
      }
    } catch (e) {
      throw new Error(JSON.stringify(e as any));
    }
  },

  // 取消分片上传
  async uploadCancel(data: uploadCancelBody) {
    try {
      const res = await request<any>("/wapi/fileServer/file/parts/abort", {
        method: "POST",
        body: data
      });
      if (res.code === 0) {
        return res.data;
      }
    } catch (e) {
      throw new Error(JSON.stringify(e as any));
    }
  },
};
