<template>
  <div class="menu-wrapper">
    <template v-if="!item.children">
      <App-Link :to="item.path">
        <el-menu-item :index="item.path">
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </App-Link>
    </template>

    <el-submenu v-else ref="submenu" :index="item.path">
      <template slot="title">
        <i v-if="item.icon" class="el-icon-location"/>
        <span slot="title">{{ item.name }}</span>
      </template>

      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children && child.children.length > 0"
          :item="child"
          :key="child.path"
        />

        <App-Link v-else :to="child.path" :key="child.name">
          <el-menu-item :index="child.path">
            <span slot="title">{{ child.name }}</span>
          </el-menu-item>
        </App-Link>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import AppLink from "./link";

export default {
  name: "SidebarItem",
  components: {
    AppLink
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>