<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户个人中心</el-breadcrumb-item>
      <el-breadcrumb-item>教师账户信息管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名称: ">
          <el-input disabled="true" v-model="name" name="name"></el-input>
        </el-form-item>
        <el-form-item label="角色: " prop="role">
          <el-input disabled="true" v-model="role"></el-input>
        </el-form-item>
        <el-form-item label="用户密码: " prop="password">
          <el-input disabled="true" v-model="password" name="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" @click="dialogVisible = true ">修改个人信息</el-button>
          <el-dialog
            title="修改个人信息"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose"
          >
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名称" class="diaform">
                <el-input v-model="name" name="name" placeholder="请输入新的用户名称"></el-input>
              </el-form-item>
              <el-form-item label="账户密码" class="diaform">
                <el-input v-model="password" name="password" placeholder="请输入新的账户密码"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" class="diaform">
                <el-input v-model="name" name="name" placeholder="请再次输入新密码"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取消修改</el-button>
              <el-button type="primary" @click="dialogVisible = false">确认修改</el-button>
            </span>
          </el-dialog>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      password: "xxxxxx",
      name: "tzbfine",
      role: "教师",
      dialogVisible: false
    };
  },
  methods: {
    async onSubmit() {
      const res = await this.$http.post("/class/upload", { cid: this.cid });
      this.img = res.data;
      console.log(res.data);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
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
.btn {
  float: left;
}
.diaform {
  padding: 8px;
}
.el-dialog {
  padding: 0px;
}
</style>