import type { Folder } from "~/api/type/folder";
import type { UploadFile } from "~/components/upload/useUpload";

export const useGuestUploadStore = defineStore(
  "guestUpload",
  () => {
    const tableData = ref<UploadFile[]>([]);
    const diarizeEnabled = ref(true);
    const lang = ref<any>({});

    const clear = () => {
      tableData.value = [];
      lang.value = {};
      diarizeEnabled.value = true;
    };

    return {
      tableData,
      diarizeEnabled,
      lang,
      clear
    };
  },
);
