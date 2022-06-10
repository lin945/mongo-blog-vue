<template>
  <div class="m-container">
    <Header></Header>
    <div class="m-content">
      <el-form ref="editForm" status-icon :model="editForm" :rules="rules" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="editForm.title"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <mavon-editor v-model="editForm.content"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import BlogModel from "@/model/BlogModel";
export default {
  name: "AdminEdit",
  props:{
    id:null
  },
  data: function () {
    return{
      editForm: {
        id: null,
        title: '',
        description: '',
        content: ''
      },
      rules: {
        title: [
          {required: true, message: '请输入标题', trigger: 'blur'},
          {min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '请输入摘要', trigger: 'blur'}
        ]
      }
    }
  },
  created() {
    if (this.id!=null){
      console.log(this.id)
    }
  },
  methods: {
    submitForm(){
      const _this = this
      this.$refs.editForm.validate((valid) => {
            if (valid) {
              let form = _this.editForm;
              BlogModel.saveBlog(form).then((value => {
                this.$message({
                  message: '保存成功！'+value,
                  type: 'success'
                });
              })).catch((e)=>{
                this.$message.error('保存失败！'+e);
              });
              console.log(_this)
            }else{
              return false
            }
      })
    },
    saveBlog() {
      console.log("aaa")
    }
  }
}
</script>

<style scoped>

</style>