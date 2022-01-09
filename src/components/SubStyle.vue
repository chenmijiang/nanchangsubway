<template>
  <div class="section-box-substyle">
    <el-carousel :interval="3000" type="card" height="400px">
      <el-carousel-item v-for="url in urls" :key="url">
        <div class="substyle-img">
          <img :src="url" alt="" lazy/>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: "SubStyle",
  data: function () {
    return {
      urls: [
        require("../assets/style1.png"),
        require("../assets/style2.png"),
        require("../assets/style3.png"),
        require("../assets/style4.png"),
        require("../assets/style5.png"),
        require("../assets/style6.png"),
        require("../assets/style7.png"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$base-Color: #e50039;

.el-carousel__item {
  h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .substyle-img {
    border-radius: 10px;
    overflow: hidden;
    border: 5px solid $base-Color;
    box-shadow: 0 2px 4px rgba(255, 4, 4, 0.39), 0 0 6px rgba(230, 49, 49, 0.34);
  }
}
</style>