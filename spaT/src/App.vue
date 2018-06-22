<template>
  <div id="app">
    <div class="nav-top">
      <!-- 引入各页面的公共头部 header组件 -->
      <v-header></v-header>
    </div>
    <div class="banner">
    </div>
    <div class="contianer">
    <!-- 路由中的几个组件在这里渲染，默认渲染第一个组件，即home组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from "./components/header.vue";
export default {
  components:{
    "v-header":header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
