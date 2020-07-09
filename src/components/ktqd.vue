<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>签到入口</el-breadcrumb-item>
      <el-breadcrumb-item>课堂签到</el-breadcrumb-item>
    </el-breadcrumb>
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

      <div class="images">
        <img :src="'data:image/png;base64,'+img" alt />
      </div>

      <el-form :inline="false" class="demo-form-inline">
        <h3>Course Details</h3>
        <el-form-item label="课程名称">
          <el-input v-model="classname" :disabled="true"></el-input>
          <!-- <el-input placeholder="{{cid}}">{cid{this.cid}}</el-input> -->
        </el-form-item>
        <el-form-item label="课程编号">
          <el-input v-model="cid" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="任课教师">
          <el-input :disabled="true" placeholder="tzbfine"></el-input>
        </el-form-item>
        <el-button
          class="btn"
          @click="drawer = true"
          type="primary"
          style="margin-left: 16px;"
        >查看未签到学生</el-button>
      </el-form>

      <el-drawer title="未签到学生信息" :visible.sync="drawer" :with-header="true">
        <el-table :data="info" style="width: 100%" :row-class-name="tableRowClassName">
          <el-table-column prop="id" label="学号" width="80"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="classname" label="班级"></el-table-column>
          <el-table-column prop="department" label="学院"></el-table-column>
          <el-table-column label="补签">
            <template>
              <el-button type="success" icon="el-icon-check" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-drawer>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      classname: "计算机视觉技术",
      info: [],
      cid: "",
      user: "",
      img: "",
      drawer: false
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "success-row";
      } else if (rowIndex % 2 == 1) {
        return "success-row";
      }
      return "success-row";
    },
    async onSubmit() {
      const res = await this.$http.post("/class/upload", { cid: this.cid });
      this.img = res.data;
      console.log(res.data);
    },
    async loadData() {
      this.loading = true;
      const res = await this.$http.get("/user/getStudentInfo");
      console.log(res.data);
      let arr = [];
      for (let i in res.data) {
        arr.push(res.data[i]);
      }
      this.info = arr;
      console.log(arr);
    }
  },

  created() {
    this.loadData();
  }
};
</script>

<style >
.box-card {
  width: 100%;
  height: 100%;
}
.el-input {
  float: left;
  width: 300px;
}
.el-table {
  /* height: 40px; */
  line-height: 70px;
  text-align: center;
}

.el-table .warning-row {
  background: rgba(255, 0, 0, 0.342);
}

.el-table .success-row {
  background: #f9f4eb;
}
.h1 {
  text-align: left;
}
.btn {
  float: left;
}
.el-input {
  width: 300px;
}

</style>