<template>
  <el-container>
    <el-header>
      <MainHeader></MainHeader>
    </el-header>
    <el-main class="main_root">
      <keep-alive exclude="Blog">
        <router-view/>
      </keep-alive>
    </el-main>
    <el-footer class="footer-el">
      <MainFooter></MainFooter>
    </el-footer>
  </el-container>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

export default {
  name: "AdminView",
  components: {
    MainHeader,
    MainFooter
  },
}
</script>

<style scoped>
.main_root {
  background: var(--light-main-background);
  /*padding: 0;*/
}

.footer-el {
  padding: 5px 0;
  background: var(--light-background);
  height: auto !important;
}
</style>