<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="2">
          <div class="avator">
            <img src="@/assets/logo-blue.png" alt="vue.js" />
          </div>
        </el-col>
        <el-col :span="20">
          <h3>智能学生签到系统</h3>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a href="#" class="logout" @click.prevent="handleLogOut">
              <i class="el-icon-user-solid">
              
                <strong>{{username}}</strong>
              </i>
            </a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>签到入口</span>
            </template>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="ktqd">
              <i class="el-icon-user-solid"></i>课堂签到
            </el-menu-item>
            <el-menu-item index="ssqd">
              <i class="el-icon-user-solid"></i>宿舍签到
            </el-menu-item>
            <el-menu-item index="xwqd">
              <i class="el-icon-user-solid"></i>校外签到
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span slot="title">签到信息</span>
            </template>
            <el-menu-item index="qdxs">
              <i class="el-icon-s-custom"></i>课堂签到信息
            </el-menu-item>
            <el-menu-item index="qdxsss">
              <i class="el-icon-s-check"></i>宿舍签到信息
            </el-menu-item>
            <el-menu-item index="qdxsxw">
              <i class="el-icon-s-check"></i>校外签到信息
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span slot="title">后台管理</span>
            </template>
            <el-menu-item index="addstu">
              <i class="el-icon-s-shop"></i>学生信息
            </el-menu-item>
            <el-menu-item index="addcourse">
              <i class="el-icon-question"></i>课程信息
            </el-menu-item>
            <!-- <el-menu-item index="3-3"><i class="el-icon-goods"></i></el-menu-item> -->
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span slot="title">聊天室</span>
            </template>
            <el-menu-item index="ktqd">
              <i class="el-icon-s-promotion"></i>请假
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-info"></i>
              <span slot="title">数据统计</span>
            </template>
            <el-menu-item index="charts">
              <i class="el-icon-s-data"></i>数据报表
            </el-menu-item>
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

<style lang="less">
@import "../style/mixin";
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}

.el-header {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  display: block;
  position: relative;
  overflow-y: scroll;
  background-color: #545c64 !important;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  // line-height: 160px;
}

h3 {
  color: blanchedalmond;
  text-align: left;
  line-height: 15px;
}
.logout {
  line-height: 60px;
  text-decoration: none;
  color: blanchedalmond;
}
.avator {
  .wh(20px, 20px);
  border-radius: 50%;
  margin-right: 13px;
}
</style>
