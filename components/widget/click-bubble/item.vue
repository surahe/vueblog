<template>
  <li
    :style="styles"
    class="click-bubble-item"
  >{{ options.text }}</li>
</template>

<script>
export default {
  name: 'ClickBubbleItem',
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  computed: {
    styles() {
      return {
        top: this.options.y + 'px',
        left: this.options.x + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.click-bubble-item {
  position: absolute;
  cursor: default;
}
</style>
