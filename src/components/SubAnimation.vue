<template>
  <div class="section-box-subanimation">
    <!-- 
            动画帧解析
            背景以白色为底
            word:Nanchang&nbsp;Subway 模糊消失
            word:南昌地铁 显示
            word:Nanchang&nbsp;Subway 显示并位移到word:南昌地铁 下面
    -->
    <div class="word">Nanchang&nbsp;Subway</div>
    <div class="word">南昌地铁</div>
  </div>
</template>

<script>
export default {
  name: "SubAnimation",
};
</script>

<style lang="scss" scoped>
// @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.section-box-subanimation {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  font-family: "Montserrat", sans-serif;
  color: #000;
  filter: contrast(15);
  overflow: hidden;
}

.word {
  color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-size: 100px;
  animation-delay: 2s;

  &:first-child {
    animation: change1 10s 1 ease-in-out normal forwards;
    opacity: 0;
  }

  &:last-child {
    opacity: 0;
    font-size: 140px;
    animation: change2 10s 1 ease-in-out normal forwards;
  }
}

@keyframes change1 {
  0%,
  10% {
    filter: blur(1px);
    opacity: 1;
  }

  50%,
  60% {
    filter: blur(80px);
    opacity: 0;
    font-size: 100px;
    transform: translate3d(-50%, -50%, 0);
  }

  70% {
    filter: blur(10px);
    transform: translate3d(-50%, 120%, 0);
  }

  80% {
    color: #000;
  }

  100% {
    filter: blur(1px);
    font-size: 40px;
    transform: translate3d(-50%, 140%, 0);
    color: red;
    opacity: 1;
  }
}

@keyframes change2 {
  0% {
    filter: blur(80px);
    opacity: 0;
  }
  27% {
    color: #000;
  }

  31%,
  100% {
    filter: blur(1px);
    opacity: 1;
  }

  28%,
  40% {
    color: #e50039;
  }

  41%,
  55% {
    color: #f3cd3d;
  }

  56%,
  70% {
    color: #0080c7;
  }

  71%,
  85% {
    color: #1ba86c;
  }
  86% {
    color: #e50039;
  }
  100% {
    font-size: 100px;
    color: #e50039;
  }
}
</style>