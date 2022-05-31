<template>
  <el-row>

    <el-col :span="8">
      <el-form ref="lform" :model="form" :rules="rules" label-width="5em">
        <el-form-item prop="user" label="用户名">
          <el-input v-model="form.user"></el-input>
        </el-form-item>
        <el-form-item prop="pass" label="密码">
          <el-input v-model="form.pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('lform')">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>

  </el-row>
</template>

<script>
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
      this.$refs[ff].validate((valid) => {
        if (valid) {
          console.log("ok");

        } else {

          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.empty_div {
  width: 50px;
  min-width: 50px;
}
</style>