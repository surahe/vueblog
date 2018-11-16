<template>
  <div class="root">
    <!-- header -->
    <header class="header">
      <div class="header-inner">
        <a class="header-logo" href="/">VueBlog</a>
        <ul class="header-nav">
          <li class="header-nav-item nav-search">
            <form class="search-bar">
              <el-input v-model="searchValue" maxlength="30" placeholder="请输入内容" />
              <button aria-label="搜索" type="button" class="search-bar-icon">
                <icon-base :icon-color="'#8590a6'" :icon-name="'搜索'"><icon-search /></icon-base>
              </button>
            </form>
          </li>
          <li class="header-nav-item">
            <!-- admin navs -->
            <nav v-if="/^(admin)/.test($route.name)" class="nav-list">
              <nuxt-link
                v-for="(nav, index) in adminNavs" :key="index"
                :to="nav.path"
                :class="{'nav-active': nav.routerName === $route.name}" class="nav-item"
              >{{ nav.name }}</nuxt-link>
              <a class="nav-item">退出</a>
            </nav>
            <!-- front navs -->
            <nav v-else class="nav-list">
              <nuxt-link
                v-for="(nav, index) in navs" :key="index"
                :to="nav.path"
                :class="{'nav-active': nav.routerName === $route.name}" class="nav-item"
              >{{ nav.name }}</nuxt-link>
            </nav>
          </li>
        </ul>
      </div>
    </header>
    <!-- body -->
    <div class="container">
      <nuxt />
    </div>
    <!-- footer -->
    <footer class="footer">
      <p>Designed & Powerd by SuraHe </p>
      <p>Copyright© 2018-2019</p>
      <p><a href="http://www.miibeian.gov.cn/" target="_blank">粤ICP备18117560号-1</a></p>
    </footer>
  </div>
</template>

<script>
  import IconSearch from '~/assets/svg/search.vue'
  export default {
    components: {
      IconSearch
    },
    data () {
      return {
        searchValue: '',
        navs: [{
            path: '/',
            routerName: 'index',
            name: '首页'
          },
          {
            path: '/tags',
            routerName: 'tags-id',
            name: '标签'
          },
          {
            path: '/archives',
            routerName: 'archives',
            name: '归档'
          }
        ],

        adminNavs: [
          {
            path: '/admin/private',
            routerName: 'admin-private',
            name: '草稿'
          },
          {
            path: '/admin/comment',
            routerName: 'admin-comment',
            name: '评论'
          },
          {
            path: '/admin/tags',
            routerName: 'admin-tags',
            name: '标签'
          },
          {
            path: '/admin/update',
            routerName: 'admin-update',
            name: '设置'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
@import '../assets/css/normalize.css';
@import '~/assets/css/variable.scss';

body, html, #__nuxt, #__layout {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
  font-size: 12px;
  color: $dark;
  background: #f6f6f6;
  word-break: break-word;
  -webkit-tap-highlight-color: rgba(26, 26, 26, 0);
  text-rendering: optimizeLegibility;
}

.root {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.header {
  position: relative;
  padding: 0 15px;
  min-width: 1000px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.header-inner {
  display: flex;
  width: 1000px;
  height: 60px;
  margin: auto;
  align-items: center;
}
.header-logo {

}

.header-nav {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  .search-bar {
    position: relative;
    display: flex;
    width: 300px;
    font-size: 0;
  }
  .search-bar-icon {
    position: absolute;
    padding: 11px 10px;
    top: 0px;
    right: 0px;
  }
  .header-nav-item {
    display: flex;
    align-items: center;
  }
  .nav-list {
    display: flex;
    .nav-item {
      padding: 0 20px;
      font-size: 16px;
      line-height: 40px;
      color: $gray;
      &:hover, &:active {
        color: $blue;
      }
      &.nav-active {
        color: $blue;
      }
    }
  }
}

.container {
  flex: 1;
  margin: 0 auto;
  width: 1000px;
}

.footer {
  padding: 10px 0;
  text-align: center;
  box-shadow: 0 -1px 3px rgba(26, 26, 26, 0.1);
  color: $gray;
  a {
    color: #34538b;
    &:hover {
      text-decoration: underline;
    }
  }
}

@media screen and(max-width: 768px) {
  .header {
    min-width: auto;
    .header-inner {
      width: auto;
    }
    .nav-search {
      display: none;
    }
  }
}
</style>
