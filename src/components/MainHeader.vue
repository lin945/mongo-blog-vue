<template>
  <header>
    <div class="head-title">
      <h4>title</h4>
    </div>
    <nav class="head-menu">
      <a href="https://www.bilibili.asia/">首页</a>
      <a href="">关于</a>
      <a href="https://www.bilibili.asia/index.php/3.html">友链</a>
      <a href="https://www.bilibili.asia/admin/" target="_blank">进入后台</a>
    </nav>
    <div class="head-box">
      <div class="head-box-btn1"></div>
      <div class="head-box-btn2" id="light-btn"  ><i v-on:click="nightBtn" class="fa fa-spin fa-moon-o" aria-hidden="true"></i></div>
      <div class="head-box-btn3">bb</div>
    </div>
<!--    <canvas class="fire-canvas" id="fireworks"></canvas>-->
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  methods:{
    nightBtn() {
      this.$store.commit("nightBtn")
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 600px){
  .head-menu{
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
  }

  .head-menu > a, .has-child > a{
    padding: .6em 0;
    line-height: 2em;
    margin-right: 1em;
  }
  .head-menu > a:last-child{ margin-right: 0 }

  .head-title {
    display: none;
  }
}

@media screen and (max-width: 599px){
  .head-menu {
    max-height: 0;
    padding: 0 1em;
    display: block;
    overflow-y: auto;
    border-right: 0.5em solid transparent;
    transition: margin .3s, max-height .3s;
  }
}

  header {
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    position: fixed;
    /*line-height: 1em;*/
    border-bottom: 1px solid #ddd;
    border-bottom-color: var(--border);
    background: var(--light-background);;
    transition: border-color .3s, background .3s;
  }

  .head-menu {
    display: flex;
    justify-content: center;
  }

  .head-title {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
  }

  .head-box {
    line-height: 3.2em;
    padding-bottom: 0.5em;
    position: relative;
  }

  .head-box-btn1 {
    height: 3.2em;
    line-height: 3.2em;
  }

  .head-box-btn2 {
    margin-left: 2em;
    /*height: 2em;*/
    float: left;
    position: absolute;
    left: 0;
    top: 0;
  }

  .head-box-btn3 {
    margin-right: 2em;
    position: absolute;
    right: 0;
    top: 0;

  }

  .head-menu a {
    color: inherit;
    display: block;
  }

  .fire-canvas {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>