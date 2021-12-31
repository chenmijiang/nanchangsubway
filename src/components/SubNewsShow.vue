<template>
  <div class="section-box-subnewslook">
    <!-- 这里是新闻列表，从服务器获取的数据，然后点击 会跳转到新闻信息 -->
    <ul class="subnews-poems">
      <li class="subnews-poem" v-for="poem of poems" :key="poem.id">
        <router-link :to="poem.id">
          <span class="poem-title">{{ poem.title }}</span>
          <span class="poem-time">{{ poem.create_time }}</span>
        </router-link>
      </li>
    </ul>
    <!-- 分页操作 -->
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="total"
        :page-size="15"
        :hide-on-single-page="true"
        @current-change="handleCurrentChange"
        :key="componentKey"
        :current-page="page"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import poem from "@/assets/poem.js";

export default {
  name: "SubNewsShow",
  data() {
    return {
      total: 5,
      category: 42,
      page: 1,
      poems: [],
      componentKey: 0,
    };
  },
  mounted() {
    this.category = this.$route.params.category;
    this.page = parseInt(this.$route.params.page);
    this.total = parseInt(this.$route.params.total);
    this.fetchUrl();
  },
  watch: {
    $route() {
      this.category = this.$route.params.category;
      this.total = parseInt(this.$route.params.total);
    this.page = parseInt(this.$route.params.page);
      this.fetchUrl();
    },
  },
  created() {
    this.forceRerender();
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    fetchUrl() {
      let poemss = poem.getNews(this.category, this.page);
      poemss.then((poems) => {
        poems.forEach((element) => {
          element.create_time = this.getFormatDuringTime(
            element.create_time + "000"
          );
          element.id = "/newsCenter/poem/" + element.id;
        });
        this.poems = poems;
      });
    },
    getFormatDuringTime(during) {
      let time = new Date(parseInt(during));
      let year = time.getFullYear();
      const month = (time.getMonth() + 1).toString().padStart(2, "0");
      const date = time.getDate().toString().padStart(2, "0");
      return year + "-" + month + "-" + date;
    },
    handleCurrentChange(val) {
      this.page = parseInt(val);
      //直接调用$router.push 实现携带参数的跳转
      this.$router.push({
        path: `/newsCenter/category/${this.category}/total/${this.total}/page/${val}`,
      });
    },
  },
  computed: {},
};
</script>
<style lang="scss">
.el-pagination {
  display: flex;
  justify-content: center;
}
</style>

<style lang="scss" scoped>
$baseColor: #e50039;
$asideColor: rgba(249, 249, 249, 255);
$itemColor: rgba(238, 238, 238, 255);

.subnews-poems {
  .subnews-poem {
    width: 95%;
    margin: 0 auto;

    a {
      color: black;
      font-size: 0.7rem;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      background-color: $itemColor;
      margin: 10px 0;
      border-radius: 5px;
      transition: all 0.2s;

      &:hover {
        transform: translate(0, -2px);
        background-color: rgb(241, 241, 241);
        box-shadow: 1px 1px 1px #ccc;
      }

      .poem-title {
        white-space: nowrap;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

.pagination {
  //   width: 400px;
  margin: 20px auto 0;
}
</style>