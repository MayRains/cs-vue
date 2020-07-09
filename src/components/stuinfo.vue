<template>
  <div>
    <template>
      <el-card class="box-card">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>后台管理</el-breadcrumb-item>
          <el-breadcrumb-item>学生信息查看</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="输入学生ID查询信息">
              <el-input placeholder></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="tableData" stripe border style="width: 100%">
            <el-table-column prop="id" label="ID" width="100"></el-table-column>
            <el-table-column prop="name" label="name" width="100"></el-table-column>
            <el-table-column prop="age" label="age" width="100"></el-table-column>
            <el-table-column prop="sex" label="sex" width="100"></el-table-column>
            <el-table-column prop="department" label="department" width="200"></el-table-column>
            <el-table-column prop="classname" label="class" width="200"></el-table-column>
            <el-table-column prop="roomaddress" label="room address" width="200"></el-table-column>
            <el-table-column prop="phone" label="phone number" width="300"></el-table-column>
            <el-table-column label="操作" width="200">
              <template>
                <el-button size="mini" type="primary" icon="el-icon-edit" circle></el-button>
                <el-button size="mini" type="danger" icon="el-icon-delete" circle></el-button>
                <el-button size="mini" type="success" icon="el-icon-check" circle></el-button>
              </template>
            </el-table-column>
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
      const data = await this.$http.get("/user/getStudentInfo");
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
.el-input {
  width: 300px;
}
.el-pagination {
  margin-top: 30px;
}
</style>