<template>
  <div>
    <template>
      <el-card class="box-card">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>签到信息</el-breadcrumb-item>
          <el-breadcrumb-item>课堂签到信息</el-breadcrumb-item>
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
            <el-table-column prop="cid" label="course id" width="180"></el-table-column>
            <el-table-column prop="sid" label="student id" width="180"></el-table-column>
            <el-table-column prop="cname" label="course name" width="300"></el-table-column>
            <el-table-column prop="sname" label="student name" width="200"></el-table-column>
            <el-table-column prop="qdtime" label="attendance time" width="400"></el-table-column>
            <el-table-column prop="qdaddress" label="attendance address"></el-table-column>
           
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="400"></el-pagination>

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
      const data = await this.$http.get("/class/qdxs");
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
.el-pagination {
  margin-top: 30px;
}
</style>