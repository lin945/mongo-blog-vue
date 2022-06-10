<template>
  <div class="blogInfo">
    <div class="warp-main">
      <section class="post-title">
        <h2>{{blog.title}}</h2>
        <div class="blog-meta">
          <i class="el-icon-time"/>
          <time>
            {{ blog.createTime }}
          </time>
          <i class="el-icon-chat-dot-round"></i>
          <span>6</span>
          <i class="el-icon-view"></i>
          <span>{{ blog.views }}</span>
        </div>
      </section>
      <el-divider/>


      <section class="post-main">
        <div class="content markdown-body" v-html="blog.content"></div>
      </section>
      <!--      底部-->
      <section class="post-author">
        <figure class="author-avatar">
          <img class="avatar" src="https://q.qlogo.cn/g?b=qq&amp;nk=2315554550&amp;s=100" alt="">
        </figure>
        <div class="author-info">
          <h4>lin945</h4>
          <p>本站未注明转载的文章均为原创，并采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank"
                                   rel="nofollow">CC BY-NC-SA 4.0</a> 授权协议，<span style="color: #E91E63">转载请注明来源</span>，谢谢！<a
              href="https://beian.miit.gov.cn/" target="_blank">渝ICP备2022002627号</a></p>
        </div>
      </section>
      <section class="post-comments">
        <div class="comments">
          <h3>没有评论！</h3>
        </div>
        <el-form ref="cform" :model="form" :rules="rules" label-width="5em">
          <el-form-item prop="name" label="昵称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="电邮">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item prop="desc" label="评论">
            <el-input type="textarea" v-model="form.desc" placeholder="快来评论吧 (*≧ω≦)ﾉ"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('cform')">立即创建</el-button>
          </el-form-item>
        </el-form>

      </section>
    </div>
    <section class="right-area">
      <h1>qww</h1>
    </section>
  </div>
</template>

<script>
import BlogModel from "@/model/BlogModel";

export default {
  name: "MainBlogInfo",
  components: {},
  props:{
    id: String
  },
  created() {
      this.loadBlog()
  },
  data: function () {
    return {
      blog: {
        id:"1",
        title:"标题啊",
        content:".",
        description:"写在bbo：Ap",
        img:"",
        published:true,
        views:0,
        userName:"",
        commentNumber:0,
        createTime:"2022-03-30",
        updateTime:"2022-03-30"
      },
      form: {
        name: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入昵称', trigger: 'blur'},
          {min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ],
        desc: [
          {required: true, message: '请填写正文', trigger: 'blur'}
        ]
      }
    }
  }
  ,
  methods: {
    onSubmit(ff) {
      this.$refs[ff].validate((valid) => {
        if (valid) {
          console.log()
        } else {

          return false;
        }
      });
    },
    loadBlog() {
      let _this=this
      let id = this.id;
      console.log(id)
      BlogModel.getBlogById(id).then(data=>{
        console.log(data)
        this.blog=data.data
        const MarkdownIt = require('markdown-it'),
            md = new MarkdownIt();
        _this.blog.content = md.render(_this.blog.content)
      })
    }
  }
}
</script>

<style scoped>
.right-area {
  background-color: var(--blue);
  position: fixed;
  right: 0;
  top: 0;
  width: 15em;
}

@media screen and (min-width: 900px) {
  .right-area {
    top: 3.2em;
    opacity: 1;
    visibility: visible;
    border-left: 1px solid #ddd;
    border-color: var(--border);
  }
}

.post-title {
  color: var(--blue);
}

.blog-meta {
  color: var(--text-color);
  white-space: nowrap;
  width: 100%;
}

.blog-meta > * {
  margin-right: 0.2em;
}

.blog-meta > :nth-child(2n) {
  margin-right: 1em;
}

.blogInfo {
  padding: 3.2em .5em;
  background: var(--light-main-background);
}

.warp-main {
  margin: 0 2em;
}

@media screen and (min-width: 900px) {
  .blogInfo {
    margin-right: 15em;
  }
}

.post-main {
  margin-bottom: 3em;
  color: var(--text-color);
}

.comments {
  margin-bottom: 1em;
}

.post-author {
  margin-top: 1em;
  display: table;
  padding: 1.5em 0;
  margin-bottom: 3em;
  position: relative;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-color: var(--border);
  transition: border .3s, filter .3s;
  animation: fade-in-top .3s .4s backwards;
  -webkit-animation: fade-in-top .3s .4s backwards;
}

.post-author .author-info {
  margin-left: 1.5em;
}

.post-author .author-avatar {
  width: 5em;
  display: table-cell;
  vertical-align: middle;
}

.post-author h4 {
  font-weight: bold;
  margin-bottom: 0.5em;
}

.post-comments {
  color: var(--text-color);
}
</style>