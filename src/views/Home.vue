<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <div class="main">
        <!-- 地铁动画 -->
        <section class="main-section section-subanimation">
          <div class="main-section-box" style="height: 400px">
            <sub-animation></sub-animation>
          </div>
        </section>
        <!-- 地铁风采 -->
        <section class="main-section section-substyle">
          <h3 class="main-section-title section-title-substyle">
            <el-divider>地铁风采</el-divider>
          </h3>
          <div class="main-section-box" style="width: 90%; min-width: 900px">
            <sub-style></sub-style>
          </div>
        </section>

        <!-- 
          新闻中心
          会使用axios获取新闻链接
        -->
        <section class="main-section section-subnews">
          <h3 class="main-section-title section-title-subnews">
            <el-divider>新闻中心</el-divider>
          </h3>
          <div class="main-section-box" style="min-height: 400px">
            <sub-news></sub-news>
          </div>
        </section>
        <!-- 便民查询 -->
        <section class="main-section section-subsearch">
          <h3 class="main-section-title section-title-subsearch">
            <el-divider>便民查询</el-divider>
          </h3>
          <div class="main-section-box">
            <sub-search></sub-search>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SubStyle from "@/components/SubStyle.vue";
import SubSearch from "@/components/SubSearch.vue";
import SubNews from "@/components/SubNews.vue";
import SubAnimation from "@/components/SubAnimation.vue";

export default {
  name: "Home",
  components: {
    SubStyle,
    SubSearch,
    SubNews,
    SubAnimation,
  },
};
</script>

<style lang="scss" scoped>
$base-Color: #e50039;

.main-section {
  min-height: 100px;

  .main-section-title {
    width: 80%;
    margin: 0 auto 50px;
    .el-divider {
      background-color: $base-Color;
    }
    .el-divider__text {
      font-size: 1rem;
      color: $base-Color;
    }
  }

  .main-section-box {
    width: 80%;
    min-width: 600px;
    margin: 0 auto 50px;
  }
}
</style>
