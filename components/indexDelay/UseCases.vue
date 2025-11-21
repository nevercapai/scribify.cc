<template>
  <section class="use-cases">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          {{ $i("UseCases.built_for") }}
          <span class="gradient-text">
            {{ $i("UseCases.heavy_users") }}
          </span>
        </h2>
        <p class="section-subtitle">
          {{ $i("UseCases.join_users") }}
        </p>
      </div>
      <div class="use-cases-grid">
        <template v-for="(item, index) in UseCaselist" :key="index">
          <router-link :to="$localePath(item.url)" class="use-case-card underline">
            <div class="use-case-icon flex items-center justify-center">
              <NuxtImg
                :src="`/assets/img/index/case/${item.moude}.svg`"
                class="h-[3.5rem] w-[3.5rem]"
                fit="contain"
                :alt="item.tilte"
                loading="lazy"
              ></NuxtImg>
            </div>
            <h3 class="use-case-title">
              {{ item.tilte }}
            </h3>
            <p class="use-case-description">
              {{ item.des }}
            </p>
          </router-link>
        </template>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useI18nModule } from "~/utils/i18n";
const $i = useI18nModule("Index");
const { t } = useI18n();
let UseCaselist = ref([
  {
    id: 1,
    moude: "podcasters",
    tilte: t("Index.UseCases.podcasters.title"),
    des: t("Index.UseCases.podcasters.des"),
    url: "/use-cases/podcasters"
  },
  {
    id: 4,
    moude: "content_creators",
    tilte: t("Index.UseCases.content_creators.title"),
    des: t("Index.UseCases.content_creators.des"),
    url: "/use-cases/content-creators"
  },
  {
    id: 2,
    moude: "journalists",
    tilte: t("Index.UseCases.journalists.title"),
    des: t("Index.UseCases.journalists.des"),
    url: "/use-cases/journalists"
  },
  {
    id: 3,
    moude: "researchers",
    tilte: t("Index.UseCases.researchers.title"),
    des: t("Index.UseCases.researchers.des"),
    url: "/use-cases/researchers"
  },
  {
    id: 5,
    moude: "business_teams",
    tilte: t("Index.UseCases.business_teams.title"),
    des: t("Index.UseCases.business_teams.des"),
    url: "/use-cases/business-teams"
  },
  {
    id: 6,
    moude: "educators",
    tilte: t("Index.UseCases.educators.title"),
    des: t("Index.UseCases.educators.des"),
    url: "/use-cases/educators"
  }
]);
</script>
<style lang="scss" scoped>
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 14px;
}

.section-subtitle {
  font-size: 18px;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}
/* Use Cases */
.use-cases {
  padding-bottom: 70px;
  background: var(--light-gray);
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
}

.use-case-card {
  background: #ffffff;
  border: 1px solid var(--line-color);
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  // transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;
}

.use-case-card1:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
}

.use-case-icon {
  margin-bottom: 10px;
}

.use-case-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 18px;
}

.use-case-description {
  color: var(--gray);
  font-size: 18px;
  line-height: 24px;
}
</style>
