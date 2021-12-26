<template>
  <!-- 顶部导航 -->
  <nav>顶部导航</nav>
  <!-- 头部组件 -->
  <header>头部组件</header>
  <!-- 内容容器 -->
  <div class="main">
      <!-- 二级路由 -->
      <router-view></router-view>
  </div>
  <!-- 底部footer -->
  <footer>底部footer</footer>
</template>

<script>
export default {
  name: 'Layout'

}
</script>

<style>

</style>
