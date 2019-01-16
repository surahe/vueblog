<template>
  <div id="app-main">
    <!-- header -->
    <header-view/>
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

export default {
  name: 'AdminApp',
  components: {
    HeaderView, FooterView
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
      width: 1000px;
      margin: 0 auto;
    }
  }
</style>
