<template>
  <div id="app">
    <PcMainView/>
  </div>
</template>

<script>
  import PcMainView from '~/components/layout/pc/main'
  export default {
    name: 'App',
    components: {
      PcMainView
    }
  }
</script>

<style lang="scss">
  #app {
    color: #000;

    &[v-cloak] {
      color: transparent;
      -webkit-text-fill-color: transparent;
    }
  }
</style>
