<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>签到入口</el-breadcrumb-item>
      <el-breadcrumb-item>宿舍签到</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="宿舍楼号">
          <el-input v-model="user" name="user"></el-input>
        </el-form-item>
        <el-form-item label="宿舍门牌号">
          <el-input v-model="cid" name="cid"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">开始签到</el-button>
        </el-form-item>
      </el-form>

      <div>
        <img :src="'data:image/png;base64,'+img" alt />
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      cid: "",
      user: "",
      img: ""
    };
  },
  methods: {
    async onSubmit() {
      const res = await this.$http.post("/class/upload", { cid: this.cid });
      this.img = res.data;
      console.log(res.data);
    }
  }
};
</script>

<style >
.box-card {
  width: 100%;
  height: 100%;
}
.el-input{
  width: 300px;
}
</style>