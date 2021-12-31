<template>
  <div class="section-box-subnews">
    <div class="subnews-left">
      <div class="block">
        <el-carousel height="350px">
          <el-carousel-item v-for="poem in poems" :key="poem.id">
            <div class="subnews-img">
              <img :src="poem.path" alt="" lazy />
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="subnews-img-detail">简要新闻</div>
      </div>
    </div>
    <div class="subnews-right">
      <ul class="subnews-poems">
        <li
          class="subnews-poem"
          v-for="poem of poems"
          :key="poem.id"
          :id="poem.id"
        >
          <router-link :to="poem.id">
            <div class="poem-title">{{ poem.title }}</div>
            <div class="poem-time">{{ poem.create_time }}</div>
            <p class="poem-brief">{{ poem.description }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import poem from "@/assets/poem.js";

export default {
  name: "SubNews",
  data() {
    return {
      poems: [],
    };
  },
  created() {
    this.fetchUrl();
  },
  methods: {
    fetchUrl() {
      let poemss = poem.getNews(42, 1);
      poemss.then((poems) => {
        poems.forEach((element) => {
          // console.log(element.create_time);
          element.create_time = this.getFormatDuringTime(
            element.create_time + "000"
          );
          element.id = "/newsCenter/poem/" + element.id;
        });
        this.poems = poems.filter((ele) => ele.path);
        if (this.poems.length > 5) {
          this.poems = this.poems.slice(0, 5);
        }
      });
    },
    getFormatDuringTime(during) {
      let time = new Date(parseInt(during));
      let year = time.getFullYear();
      const month = (time.getMonth() + 1).toString().padStart(2, "0");
      const date = time.getDate().toString().padStart(2, "0");
      const hours = time.getHours().toString().padStart(2, "0");
      const minute = time.getMinutes().toString().padStart(2, "0");
      const second = time.getSeconds().toString().padStart(2, "0");
      return (
        year +
        "年" +
        month +
        "月" +
        date +
        "日" +
        hours +
        "时" +
        minute +
        "分" +
        second +
        "秒"
      );
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>

.section-box-subnews {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.5rem;
  width: 100%;
  gap: 1rem;
}

.subnews-left {
  .el-carousel,
  .el-carousel__container,
  .subnews-img img {
    width: 500px;
    height: 350px;
    overflow: hidden;
    border-radius: 5px;
  }

  .subnews-img-detail {
    margin-top: 0px;
    text-align: center;
    color: #888;
    margin-top: 0.2rem;
  }

  .el-carousel__indicators {
    display: none;
  }
}

.subnews-right {
  width: 600px;

  .subnews-poem {
    margin-bottom: 10px;
    padding: 11px;
    background-color: #dfdfdf4f;
    border-radius: 5px;
    transition: all 0.3s;
    cursor: pointer;

    a {
      display: block;
      color: black;
    }

    &:hover {
      box-shadow: 2px 2px 6px #bebebe, -2px -2px 6px #fff;
      background-color: #dfdfdf70;
      transform: translate(0, -2px);
    }

    .poem-title {
      font-size: 0.6rem;
      font-weight: bold;
    }

    .poem-time {
      color: #888;
      font-size: 0.4rem;
    }
  }
}
</style>