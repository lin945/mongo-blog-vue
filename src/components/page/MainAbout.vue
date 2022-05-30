<template>
  <div class="about">
    <!--    左边栏-->
    <el-row :gutter="10">
      <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5">
        <div class="grid-content bg-purple-light"></div>

      </el-col>
      <!--    中间栏-->
      <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
            <el-card class="blog-card">
              <div slot="header" class="clearfix">
                <h1 class="about-title">关于</h1>
              </div>

            </el-card>
      </el-col>
      <!--    右边栏-->
      <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5">
        <div class="grid-content bg-purple-light"></div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
name: "MainAbout"
}
</script>

<style scoped>
.about{
  margin-top: 3.5em;
  background: var(--light-background);
  text-align: center;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.about-title{
  font-size: 1.5em;
}
.grid-content {
  min-height: 50px;
}
</style>