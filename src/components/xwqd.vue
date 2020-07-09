<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>签到入口</el-breadcrumb-item>
      <el-breadcrumb-item>校外签到</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="学号" prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
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
        <el-form-item label="班级" prop="region2">
          <el-select v-model="ruleForm.region2" placeholder="请选择班级">
            <el-option label="计研181班" value="计研181班"></el-option>
            <el-option label="计研182班" value="计研182班"></el-option>
            <el-option label="计研183班" value="计研183班"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="外出时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择离校日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-date-picker placeholder="选择返校日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="备注" prop="desc">
          <el-input  v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">立即签到</el-button>
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
        id:"",
        name: "",
        region: "",
        region2: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "此字段非空", trigger: "blur" },
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
        desc: [{ required: false, message: "", trigger: "blur" }]
      }
    };
  },
  methods: {
    async onSubmit() {
      window.location.href = "http://localhost:5000/user/sign_in";
    },
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