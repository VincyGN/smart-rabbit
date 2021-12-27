<template>
  <!-- 顶部导航 -->
  <app-nav-bar></app-nav-bar>
  <!-- 头部组件 -->
  <app-header></app-header>
  <!-- 内容容器 -->
  <div class="main">
      <!-- 二级路由 -->
      <router-view></router-view>
  </div>
  <!-- 底部footer -->
  <footer>底部footer</footer>
</template>

<script>
import AppNavBar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
export default {
  name: 'Layout',
  components: { AppNavBar, AppHeader }

}
</script>

<style lang='less' scoped>

</style>
