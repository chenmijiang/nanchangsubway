<template>
  <div class="subwayculture">
    <div class="container">
      <div class="main">
        <!-- 地铁背景 -->
        <section class="main-section section-subculture">
          <div class="main-section-box" style="height: 400px">
            <img src="/subculture.png" alt="地铁背景" />
          </div>
        </section>
        <!-- 地铁视频 -->
        <section class="main-section section-subvideo">
          <h3 class="main-section-title">
            <el-divider>地铁发展与规划</el-divider>
          </h3>
          <div class="main-section-box">
            <div class="subvideo">
              <iframe
                src="//player.bilibili.com/player.html?aid=500874032&bvid=BV16K411g7mJ&cid=275294145&page=1"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
              >
              </iframe>
            </div>
          </div>
        </section>
        <!-- 地铁风采 -->
        <section class="main-section section-substyle">
          <h3 class="main-section-title">
            <el-divider>地铁风采</el-divider>
          </h3>
          <div class="main-section-box" style="width: 90%; min-width: 900px">
            <sub-style></sub-style>
          </div>
        </section>
        <!-- 发展大事记 -->
        <section class="main-section section-subdiary">
          <h3 class="main-section-title">
            <el-divider>发展大事记</el-divider>
          </h3>
          <div class="main-section-box">
            <sub-diary></sub-diary>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import SubStyle from "@/components/SubStyle.vue";
import SubDiary from "@/components/SubDiary.vue";

export default {
  name: "SubwayCulture",
  components: {
    SubStyle,
    SubDiary,
  },
};
</script>

<style lang="scss" scoped>
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

.section-subculture {
  img {
    width: 100%;
    height: 100%;
  }
}

.section-subvideo {
  .subvideo {
    width: 90%;
    height: 670px;
    margin: 0 auto;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>