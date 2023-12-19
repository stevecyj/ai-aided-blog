<script setup lang="ts">
import { onMounted } from "vue";
// import Header from "@/components/Header/HeaderIndex.vue";
import TopNavbar from "@/components/Navbar/TopNavbar.vue";
import { testApi, getBlogList } from "@/api/blog/blogApi.ts";

onMounted(async () => {
  await testApi();
  const res = await getBlogList();
  console.log("getBlogList res: ", res);
});
</script>

<template>
  <!-- <Header /> -->
  <TopNavbar />
  <div>this is Layout</div>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <router-view />
</template>

<style lang="scss" scoped></style>
