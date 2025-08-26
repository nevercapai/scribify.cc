<template>
  <div>
    <div class="lang-title mb-2 text-lg font-medium">
      {{ title ? title : t("FileUploadAndRecording.upload.language") }}
    </div>

    <el-popover
      trigger="click"
      :show-arrow="false"
      :popper-style="{
        width: 'auto',
        maxWidth: '33rem',
        padding: '0',
        ...popperStyle
      }"
      placement="bottom-start"
      ref="popoverRef"
      @show="show = true"
      @hide="show = false"
    >
      <template #reference>
        <el-input
          class="customer-input"
          readonly
          :model-value="
            value.name ? t('TranscriptionPage.langChooseV1.' + value.name) : ''
          "
        >
          <template #suffix>
            <div
              class="transition-all delay-75"
              :class="{ 'rotate-180': !show }"
            >
              <el-icon><ArrowUp /></el-icon>
            </div>
          </template>
        </el-input>
      </template>
      <lang-choose-v1
        v-if="isMounted"
        ref="langChooseV1Ref"
        :modelValue="value.id"
        :recentLanguageKeys="recentLanguageKeys"
        :only-trans-code="true"
        :cancel="false"
        :isScroll="false"
        :customerClass="`!max-h-[40vh] !w-[15rem] lang-choose-input-20250711 ${customerClass}`"
        @choose="handleChoose"
      />
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ArrowUp } from "@element-plus/icons-vue";
import {
  languageData,
  languageTransMap
} from "~/components/langChoose/langFlag";
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie";

const { t } = useI18n();

const show = ref(false);

const props = defineProps({
  lang: {
    type: Object,
    default: () => ({})
  },
  popperStyle: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    default: ""
  },
  customerClass: {
    type: String,
    default: ""
  }
});

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

watchEffect(() => {
  if (process.client) {
    // if (show.value) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "auto";
    // }
  }
});

const emit = defineEmits(["choose", "update:lang"]);

const popoverRef = useTemplateRef("popoverRef");

const internalValue = ref({});
const value = computed({
  get: () => {
    // 先检查 props.lang 是否有值
    if (props.lang && Object.keys(props.lang).length > 0) {
      return props.lang;
    }
    // 如果没有，返回内部默认值
    return internalValue.value;
  },
  set: (newValue) => {
    internalValue.value = newValue;
    emit("update:lang", newValue);
  }
});

const handleChoose = (val: any) => {
  value.value = {
    ...val,
    lang: val.name
  };
  popoverRef.value?.hide();
  emit("choose", value.value);
};

const recentLanguageKeys = ref([]);
const langChooseV1Ref = useTemplateRef("langChooseV1Ref");

const getLocalRecent = async () => {
  await nextTick();
  if (!langChooseV1Ref.value) {
    setTimeout(() => {
      getLocalRecent();
    }, 500);
    return;
  }

  const obj = (langChooseV1Ref.value!.popularLanguages[0] || {}) as any;
  value.value = {
    ...obj,
    lang: obj.name
  };
};

const getRecentLang = async () => {
  try {
    const token = useCrossDomainCookie("token");
    if (token.value) {
      const { transcriptApi } = await import("~/api/transcript");
      const res = await transcriptApi.getTranRecentLang();
      recentLanguageKeys.value = res
        .map((item: any) => {
          const [lang, name] = item.split("#");
          return name !== "null" ? name : (languageTransMap as any)?.[lang];
        })
        .filter(Boolean);
    }

    const select = languageData.find(
      (item) => item.lang === recentLanguageKeys.value?.[0]
    );

    if (props.lang?.id) {
      value.value = {
        ...props.lang,
      }
      return;
    }

    if (select) {
      value.value = {
        name: select.lang,
        id: select.lang,
        ...select
      };
    } else {
      if (props.lang?.id) {
        value.value = {
          ...props.lang,
        }
        return;
      }

      getLocalRecent();
    }
  } catch (e) {
    getLocalRecent();
  }
};

getRecentLang();
</script>

<style scoped>
:deep(.customer-input) {
  @apply h-[2.125rem] w-60 rounded-lg border-borderColor;
}
</style>
<style>
.lang-choose-input-20250711 .lang-item-wrap {
  @apply !grid-cols-1;
}
</style>
