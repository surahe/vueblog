<template>
  <header class="header">
    <div class="header-inner">
      <a class="header-logo" href="/">VueBlog</a>
    </div>
  </header>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 0 15px;
  min-width: $header-width;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.header-inner {
  display: flex;
  width: $header-width;
  height: 60px;
  margin: auto;
  align-items: center;
}
</style>
