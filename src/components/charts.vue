<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item >数据统计</el-breadcrumb-item>
      <el-breadcrumb-item >数据报表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="课程名:">
        <el-input disabled="true" placeholder="计算机视觉技术"></el-input>
      </el-form-item>
      <el-form-item label="课程编号:">
        <el-input disabled="true" placeholder="2018009"></el-input>
      </el-form-item>
      <el-form-item label="起始时间">
        <el-input disabled="true" placeholder="2020.7.5-2020.7.8"></el-input>
      </el-form-item>
    </el-form>

    <div class="Echarts">
      <div id="main" style="width: 1200px;height:800px;"></div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "Echarts",
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据

      var option = {
        title: [
          {
            text: "近三日内学生签到情况统计",
            left: "center"
          },
          {
            subtext: "2020-7-5 签到情况",
            left: "16.67%",
            top: "75%",
            textAlign: "center"
          },
          {
            subtext: "2020-7-6 签到情况",
            left: "50%",
            top: "75%",
            textAlign: "center"
          },
          {
            subtext: "2020-7-7 签到情况",
            left: "83.33%",
            top: "75%",
            textAlign: "center"
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["签到人数", "未签到人数"]
        },
        series: [
          {
            name: "2018-10-01",
            type: "pie",
            radius: "85%",
            center: ["50%", "50%"],
            data: [
              { value: 280, name: "签到人数" },
              { value: 30, name: "未签到人数" }
            ],
            labelLine: {
              show: false
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            left: 0,
            right: "66.6667%",
            top: 0,
            bottom: 0
          },
          {
            name: "2018-10-02",
            type: "pie",
            radius: "85%",
            center: ["50%", "50%"],
            data: [
              { value: 290, name: "签到人数" },
              { value: 20, name: "未签到人数" }
            ],
            labelLine: {
              show: false
            },
            left: "33.3333%",
            right: "33.3333%",
            top: 0,
            bottom: 0
          },
          {
            name: "2018-10-03",
            type: "pie",
            radius: "85%",
            center: ["50%", "50%"],
            data: [
              { value: 260, name: "签到人数" },
              { value: 50, name: "未签到人数" }
            ],
            labelLine: {
              show: false
            },
            left: "66.6667%",
            right: 0,
            top: 0,
            bottom: 0
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.myEcharts();
  }
};
</script>

<style>
.box-card {
  height: 100%;
  width: 100%;
}
.el-input{
	width:inherit;
}
</style>