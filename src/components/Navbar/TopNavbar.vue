<template>
  <div class="navbar">
    <div class="navbar-left">
      <!-- 左側 logo -->
      <img
        class="logo"
        src="/src/assets/blog.png"
        alt="Logo"
      />

      <!-- 導航選單 -->
      <el-menu
        :default-active="activeMenuItem"
        mode="horizontal"
        @select="handleMenuSelect"
      >
        <el-menu-item index="front-end">前端</el-menu-item>
        <el-menu-item index="java">Java</el-menu-item>
        <el-menu-item index="python">Python</el-menu-item>
        <el-menu-item index="mysql">MySQL</el-menu-item>
      </el-menu>

      <!-- 搜索組件 -->
      <el-input
        class="search-input"
        placeholder="搜索"
        v-model="searchQuery"
        @keyup.enter="search"
      />
    </div>

    <div class="navbar-right">
      <!-- 登入連結 -->
      <a
        href="/login"
        class="login-link"
        >登入</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const searchQuery = ref("");
const activeMenuItem = ref("front-end");

const handleMenuSelect = (index: string): string => {
  activeMenuItem.value = index;
};

const search = (): void => {
  // 執行搜索操作，使用 searchQuery 的值
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  color: #fff;
  background-color: #333;
}

.navbar-left {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 20px;
}

.search-input {
  width: 200px;
}

.navbar-right {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.login-link {
  color: #fff;
  text-decoration: none;
}

.el-menu {
  background-color: #333;
  border: none;
}

.el-menu-item {
  color: #fff;
}
</style>
