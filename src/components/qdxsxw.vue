<template>
  <div>
    <template>
      <el-card class="box-card">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>签到信息</el-breadcrumb-item>
          <el-breadcrumb-item>校外签到信息</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="输入学生ID查询签到记录">
              <el-input placeholder></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="tableData" stripe border style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="sid" label="student id" width="180"></el-table-column>
            <el-table-column prop="sname" label="student name" width="300"></el-table-column>
            <el-table-column prop="address" label="attendance address"></el-table-column>
            <el-table-column prop="time" label="attendance time"></el-table-column>
          </el-table>
        </div>
      </el-card>
    </template>
  </div>
</template>

  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    async loadData() {
      this.loading = true;
      const data = await this.$http.get("/user/getOutInfo");
      let arr = [];
      for (let i in data.data) {
        arr.push(data.data[i]);
      }
      this.tableData = arr;
      console.log(arr);
      console.log(arr.length);
    },
    onSubmit() {}
  },
  created() {
    this.loadData();
  }
};
</script>
<style>
.box-card {
  width: 100%;
  height: 100%;
}
.el-input{
  width: 300px;
}
</style>