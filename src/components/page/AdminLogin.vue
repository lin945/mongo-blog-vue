<template>
  <div class="container">
      <el-form size="middi" ref="lform" :model="form" :rules="rules" label-width="5em">
        <el-form-item prop="user" label="用户名">
          <el-input v-model="form.user"></el-input>
        </el-form-item>
        <el-form-item prop="pass" label="密码">
          <el-input v-model="form.pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="onSubmit('lform')">立即登录</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import AdminModel from "@/model/AdminModel";
import storage from "@/store/storage";
import { Loading } from 'element-ui';
export default {
  name: "AdminLogin",
  data: function () {
    return {
      form: {
        user: '',
        pass: ''
      },
      rules: {
        user: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur'}
        ],
        pass: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]

      }
    }
  },
  methods:{
    onSubmit(ff) {
      let loading = Loading.service({ fullscreen: true });
      let user=this.form.user
      let pass=this.form.pass
      let t=this
      this.$refs[ff].validate((valid) => {
        if (valid) {
          let login = AdminModel.login(user,pass);
          login.then((value => {
            storage.saveToken(value.data)
            loading.close()
            t.$router.push("/admin/blogs")
          }),(e)=>{
            loading.close()
            console.log(e)
          })
        } else {

          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
}
</style>