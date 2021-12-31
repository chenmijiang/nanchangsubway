<template>
  <div class="section-box-subpoem" v-html="poemcontent">
    <!-- 这里是一篇新闻，需要传入id号，将会从服务器里面获取信息 -->
  </div>
</template>

<script>
import poem from "@/assets/poem.js";

export default {
  name: "SubPoem",
  data() {
    return {
      poemid: 6212,
      poemcontent: "",
    };
  },
  mounted() {
    // console.log(this.$route);
    this.poemid = this.$route.params.poem;
    this.fetchUrl();
  },
  watch: {
    $route: {
      handler() {
        this.poemid = this.$route.params.poem;
        this.fetchUrl();
        //深度监听，同时也可监听到param参数变化
      },
      deep: true,
    },
  },
  methods: {
    fetchUrl() {
      let poemss = poem.getPoem(this.poemid);
      // poem.getPoem(this.poemid)
      poemss.then((poems) => {
        this.poemcontent = poems;
      });
    },
  },
  computed: {},
};
</script>

<style lang="scss">
.section-box-subpoem {
  font-size: 0.6rem;
  h2 {
    text-align: center;
    font-size: 1rem;
    font-weight: bolder;
  }
  .news_from {
    display: flex;
    width: 400px;
    margin: 10px auto 20px;
    gap: 20px;
    font-size: 0.5rem;
    color: #5e5e5e;
    justify-content: center;
  }
  p {
    margin: 10px 0;
    img {
      width: 90%;
    }

    strong{
      font-weight: bold;
    }
  }
}
</style>