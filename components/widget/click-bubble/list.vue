<template>
  <ul class="click-bubble">
    <Item
      v-for="(item, index) in list"
      :zindex="index + 1"
      :options="item"
      :key="item.id"
      @end="animationEnd"
    />
  </ul>
</template>

<script>
import Item from "./item";

export default {
  name: "ClickBubble",
  components: { Item },
  data() {
    return {
      id: 0,
      list: [],
      contentIndex: -1,
      content: ['❤']
    }
  },
  mounted() {
    window.addEventListener("click", this.eventHandle)
  },
  beforeDestroy() {
    window.removeEventListener("click", this.eventHandle)
  },
  methods: {
    eventHandle(event) {
      this.contentIndex++
      if (this.contentIndex >= this.content.length) {
        this.contentIndex = 0
      }
      this.list.push({
        id: ++this.id,
        x: event.pageX,
        y: event.pageY,
        text: this.content[this.contentIndex]
      });
    },
    animationEnd(id) {
      const targetIndex = this.list.findIndex((item) => {
        return item.id === id
      })
      if (targetIndex > -1) {
        this.list.splice(targetIndex, 1)
      }
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
