<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple brand">
            <img src="@/assets/vue_log.png"
                 alt="vue.js">

          </div>
        </el-col>
        <el-col :span="18">
          <h3>智能学生签到系统</h3>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a href="#"
               class="logout"
               @click.prevent="handleLogOut"><strong>{{username}}</strong></a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px"
                class="aside">
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 :unique-opened="true"
                 :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>学生管理</span>
            </template>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="ktqd"><i class="el-icon-user-solid"></i>学生列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span slot="title">签到信息管理</span>
            </template>
            <el-menu-item index="qdxs"><i class="el-icon-s-custom"></i>课堂签到信息</el-menu-item>
            <el-menu-item index="right"><i class="el-icon-s-check"></i>宿舍签到信息</el-menu-item>
            <el-menu-item index="right"><i class="el-icon-s-check"></i>校外签到信息</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span slot="title">课程管理</span>
            </template>
            <el-menu-item index="3-1"><i class="el-icon-s-shop"></i>课程查询</el-menu-item>
            <el-menu-item index="3-2"><i class="el-icon-question"></i>课程修改</el-menu-item>
            <!-- <el-menu-item index="3-3"><i class="el-icon-goods"></i></el-menu-item> -->
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span slot="title">签到入口</span>
            </template>
            <el-menu-item index="ktqd"><i class="el-icon-s-promotion"></i>课堂签到</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-info"></i>
              <span slot="title">数据统计</span>
            </template>
            <el-menu-item index="5-1"><i class="el-icon-s-data"></i>数据报表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  // 获取 token | if token ->继续渲染组件 | 没有token -> 登录
  beforeCreate() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ name: "login" });
    }
  },
  created() {
    this.getUsername();
  },
  methods: {
    getUsername() {
      this.username = localStorage.getItem("uname");
    },
    handleLogOut() {
      // 清除token 提示 回到 login
      localStorage.clear();
      this.$message.success("注销成功");
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style>
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-color: #d3dce6;
}
.main {
  padding: 20;
  background-color: #e9eef3;
  height: 100%;
}
.brand {
  width: 5opx;
  background-repeat: no-repeat;
  background-position: center center;
}
.brand img {
  display: inline-block;
  max-width: 25%;
  border-radius: 3px;
}
h3 {
  color: green;
  text-align: center;
  line-height: 15px;
}
.logout {
  line-height: 60px;
  text-decoration: none;
  color: darkgreen;
}
</style>
