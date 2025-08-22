export interface Folder {
  id: string;
  folderName: string;
  levelPath: string;
  parentId: string;
}

export interface FileItem {
  id: string;
  userId: number;
  bucketId: string;
  fileName: string;
  parentId: string;
  uploadTime: string;
  fileSize: number;
  fileType: string;
  fileUrl: string;
  deleted: number;
  gmtCreateTime: string;
  gmtUpdateTime: string;
  isPart: number;
  partNum: number | null;
  transcriptionStatus: 0 | 1 | -1;
  progress: number;
  oldId?: string;
  taskId: string;
  duration: number;
  fileId: string;
  folderId: string;
  diarizeEnabled: boolean;
  language: string;
  isDefaultFile?: boolean;
  errorMsg?: string;
}

export interface FolderCreateParams {
  folderName: string;
}

export interface FolderEditParams {
  folderId: string;
  folderName: string;
}

export interface FolderDeleteParams {
  folderId: string;
}

export interface FolderMoveParams {
  folderId: string;
  targetParentId: string;
}

export interface FileListParams {
  pageSize: number;
  pageNo: number;
  parentId: string;
}

export interface FileListResponse {
  total: number;
  pageNo: number;
  pageSize: number;
  list: FileItem[];
}

export interface HttpResponse<T> {
  code: number;
  data: T;
  message: string;
}
