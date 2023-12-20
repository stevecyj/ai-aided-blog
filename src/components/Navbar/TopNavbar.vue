<script setup lang="ts"></script>

<template>
  <div class="navbar">
    <div class="navbar-left">
      <!-- 左側 logo -->
      <div class="logo">
        <RouterLink to="/"><h1>TechBlog</h1></RouterLink>
      </div>
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
  background-color: #f0f0f0;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 20px;

  a {
    text-decoration: none;
  }
}

.navbar-right {
  display: flex;
  align-items: center;
}

.login-link {
  text-decoration: none;
}
</style>
