<template>
  <svg
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    role="presentation"
    @click="handleClick"
  >
    <title
      :id="iconName"
      lang="en"
    >{{ iconName }}</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
  export default {
    props: {
      iconName: {
        type: String,
        default: 'box'
      },
      width: {
        type: [Number, String],
        default: 18
      },
      height: {
        type: [Number, String],
        default: 18
      },
      iconColor: {
        type: String,
        default: 'currentColor'
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>