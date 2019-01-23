<template>
  <div class="sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <Menu-item
          v-for="route in list"
          :key="route.path"
          :item="route"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: $admin-sidebar-width;
    z-index: 5;
    background: red;
    .el-scrollbar {
      height: 100%;
    }
    /deep/ .scrollbar-wrapper {
      overflow-x: hidden!important;
      .el-scrollbar__view {
        height: 100%;
      }
      .el-menu {
        border: none;
        height: 100%;
        width: 100% !important;
      }
    }
  }
</style>

<script>
import MenuItem from './item'
import {MENU_CONFIG} from './menu.js'

export default {
  components: {
    MenuItem
  },
  data () {
    return {
      list: MENU_CONFIG
    }
  }
}
</script>