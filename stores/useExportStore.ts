export const useExportStore = defineStore("export", () => {
  const exportTaskIds = ref<Record<string, any>>({});

  const addExportTask = (task: Record<string, any>) => {
    exportTaskIds.value = {
      ...exportTaskIds.value,
      ...task
    };
  };

  const clearExportTask = () => {
    exportTaskIds.value = {};
  };

  const removeExportTask = (taskId: string) => {
    delete exportTaskIds.value[taskId];
  };

  return {
    exportTaskIds,
    addExportTask,
    clearExportTask,
    removeExportTask
  };
});
