<script setup lang="ts">
import { onMounted } from "vue";
import Header from "@/components/Header/HeaderIndex.vue";
import { testApi, getBlogList } from "@/api/blog/blogApi.ts";

onMounted(async () => {
  await testApi();
  const res = await getBlogList();
  console.log("getBlogList res: ", res);
});
</script>

<template>
  <Header />
  <div>this is Layout</div>
  <router-view />
</template>

<style lang="scss" scoped></style>
