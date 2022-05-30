<template>
  <div class="main-footer">
    <el-divider class="footer-divider"><div class="hi">{{hi}}</div></el-divider>
    <div class="el-row">
      <el-link href="https://beian.miit.gov.cn/" target="_blank">渝ICP备2022002627号</el-link>
    </div>
    <div class="el-row footer-margin">
      © 2022
      <a href="https://www.bilibili.asia/">林唯心博客</a>
      -干杯~ . All Rights Reserved.
    </div>
    <el-backtop target=".head-menu">

    </el-backtop>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
  data: function () {
    return {
      hi:"收不到讯号！"
    };
  },
  created() {
    let t=this
    fetch('https://v1.hitokoto.cn')
        .then(response => response.json())
        .then(data => {
          t.hi=data.hitokoto
        })
        .catch(console.error)
  }
}
</script>

<style scoped>
.footer-divider {
  background-color: var(--border);
  color: var(--text-color)!important;
}
.footer-divider div{
  background-color: var(--light-background);
}

.main-footer {
  transition: border .3s, background .3s;
  /*border-bottom-color: var(--border);*/
  background: var(--light-background);
}

.main-footer > .el-row {
  text-align: center;
}

.link {

}

.footer-margin {
  padding: 15px;
  color: var(--text-color);
}

</style>