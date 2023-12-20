<script setup lang="ts">
import { onMounted } from "vue";
import TopNavbar from "@/components/Navbar/TopNavbar.vue";
import { testApi, getBlogList } from "@/api/blog/blogApi.ts";

onMounted(async () => {
  await testApi();
  const res = await getBlogList();
  console.log("getBlogList res: ", res);
});
</script>

<template>
  <div class="app">
    <!-- 頂部導航欄 -->
    <top-navbar />

    <!-- 主體部分 -->
    <div class="main">
      <div class="container">
        Main
        <!-- 路由視圖 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.main {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f0f0f0;
}

.container {
  width: 1000px;
  padding: 20px;
  background-color: #fff;
}
</style>
