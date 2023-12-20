<script setup lang="ts"></script>

<template>
  <div class="navbar">
    <div class="navbar-left">
      <!-- 左側 logo -->
      <img
        class="logo"
        src="/src/assets/blog.png"
        alt="Logo"
      />
    </div>
    <div class="navbar-right">
      <!-- 登入連結 -->
      <RouterLink
        to="/login"
        class="login-link"
        >登入</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  color: #fff;
  background-color: #333;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 20px;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.login-link {
  color: #fff;
  text-decoration: none;
}
</style>
