<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>后台管理</el-breadcrumb-item>
      <el-breadcrumb-item>学生信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="学生姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="学生性别" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属学院" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择学院">
            <el-option label="计算机科学与技术学院" value="计算机科学与技术学院"></el-option>
            <el-option label="土木学院" value="土木学院"></el-option>
            <el-option label="马克思学院" value="马克思学院"></el-option>
            <el-option label="历史学院" value="历史学院"></el-option>
            <el-option label="通信工程学院" value="通信工程学院"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属班级" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择班级">
            <el-option label="计研181班" value="计研181班"></el-option>
            <el-option label="计研182班" value="计研182班"></el-option>
            <el-option label="计研183班" value="计研183班"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="注册时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="上传照片" required>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件（不超过500kb)拖到此处，或
              <em>点击上传</em>
            </div>
          </el-upload>
        </el-form-item>

       <el-form-item label="学生电话" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="学生邮箱" prop="desc">
          <el-input  v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style >
.box-card {
  width: 100%;
  height: 100%;
}
.demo-ruleForm {
  margin-top: 40px;
  padding: 2px;
}
.el-select {
  float: left;
  text-align: left;
  width: 100%;
}
.el-input {
  float: left;
  width: 50%;
}
.el-option {
  width: 30%;
}
.el-upload {
  float: left;
}
</style>