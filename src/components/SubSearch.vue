<template>
  <div class="section-box-subsearch">
    <div class="subsearch-item" v-for="sub in subsearch" v-bind:key="sub.img">
      <a :href="sub.link" class="subsearch link">
        <div class="item-img" :style="sub.img"></div>
        {{ sub.content }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubSearch",
  data: function () {
    return {
      subsearch: [
        {
          img: "mask-image:url(/luxian.png)",
          link: "/passengerService",
          content: "运行路线",
        },
        {
          img: "mask-image:url(/shijian.png)",
          link: "/passengerService",
          content: "运营时间",
        },
        {
          img: "mask-image:url(/jingdian.png)",
          link: "/subwayTour",
          content: "周边景点",
        },
        {
          img: "mask-image:url(/zixun.png)",
          link: "/",
          content: "咨询交流",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$colors: #e50039, #f3cd3d, #0080c7, #1ba86c;
$count: 1;

@mixin rtl($color, $count) {
  @keyframes linearColor_#{$count} {
    0% {
      background-image: linear-gradient(#000, #000);
    }
    10% {
      background-image: linear-gradient(#000 80%, $color 95%);
    }
    20% {
      background-image: linear-gradient(#000 78%, $color 90%);
    }
    30% {
      background-image: linear-gradient(#000 72%, $color 90%);
    }
    40% {
      background-image: linear-gradient(#000 60%, $color 85%);
    }
    50% {
      background-image: linear-gradient(#000 55%, $color 80%);
    }
    60% {
      background-image: linear-gradient(#000 45%, $color 80%);
    }
    70% {
      background-image: linear-gradient(#000 35%, $color 60%);
    }
    80% {
      background-image: linear-gradient(#000 20%, $color 50%);
    }
    90% {
      background-image: linear-gradient(#000 5%, $color 45%);
    }
    100% {
      background-image: linear-gradient($color, $color);
    }
  }
}
// 颜色渐变动画
@each $color in $colors {
  @include rtl($color, $count);
  $count: $count + 1;
}

.section-box-subsearch {
  display: flex;
  justify-content: center;
  gap: 8rem;

  a {
    display: block;
    font-size: 1rem;
    color: #000;
  }
  $count: 1;
  @each $color in $colors {
    .subsearch-item:nth-child(#{$count}) a {
      color: $color;
      .item-img {
        transition: transform 0.4s;
        &:hover {
          animation: linearColor_#{$count} 0.2s ease-out 1 normal forwards;
          transform: translate(0px, -5px);
        }
        $count: $count + 1;
      }
    }
  }
  $count: 1;
}

.item-img {
  width: 4rem;
  height: 4rem;
  background-image: linear-gradient(#000, #000);
  mask-size: 100%;
  margin-bottom: 20px;
}
</style>