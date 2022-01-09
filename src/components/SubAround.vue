<template>
  <div class="section-box-subaround">
    <el-carousel
      indicator-position="outside"
      height="16rem"
      :autoplay="autoplay"
    >
      <el-carousel-item v-for="thing in things" :key="thing.title">
        <div class="card-item">
          <div class="left-img"><img :src="thing.imgSrc" alt="图片" /></div>
          <div class="right-detail">
            <div class="detail-title">{{ thing.title }}</div>
            <div class="detail-content">{{ thing.content }}</div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "SubStyle",
  props: {
    things: Array,
    autoplay: Boolean,
  },
};
</script>
<style lang="scss">
$baseColor: #e50039;

.section-box-subaround {
  .el-carousel.el-carousel--horizontal {
    padding-top: 60px;
  }
  .el-carousel__indicators.el-carousel__indicators--horizontal {
    position: absolute;
    top: -7px;
    transform: translateX(-50%);
  }
  .el-carousel__indicator {
    margin: 0 0.2rem;
    position: relative;

    &::before {
      content: "";
      width: calc(12px + 0.2rem);
      height: 0.1rem;
      background-color: $baseColor;
      position: absolute;
      top: 50%;
      left: 87%;
    }

    &:last-child {
      &::before {
        width: 0;
      }
    }
  }
  .el-carousel__button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: $baseColor;
    border: 2px solid #54bf0b;
  }
}
</style>

<style lang="scss" scoped>
$radius: 5px;
$baseColor: #e50039;
.section-box-subaround {
  width: 85%;
  margin: 2rem auto 0;
}

.card-item {
  margin-top: 50px;
  color: #fff;
  background-color: $baseColor;
  border-radius: 10px !important;

  display: flex;
  gap: 3rem;

  .left-img {
    width: 16rem;
    height: 12rem;
    transform: translate(1.5rem, -1.5rem);
    img {
      width: 100%;
      height: 100%;
      background-color: blue;
      border-radius: $radius;
    }
  }

  .right-detail {
    width: 20rem;
    float: right;
    height: 12rem;
    padding: 0.5rem;
    font-size: 0.7rem;

    .detail-title {
      text-align: center;
      font-weight: bold;
      font-size: 1rem;
      margin-bottom: 0.3rem;
    }
  }
}
</style>