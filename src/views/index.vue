<template>
  <el-container>
    <el-header>
      <myHead></myHead>
    </el-header>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="1">&nbsp;</el-col>
          <!-- 开始中间的正文内容 -->
          <el-col :span="22">
            <div class="mainBox">
              <div class="rotationChartBox">
                <rotationChart></rotationChart>
              </div>
              <div class="layoutBox">
                <layout></layout>
              </div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
        </el-row>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../assets/css/index.scss";
</style>

<script>
import myHead from "./../components/header.vue";
import rotationChart from "./../components/rotationChart.vue";
import layout from "./../components/layout.vue";
export default {
  components: {
    myHead,
    rotationChart,
    layout,
  },
  data() {
    return {
      list: [
        {
          title: "How to study Vue",
          time: "2016-04-10"
        },
        {
          title: "How to study Typescript",
          time: "2019-11-10"
        }
      ]
    };
  },
  methods: {}
};
</script>