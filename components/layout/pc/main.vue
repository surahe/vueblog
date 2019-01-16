<template>
  <div id="app-main">
    <!-- header -->
    <header-view/>
    <!-- body -->
    <div class="container">
      <nav-view/>
      <div class="main-content">
        <nuxt />
      </div>
      <aside-view/>
    </div>
    <!-- footer -->
    <footer-view/>
  </div>
</template>

<script>
import HeaderView from './header'
import FooterView from './footer'
import NavView from './nav'
import AsideView from './aside/main'

export default {
  name: 'PcMain',
  components: {
    HeaderView, FooterView, NavView, AsideView // 布局
  }
}
</script>

<style lang="scss" scoped>
  #app-main {
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    .container {
      flex: 1;
      width: $main-container-width;
      margin: 0 auto;
    }
    .main-content {
      width: $main-content-width;
      margin-left: 200px;
      float: left;
    }
  }
</style>
