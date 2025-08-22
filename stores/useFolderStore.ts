import type { Folder } from "~/api/type/folder";

export const useFolderStore = defineStore(
  "folder",
  () => {
    const selectedFolder = ref<Folder | Record<any, any>>({});

    const updateFolder = (folder: Folder | Record<any, any>) => {
      selectedFolder.value = folder;
    };

    return {
      selectedFolder: selectedFolder,
      updateFolder
    };
  },
  {
    persist: true
  }
);

export const useFolderListStore = defineStore("folderList", () => {
  const folderList = ref<Folder[]>([]);
  const setFolderList = (list: Folder[]) => {
    folderList.value = list;
  };

  const isJumpFromHome = ref(false);

  return {
    folderList,
    isJumpFromHome,
    setFolderList
  };
});
