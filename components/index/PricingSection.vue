<template>
  <section
    class="price-wrap mx-auto max-w-[80rem] px-[2.5rem] pb-[6rem] pt-[0rem]"
  >
    <h2 class="mb-[2.5rem] text-center text-[2.4rem] font-medium">Pricing</h2>
    <div
      class="flex w-full max-w-[80rem] flex-col items-center justify-center gap-[1rem] md:flex-row md:items-stretch"
    >
      <!-- Free Card -->
      <div
        v-for="item in list1"
        :key="item.id"
        style="
          background: #0e172b;
          box-shadow: 0 0.125rem 1.125rem 0 rgba(60, 115, 240, 0.1);
        "
        class="free-card-box flex h-full min-h-[38rem] w-full max-w-[26rem] flex-1 flex-col items-center rounded-[1rem] border border-[#35205A] px-[1.75rem] pb-[4.75rem] pt-[3rem]"
      >
        <h3 class="mb-[1.75rem] text-[2.375rem] font-bold leading-[3.375rem]">
          {{ item.type }}
        </h3>
        <ul class="mb-[2.4rem] w-full flex-1 text-lg">
          <li
            v-for="term in item.terms"
            :key="term.id"
            class="mb-[1.375rem] flex items-start"
          >
            <span>
              <el-image
                :src="`/assets/images/index/${item.icon}`"
                class="me-[1rem] mt-[0.5rem] h-[0.75rem] w-[1rem]"
                fit="none"
              ></el-image>
            </span>
            <span>
              <b>{{ term.title }}</b>
              <br />
              <span
                v-if="term.des"
                class="mt-[0.5rem] font-normal text-[rgba(255,255,255,0.7)]"
              >
                {{ term.des }}
              </span></span
            >
          </li>
        </ul>
        <div class="mt-auto flex w-full flex-col items-center py-[2.4628rem]">
          <div class="mb-[0.2rem] text-[3.75rem] font-medium">
            {{ item.price[0] }}
            <span class="text-[1rem] font-normal">
              {{ item.price[1] }}
            </span>
          </div>
          <div class="mb-[1.2rem] text-[1rem]">
            {{ item.price[2] }}
          </div>
        </div>
        <div class="relative w-full">
          <index-try-for-free
            class="absolute -bottom-11 w-full border border-[#C085FC] bg-transparent text-[#C085FC]"
          ></index-try-for-free>
        </div>
      </div>
      <!-- Pro Monthly Card -->
      <div
        v-for="item in list2"
        :key="item.id"
        style="
          background: #1b0b30;
          box-shadow: 0 0.125rem 1.25rem 0 rgba(52, 112, 255, 0.2);
        "
        class="border-1 flex h-full min-h-[38rem] w-full max-w-[26rem] flex-1 flex-col items-center rounded-[1rem] border border-[#512680] px-[1.75rem] pb-[4.75rem] pt-[3rem] text-white"
      >
        <h3 class="mb-[1.75rem] text-[2.375rem] font-bold leading-[3.375rem]">
          {{ item.type }}
        </h3>
        <ul class="mb-[2.4rem] w-full flex-1 text-lg">
          <li
            v-for="term in item.terms"
            :key="term.id"
            class="mb-[1.375rem] flex items-start"
          >
            <span>
              <el-image
                :src="`/assets/images/index/${item.icon}`"
                class="me-[1rem] mt-[0.5rem] h-[0.75rem] w-[1rem]"
                fit="none"
              ></el-image>
            </span>
            <span>
              <b> {{ term.title }} </b>
              <br />
              <span
                v-if="term.des"
                class="font-normal text-[rgba(255,255,255,0.7)]"
              >
                {{ term.des }}
              </span></span
            >
          </li>
        </ul>
        <div class="mt-auto flex w-full flex-col items-center">
          <div class="mb-[0.2rem] text-[3.75rem] font-medium">
            {{ item.price[0] }}
            <span class="text-[1rem] font-normal">
              {{ item.price[1] }}
            </span>
          </div>
          <div
            class="mb-[0.3rem] text-[1rem] font-normal"
            :class="item.id === 3 ? 'line-through' : ''"
          >
            {{ item.price[2] }}
          </div>
          <div class="mb-[1.2rem] text-[1rem] font-normal">
            {{ item.price[3] }}
          </div>
        </div>
        <div class="relative w-full">
          <index-try-for-free
            class="absolute -bottom-11 w-full bg-[#9334EB] text-white hover:bg-opacity-90 hover:text-opacity-90"
          ></index-try-for-free>
        </div>
      </div>
      <!-- Pro Annual Card -->
    </div>
  </section>
</template>

<script setup lang="ts">
// 价格卡片组件
let terms1 = [
  {
    id: 11,
    title: "3 Transcripts Daily",
    des: "Transcribe 3 files for free every day."
  },
  {
    id: 12,
    title: "30 Minute Uploads",
    des: "Each file can be up to 30 minutes long. Upload 1 file at a time."
  },
  {
    id: 13,
    title: "Lower Priority",
    des: "Wait longer before your files are transcribed."
  },
  {
    id: 14,
    title: "99% transcription accuracy",
    des: ""
  },
  {
    id: 15,
    title: "100+ languages supported",
    des: ""
  },
  {
    id: 16,
    title: "Speaker identification",
    des: ""
  },
  {
    id: 17,
    title: "Transcript translation",
    des: ""
  }
];
const list1 = ref([
  {
    id: 2,
    icon: "white-hook.svg",
    type: "Free",
    terms: terms1,
    price: ["Free", "100%", ""]
  }
]);
let terms2 = [
  {
    id: 11,
    title: "Unlimited Transcriptions",
    des: "Unlimited transcription frequency and duration."
  },
  {
    id: 12,
    title: "10 Hour Uploads",
    des: "Each file can be up to 10 hours long / 5 GB. Upload 50 files at a time."
  },
  {
    id: 13,
    title: "Highest Priority",
    des: "We'll always transcribe your files ASAP with the highest priority."
  },
  {
    id: 14,
    title: "99% transcription accuracy",
    des: ""
  },
  {
    id: 15,
    title: "100+ languages supported",
    des: ""
  },
  {
    id: 16,
    title: "Speaker identification",
    des: ""
  },
  {
    id: 17,
    title: "Transcript translation",
    des: ""
  }
];
const list2 = ref([
  {
    id: 2,
    icon: "white-hook.svg",
    type: "Pro Monthly",
    terms: terms2,
    price: [
      "$9.99",
      "first month",
      "$17.99 per month afterwards",
      "$215.88 per year"
    ]
  },
  {
    id: 3,
    icon: "white-hook.svg",
    type: "Pro Annual",
    terms: terms2,
    price: ["$8.99", "per month", "$17.99", "$107.88 per year"]
  }
]);
</script>

<style scoped lang="scss">
.price-wrap {
  position: relative;
  &::after {
    position: absolute;
    bottom: 2.5rem;
    left: 0;
    content: " ";
    width: 100%;
    height: 1px;
    background: linear-gradient(
      315deg,
      rgba(0, 0, 0, 1),
      rgba(105, 32, 122, 1),
      rgba(0, 0, 0, 1)
    );
  }
}
</style>
