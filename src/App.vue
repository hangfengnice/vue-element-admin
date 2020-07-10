<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  .box {
    width: 1190px;
    margin: 0 auto;
  }
  .-g {
    padding: 10px;
  }
  .title {
    position: relative;
    padding-left: 14px;
    margin-top: 20px;
    margin-bottom: 14px;
  }
  .title::before {
    color: #333;
    content: '';
    position: absolute;
    left:0;
    height: 10px;
    top: 5px;
    width: 2px;
    background-color: currentColor;
  }
  .warn {
    color: #e6a23c;
  }
  .danger {
    color: #f56c6c;
  }
</style>
