<template>
  <nav class="nav-list z-covers">
    <nuxt-link
      v-for="(nav, index) in navs"
      :key="index"
      :to="nav.path"
      :class="{'nav-active': nav.routerName === $route.name}"
      class="nav-item"
    >
      <svg class="icon icon-font" aria-hidden="true">
        <use :xlink:href="`#icon-${nav.icon}`"/>
      </svg>
      <span>{{ nav.name }}</span>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: "PcNav",
  data() {
    return {
      navs: [
        {
          path: "/",
          routerName: "index",
          icon: 'home',
          name: "首页"
        },
        {
          path: "/tags",
          routerName: "tags",
          icon: 'tags',
          name: "标签"
        },
        {
          path: "/archives",
          routerName: "archives",
          icon: "box",
          name: "归档"
        },
        {
          path: "/open",
          routerName: "open",
          icon: "github",
          name: "开源"
        },
        {
          path: "/about",
          routerName: "about",
          icon: "me1",
          name: "关于我"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.nav-list {
  position: fixed;
  top: 100px;
  left: calc((100% - #{$main-container-width})/2);
  width: $nav-width;
  .nav-item {
    display: block;
    height: 40px;
    padding: 0 10px;
    line-height: 40px;
    font-size: $font-size-nav;
    color: $dark;
    .icon-font {
      margin-right: 10px;
    }
    &.nav-active {
      color: $blue;
      background: rgba($color: #fff, $alpha: 0.5);
    }
    &:hover {
      color: $blue;
    }
  }
}
</style>
