<template>
  <div>
    <el-form :inline="true"  class="demo-form-inline">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid:'',
      user:'',
    }
  },
  methods: {
    onSubmit: function() {
      this.$http.post("/class/testrec", { cid: this.cid });
    }
  }
};
</script>