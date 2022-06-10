<template>
  <el-container>
    <el-header>
      <AdminHeader></AdminHeader>
    </el-header>
    <el-main class="main_root">
      <keep-alive exclude="AdminEdit">
        <router-view/>
      </keep-alive>
    </el-main>
    <el-footer class="footer-el">
      <MainFooter></MainFooter>
    </el-footer>
  </el-container>
</template>

<script>
import MainFooter from "@/components/MainFooter";
import AdminHeader from "@/components/AdminHeader";

export default {
  name: "AdminView",
  components: {
    AdminHeader,
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