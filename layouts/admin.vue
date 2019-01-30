<template>
  <div id="app-main">
    <!-- header -->
    <div class="header-wrapper">
      <header-view/>
    </div>
    <!-- sidebar -->
    <sidebar-view/>
    <!-- body -->
    <div class="container">
      <nuxt />
    </div>
    <!-- footer -->
    <footer-view/>
  </div>
</template>

<script>
import HeaderView from '~/components/layout/pc/header'
import FooterView from '~/components/layout/pc/footer'
import SidebarView from '~/components/admin/sidebar'

export default {
  name: 'AdminApp',
  components: {
    HeaderView, FooterView,SidebarView
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
      margin-left: $admin-sidebar-width;
      padding: 20px;
    }
    .header-wrapper {
      margin-left: $admin-sidebar-width;
    }
  }
</style>
