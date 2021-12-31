<template>
  <div class="subwaytour">
    <div class="container">
      <div class="main">
        <!-- 地铁背景 -->
        <section class="main-section section-subtour">
          <div class="main-section-box" style="height: 400px">
            <div class="subtour-bg">
              <img src="/subtour1.png" alt="地铁背景" />
              <img src="/subtour3.png" alt="地铁背景" />
              <img src="/subtour4.png" alt="地铁背景" />
              <img src="/subtour2.png" alt="地铁背景" />
            </div>
          </div>
        </section>
        <!-- 周边景点 -->
        <section class="main-section section-subview">
          <h3 class="main-section-title">
            <el-divider>周边景点</el-divider>
          </h3>
          <div class="main-section-box">
            <!-- <div class="section-box-subview">
              <sub-around></sub-around>
            </div> -->
            <sub-around :things="views" :autoplay="play"></sub-around>
          </div>
        </section>
        <!-- 周边小吃 -->
        <section class="main-section section-subsnack">
          <h3 class="main-section-title">
            <el-divider>周边小吃</el-divider>
          </h3>
          <div class="main-section-box">
            <!-- <div class="section-box-subsnack">
              <sub-around></sub-around>
            </div> -->
            <sub-around :things="snacks" :autoplay="!play"></sub-around>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import SubAround from "@/components/SubAround.vue";

