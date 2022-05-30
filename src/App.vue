<template>
  <div id="app" :class="{'dark-theme' :this.$store.state.nightState}">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    copyTips() {
      this.$message({
        message: '复制内容请注明来源并保留版权信息！',
        type: 'warning'
      });
    }
  },
  created() {
    document.oncopy = this.copyTips
  }
}
</script>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}

:root {
  --blue: #6f9fc7;
  --text-color: #555;
  --light-blue: #9fcff7;
  --border: #ddd;
  --dark-border: #ccc;
  --light-border: #eee;
  --light-background: #fff;
  --light-main-background: #fff;
  --radius: .25em;
  --red: #ea644a;
  --yellow: #ffb03a;
  --green: #27a17e;
  --gray: #ccc;
  --light-gray: #ddd;
  --lighter-gray: #eee;
  --primary: var(--blue);
  --secondly: var(--yellow);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  font: 16px/1.5 'Microsoft Yahei', 'PingFang SC', 'Hiragino Sans GB', sans-serif;
}

::selection {
  background: var(--text-color);
  color: var(--light-background);
}

::-moz-selection {
  background: #a7bd06;
  color: #FFF;
}

#app {

}

body {
  font-weight: 300;
  background: #fafafa;
  margin: 0;
  transition: margin .3s, background .3s;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 18px;
}

.dark-theme {
  color: #b2b2b2;
  --text-color: #b2b2b2;
  background: #333;
  --blue: #6e8aad;
  --light-blue: #6f9fc7;
  --border: #555;
  --dark-border: #666;
  --light-border: #555;
  --light-background: #444;
  --light-main-background: #333;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: normal;
}

p {
  margin: 0;
  line-height: 1.8em;
}

h1 {
  font-size: 2em;
}

a {
  color: var(--primary);
  text-decoration: none;
}

</style>
