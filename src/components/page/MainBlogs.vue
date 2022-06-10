<template>
  <div class="blogs">

    <el-row :gutter="10">
      <!--    左边栏-->
      <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <!--    中间栏-->
      <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
        <!--        title-->
        <div class="main-title">
          <div class="main-title-big">
            <h1>幸运的人</h1>
            <span>遇事不决 可问春风，春风不语 随即吾心。</span>
          </div>
        </div>
        <!--        骨架屏-->
        <el-skeleton :rows="6" animated :loading="loading">
          <template slot="default">
            <el-collapse-transition>
              <div class="blog-cards" v-if="blogs.length>0">
                <!--              单个文章-->
                <div v-for="item in blogs" :key="item.id" >
                  <BlogComponents :blogdata="item"/>
                </div>

              </div>
              <el-empty description="描述文字" v-else></el-empty>
            </el-collapse-transition>
          </template>

        </el-skeleton>
        <el-row :gutter="10" type="flex" justify="end">
          <el-col :span="10">
            <el-pagination
                small
                layout="prev, pager, next"
                :total="blogTotal"
                :page-size="5"
                :page-count="pageCount"
                @current-change="loadBlogs">
            </el-pagination>
          </el-col>
        </el-row>
      </el-col>
      <!--    右边栏-->
      <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5">
        <div class="grid-content bg-purple-light"></div>
      </el-col>

    </el-row>
  </div>

</template>

<script>
import BlogComponents from "@/components/BlogComponents";
import BlogModel from "@/model/BlogModel";

export default {
  name: "MainBlogs",
  components: {
    BlogComponents
  },
  data() {
    return {
      loading: true,
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      blogTotal:0,
      page:1,
      pageCount:1,
      blogs: []
    }
  },
  created() {
    this.loadBlogs()
    // let t = this
    // setTimeout(function () {
    //       t.loading = false
    //     },
    //     2000)

  },
  methods: {
    loadBlogs(page = 1) {
      if(page>0)page=page-1
      BlogModel.getAllBlog(page).then((data) => {
        this.blogs = data.data.content
        this.pageCount=data.data.totalPages
        this.blogTotal=data.data.totalElements
        this.$store.commit("saveAllBlog", this.blogs)
        this.loading = false
      }).catch((e) => {
        //异常处理
        this.loading=false
        this.$notify.error({
          title: '错误',
          message: '网络或其它错误:'+e.message,
          duration: 0
        });
      });
    }
  }
}
</script>

<style scoped>
.blogs {
  background: var(--light-main-background);
}

.blog-cards {
  width: 100%;
}


.blog-info h1 {
  display: inline-block;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #eee;
  border-color: var(--light-border);
  color: var(--blue);
}

.blog-info p {
  overflow: hidden;
  margin-top: 0;
  line-height: 1.8em;
  max-height: 5.4em;
}

.img-box {
  width: 100%;
  height: available;
}


.blog-meta > * {
  display: inline-block;
  margin-right: 0.5em;
}

.main-title {
  margin-top: 0;
  text-align: center;
  margin-bottom: 2em;
}

.main-title-big {

}

.main-title-big h1 {
  padding: 0.5em;
  font-size: 2em;
  color: var(--blue);
  margin-top: 0;
}
.main-title-big span{
  display: block;
  margin-bottom: 1em;
  font-style: oblique;
}
.grid-content {
  min-height: 50px;
}
</style>