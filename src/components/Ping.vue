<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="课程名">
        <el-input v-model="user" name="user"></el-input>
      </el-form-item>
      <el-form-item label="课程编号">
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