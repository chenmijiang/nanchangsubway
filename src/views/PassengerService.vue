<template>
  <div class="passengerserve">
    <div class="container">
      <div class="main">
        <!-- 地铁背景 -->
        <section class="main-section section-subserve">
          <div class="main-section-box" style="height: 400px">
            <div class="subtour-bg">
              <img src="/subserve.png" alt="地铁背景" />
              <img src="/subserve1.png" alt="地铁背景" />
            </div>
          </div>
        </section>
        <!-- 地铁时刻表 -->
        <section class="main-section section-subtime">
          <h3 class="main-section-title">
            <el-divider>地铁时刻表</el-divider>
          </h3>
          <div class="main-section-box">
            <sub-run-time></sub-run-time>
          </div>
        </section>
        <!-- 地铁路线查询 -->
        <section class="main-section section-submap">
          <h3 class="main-section-title">
            <el-divider>地铁路线查询</el-divider>
          </h3>
          <!-- 原计划采用canvans绘制交互式地铁路线图，因时间关系改为图片 -->
          <div class="main-section-box">
            <div class="section-box-submap">
              <img src="/submap.png" alt="地铁图片" class="submap-img" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import SubRunTime from "@/components/SubRunTime.vue";

export default {
  name: "PassengerService",
  components: {
    SubRunTime,
  },
};
</script>

<style lang="scss" scoped>
$radius: 5px;
$baseColor:#e50039;

.main-section {
  min-height: 100px;

  .main-section-title {
    width: 80%;
    margin: 0 auto 50px;
    .el-divider {
      background-color: $baseColor;
    }
    .el-divider__text {
      font-size: 1rem;
      color: $baseColor;
    }
  }

  .main-section-box {
    width: 80%;
    min-width: 600px;
    margin: 0 auto 50px;
  }
}

.section-subserve {
  .subtour-bg {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: $radius;
    position: absolute;
    top: 0%;
    left: 0%;

    &:first-child {
      mask: linear-gradient(90deg, #000, #000 25%, #0000);
    }
    &:last-child {
      mask: linear-gradient(90deg, #0000 32%, #000 50%, #000);
    }
  }
}

.section-box-submap {
  width: 85%;
  margin: 2rem auto 0;
  .submap-img {
    width: 100%;
    height: 100%;
  }
}
</style>