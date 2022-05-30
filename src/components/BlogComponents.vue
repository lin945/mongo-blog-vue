<template>
  <el-card class="blog-card" v-on:click.native="onCl">
    <el-row>
      <!--                左边文章内容-->
      <el-col class="blog-info" :span="16" :xs="23">
        <div class="blog-title">
          <h1>{{ blogdata.title }}</h1>
        </div>
        <p>{{ blogdata.description }}</p>
        <div class="blog-meta">
          <i class="el-icon-time"/>
          <time>
            {{ blogdata.createTime }}
          </time>
          <i class="el-icon-chat-dot-round"></i>
          <span>6</span>
          <i class="el-icon-view"></i>
          <span>6</span>
        </div>
      </el-col>
      <!--                右边图片-->
      <el-col class="blog-img" :span="8" :xs="0">
        <div class="r-img">
          <div class="hei"></div>
          <el-image
              class="e-img"
              :src="blogdata.img"
              fit="fill"></el-image>
          <div class="hei"></div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: "BlogComponents",
  props: {
    blogdata: Object
  },
  created() {

  },
  methods: {
    onCl() {
      this.$router.push({name: 'Blog', params: {id: this.blogdata.id}})
      console.log("router"+this.blogdata)
    }
  }
}
</script>

<style scoped>
.blog-card {
  background: var(--light-background);
  border-color: var(--light-border);
  margin-bottom: 3em;
  color: var(--text-color);
}

.blog-info {
  background-color: var(--light-background);
}

.blog-info p {
  line-height: 1.8;
  margin-bottom: 1em;
}

.blog-title {
  margin-bottom: 0.5em;
  color: var(--blue);
}

.blog-title h1 {
  line-height: 2em;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #eee;
  border-color: var(--light-border);
  transition: color .3s, border .3s;
}

.blog-meta {
  white-space: nowrap;
  width: 100%;
}
.blog-meta>*{
  margin-right: 0.2em;
}
.blog-meta>:nth-child(2n){
  margin-right: 1em;
}

.blog-img {
  height: 100%;
}

.r-img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.hei {
  width: 100%;
  height: 5px;
}

.r-img .e-img {
  width: 10em;
  height: 10em;
}
</style>