export default {
  name: "SubwayTour",
  components: {
    SubAround,
  },
  data() {
    return {
      play: false,
      views: [
        {
          imgSrc: "/tengwangge.png",
          title: "滕王阁",
          content:
            "滕王阁，位于江西省南昌市东湖区，地处赣江东岸，为南昌市地标性建筑、豫章古文明之象征，始建于唐永徽四年（653年），为唐太宗李世民之弟滕王李元婴任江南洪州都督时所修，现存建筑为1985年重建景观；因初唐诗人王勃所作《滕王阁序》而闻名于世；与湖南岳阳岳阳楼、湖北武汉黄鹤楼并称为“江南三大名楼”，是中国古代四大名楼之一、“中国十大历史文化名楼”之一，世称“西江第一楼”。",
        },
        {
          imgSrc: "/bayiguangchang.png",
          title: "八一广场",
          content:
            "八一广场，位于江西省南昌市东湖区，位置在八一大道、北京西路、中山路、孺子路等市区主干街道的交汇处，原名人民广场，始建于1952年。八一广场占地面积7.8万平方米，主要包括以纪念塔为标志的纪念区、南端的追忆区、以8块浮雕为载体的怀念区和北端的市民休闲区等四大功能区。八一广场是南昌市的心脏地带，江西省最大的城市中心广场，南昌市和江西省政治、经济、文化、娱乐休闲等活动的重要场所，伫立着由叶剑英元帅题写的“八一南昌起义纪念塔”。",
        },
        {
          imgSrc: "/motianlun.png",
          title: "南昌之星",
          content:
            "“南昌之星”摩天轮，又名南昌之星，位于江西省南昌市红谷滩区红角洲赣江边上的赣江市民公园。高160米，同时在世界上仅次于拉斯维加斯摩天轮（167米）和新加坡飞行者（165米）摩天轮，为南昌市标志性建筑.国内第一高的摩天轮。“南昌之星”摩天轮由国家煤科研究总院上海分院设计，轮面彩灯由六七千根LED半导体照明器件构成，全部亮灯后除了可以显示一座直径为153米的巨型彩色时钟，还可根据需要设定不同图案，诠释着南昌作为世界动感都会的昂首姿态，成为南昌的重要地标之一。",
        },
        {
          imgSrc: "/qiushui.png",
          title: "秋水广场",
          content:
            "秋水广场于2004年1月28日落成，位于江西省南昌市红谷滩区的赣江之滨，与名振天下的滕王阁隔江相望，依《滕王阁序》中名句“落霞与孤鹜齐飞，秋水共长天一色”而命名，秋水广场东边是赣江，西边是南昌市委、市政府，南边是南昌大桥，北边是八一大桥，和秋水广场连在一起的是赣江市民公园全亚洲最高最大的音乐喷泉群。",
        },
        {
          imgSrc: "/bayijinianguan.png",
          title: "八一纪念馆",
          content:
            "南昌八一起义纪念馆是为纪念南昌起义而设立的专题纪念馆，成立于1956年，1959年10月1日正式对外开放。南昌八一起义纪念馆位于江西省南昌市西湖区中山路，占地面积5903平方米。南昌八一起义纪念馆基本陈列陈展各类图片、图表509幅，文物展品407件（套），艺术品51件；陈展内容主要有：新馆大楼南昌起义、人民军队光辉历程以及旧址复原陈列等",
        },
      ],
      snacks: [
        {
          imgSrc: "/nanchangchaofen.png",
          title: "南昌炒粉",
          content:
            "南昌炒粉非常有名，米粉洁白、细嫩、久漂不烂、久炒不碎，放入姜沫、蒜沫、麻油、酱油、猪油、葱花、咸菜沫，还有辣椒和胡椒粉，味道香辣爽口。为了满足食客日益增长的味觉需求，南昌炒粉还衍生出了很多品种。如猪肉炒粉、牛肉炒粉、肥肠炒粉、鸡蛋炒粉、豆芽菜炒粉、三鲜炒粉、黄花菜炒粉……无论哪种炒粉，都可谓是肉嫩，粉韧、味鲜。",
        },
        {
          imgSrc: "/wanguantang.png",
          title: "瓦罐汤",
          content:
            "瓦罐汤，完全采用民间传统煨汤方法，以瓦罐为器，精配食物加以天然矿泉水为原料，以硬质木炭火恒温传统式六面受热，煨制达七小时以上。终于演译成倍具民间传统特色又合乎现代人口味的美食。瓦罐之妙处在于土质陶器，秉阴阳之性含五行之功效，久煨之下原料鲜味及营养成分充分溶解于汤中，其味鲜香淳浓，食后令人久而难忘。",
        },
        {
          imgSrc: "/shizitou.png",
          title: "鄱阳湖狮子头",
          content:
            "鄱阳湖狮子头，这道菜在当地是非常有名的，几乎是每一个去江西旅游的人必吃的一道菜，很多的餐厅都点得到！鄱阳湖狮子头是江西省南昌地区汉族名菜，制作独特，以猪肉粒、香芋丝等为原料，配以马蹄、火腿、干贝、高汤、咸蛋黄、淀粉等，质地酥软，味道鲜美。",
        },
        {
          imgSrc: "/lihao.png",
          title: "藜蒿炒腊肉",
          content:
            "藜蒿炒腊肉为江西南昌的一道汉族菜，其主料为藜蒿和腊肉。其中，藜蒿属鄱阳湖特产，是一种野生草本植物，春季收获的特种绿色蔬菜食品。藜蒿炒腊肉具有“脆嫩爽口，醇香柔润”的特点，腊肉金黄，藜蒿青绿，脆嫩爽口，有一股特别的清香味道，已入选“十大赣菜”之中。",
        },
        {
          imgSrc: "/zhengrou.png",
          title: "米粉蒸肉",
          content:
            "南昌人每年立夏前后都喜欢蒸上一碗米粉蒸肉，据说立夏日吃了不会生痱子。人们把大米加八角、桂皮等香料炒熟后研磨成粉，将五花肉切成厚片浸渍上辣椒油、酱油，再加白糖、料酒、味精等调味品，然后倒入米粉拌匀，再将粘满米粉的肉一片片叠在碗内，上笼蒸熟至烂，吃时将肉扣在盘内即可。有的在肉内又拌入适量豌豆，使菜有粉香，又有碗豆清香，荤素鲜腻，别有风味。",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$radius: 5px;
$baseColor: #e50039;
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

.section-subtour {
  .subtour-bg {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-top: 10px;
    border-radius: $radius;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;

    &:first-child {
      left: -21%;
      mask: linear-gradient(90deg, #000, #000 25%, #0000);
    }
    &:nth-child(2) {
      left: -16%;
      mask: linear-gradient(60deg, #0000 35%, #000 45%, #000 70%, #0000);
    }
    &:nth-child(3) {
      left: 5%;
      mask: linear-gradient(90deg, #0000 40%, #000 50%, #000 80%, #0000);
    }
    &:last-child {
      left: 39%;
      mask: linear-gradient(90deg, #0000 32%, #000 50%, #000);
    }
  }
}
</style>