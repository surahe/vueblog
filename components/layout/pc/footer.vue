<template>
  <footer class="footer">
    <p>Designed & Powerd by SuraHe </p>
    <p>Copyright© 2018-2019</p>
    <p><a href="http://www.miibeian.gov.cn/" target="_blank">粤ICP备18117560号-1</a></p>
  </footer>
</template>

<script>
  export default {
    name: 'PcFooter'
  }
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 30px;
  padding: 10px 0;
  text-align: center;
  box-shadow: 0 -1px 3px rgba(26, 26, 26, 0.1);
  color: $gray;
  a {
    color: $blue;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
