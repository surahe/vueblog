<template>
  <a v-if="isExternalLink(to)" :href="to" target="_blank" rel="noopener noreferrer"><slot/></a>
  <router-link v-else :to="to"><slot/></router-link>
</template>

<script>
import { isExternal } from "~/utils/tools";
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    isExternalLink(routePath) {
      return isExternal(routePath)
    }
  }
};
</script>