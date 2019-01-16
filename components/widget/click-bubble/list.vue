<template>
  <ul class="click-bubble">
    <Item v-for="(item, index) in list" :options="item" :key="index"/>
  </ul>
</template>

<script>
// https://github.com/djzhao627/JSClickBubble/blob/master/JSClickBubble.user.js
import Item from "./item";

export default {
  name: "ClickBubble",
  components: { Item },
  data() {
    return {
      list: [],
      content: [1, 2, 3, 4, 5]
    };
  },
  mounted() {
    window.addEventListener("click", this.eventHandle);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.eventHandle);
  },
  methods: {
    eventHandle(event) {
      this.list.push({
        x: event.pageX,
        y: event.pageY,
        text: this.content[0]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.click-bubble {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
