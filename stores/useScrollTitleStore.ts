import { defineStore } from "pinia";
import { ref } from "vue";
import { useScrollTitle } from "~/utils/useScrollTitle";

export const useScrollTitleStore = defineStore(
  "useScrollTitleStore",
  () => {
    const oldTitle = ref("");
    const newTitle = ref("All Transcripts - Nevercap");
    const indexNumber = ref(1);
    const setOldTitle = (val: string) => {
      oldTitle.value = val;
    };
    const setNewTitle = async (val: string, index?: number) => {
      newTitle.value = val;
      if (index) {
        if (index >= indexNumber.value) {
          await useScrollTitle(newTitle.value);
          indexNumber.value = index;
        }
        return;
      }
      useScrollTitle(newTitle.value);
      indexNumber.value = 1;
    };

    watch(
      () => newTitle.value,
      (newVal, oldVal) => {
        if (oldVal) {
          oldTitle.value = oldVal;
        }
      }
    );
    return {
      oldTitle,
      newTitle,
      indexNumber,
      setOldTitle,
      setNewTitle
    };
  },
  {
    persist: true
  }
);
