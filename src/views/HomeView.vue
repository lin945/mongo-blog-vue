<template>
  <el-container>
    <el-header><MainHeader></MainHeader></el-header>
      <el-main class="main_root">
<!--        排除博客详情组件，否则组件不刷新-->

          <keep-alive exclude="MainBlogInfo">
            <transition name="bounce">
            <router-view/>
            </transition>
          </keep-alive>
      </el-main>
    <el-footer class="footer-el"><MainFooter></MainFooter></el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
export default {
  name: 'HomeView',
  components: {
    MainHeader,
    MainFooter
  },
  methods:{

  }
}
</script>

<style scoped>
.main_root{
  background: var(--light-main-background);
  /*padding: 0;*/
}
.footer-el{
  padding: 5px 0;
  background: var(--light-background);
  height: auto!important;
}

.bounce-enter-active {
  animation: bounce-in 1s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}

</style>
