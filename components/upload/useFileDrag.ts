interface FileUploadOptions {
  selector: string; // 目标元素选择器
  onSuccess?: (files: File[]) => void; // 成功回调
  onError?: (error: string) => void; // 错误回调
}

export const useFileDragUpload = (options: FileUploadOptions) => {
  const { selector } = options;

  const fileInputRef = ref<HTMLInputElement | null>(null);

  // 处理文件
  const { updateSelectRawFiles } = useUploadStore();
  const { showResultDialog } = storeToRefs(useUploadStore());
  const processFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;

    const files = Array.from(fileList);

    if (files.length) {
      files.forEach((file) => {
        updateSelectRawFiles(file);
      });
      showResultDialog.value = true;
    }
  };

  // 处理文件输入变化
  const handleFileInputChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    processFiles(input.files);
    // 重置输入，这样可以重复选择相同的文件
    input.value = "";
  };

  onMounted(() => {
    // 创建隐藏的文件输入
    const input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";
    input.multiple = true;

    input.addEventListener("change", handleFileInputChange);
    document.body.appendChild(input);
    fileInputRef.value = input;

    // 设置拖放处理
    const element = document.querySelector(selector);
    if (!element) return;

    const preventDefault = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const onDragEnter = (e: DragEvent) => {
      preventDefault(e);
    };

    const onDragOver = (e: DragEvent) => {
      preventDefault(e);
    };

    const onDragLeave = (e: DragEvent) => {
      preventDefault(e);
    };

    const onDrop = (e: DragEvent) => {
      preventDefault(e);
      processFiles(e.dataTransfer?.files || null);
    };

    element.addEventListener("dragenter", onDragEnter);
    element.addEventListener("dragover", onDragOver);
    element.addEventListener("dragleave", onDragLeave);
    element.addEventListener("drop", onDrop);

    // 清理函数
    onUnmounted(() => {
      element.addEventListener("dragenter", onDragEnter);
      element.addEventListener("dragover", onDragOver);
      element.addEventListener("dragleave", onDragLeave);
      element.removeEventListener("drop", onDrop);

      document.body.removeChild(fileInputRef.value as HTMLInputElement);
      fileInputRef.value = null;
    });
  });

  return {};
};
