<template>
  <li
    :style="styles"
    :class="{playing: isPlaying}"
    class="click-bubble-item"
  >{{ options.text }}</li>
</template>

<script>
import {randomNum} from '~/utils/tools'

export default {
  name: 'ClickBubbleItem',
  props: {
    options: {
      type: Object,
      required: true
    },
    zindex: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      delay: 1000,
      timmer: null,
      isPlaying: false
    }
  },
  computed: {
    styles() {
      return {
        top: this.options.y + 'px',
        left: this.options.x + 'px',
        color: this.getRedColor(),
        'z-index': 99999 + this.zindex,
      }
    }
  },
  mounted () {
    this.playing()
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  },
  methods: {
    playing () {
      this.isPlaying = true 

      this.timer = setTimeout(() => {
        this.isPlaying = false
        this.$nextTick(() => {
          this.$emit('end', this.options.id)
        })
      }, this.delay)
    },
    getRedColor () {
      let hue = randomNum(-30, 30)
      let saturation = randomNum(50, 100)
      let lightness = randomNum(50, 100)
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`
    }
  }
}
</script>

<style lang="scss" scoped>
.click-bubble-item {
  position: absolute;
  font-size: 18px;
  cursor: default;

  @keyframes playing {
    0% { transform: translate3d(-50%, -50%, 0); opacity: 1; }
    100% { transform: translate3d(-50%, -500%, 0); opacity: 0; }
  }

  &.playing {
    animation: playing 1s ease 0s forwards;
  }
  &::selection {
    background: transparent;
  }
}
</style>
