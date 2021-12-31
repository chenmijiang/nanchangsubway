<template>
  <div class="newcenter">
    <div class="container">
      <div class="main">
        <!-- 轮播图：新闻图片 -->
        <section class="main-section section-subnewcenter">
          <div class="swap-bar">
            <el-carousel
              :interval="3000"
              arrow="always"
              indicator-position="none"
            >
              <el-carousel-item v-for="url in urls" :key="url">
                <div class="newcenter-img">
                  <img :src="url" alt="" lazy />
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </section>
        <el-container class="main-section section-subnews-contain">
          <el-aside width="30%" class="subnews-contain-aside">
            <!-- 侧边栏：新闻分类 -->
            <h3>新闻分类</h3>
            <ul class="aside-menu">
              <li
                class="menu-item"
                v-for="(menu, index) of menus"
                :key="menu.category"
                @click="change(index)"
                :class="{ active: num == index }"
              >
                <router-link :to="menu.category">{{ menu.detail }}</router-link>
              </li>
            </ul>
          </el-aside>
          <el-main class="subnews-contain-body">
            <!-- 主体：新闻简介、新闻内容 -->
            <router-view />
          </el-main>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCenter",
  data() {
    return {
      num: 0,
      urls: [
        "/newcenter4.png",
        "/newcenter3.png",
        "/newcenter1.png",
        "/newcenter2.png",
        "/newcenter5.png",
      ],
      menus: [
        {
          id: "42",
          detail: "全部新闻",
          category: "/newsCenter/category/42/total/112/page/1",
        },
        {
          id: "63",
          detail: "领导关怀",
          category: "/newsCenter/category/63/total/4/page/1",
        },
        {
          id: "64",
          detail: "公司动态",
          category: "/newsCenter/category/64/total/51/page/1",
        },
        {
          id: "65",
          detail: "文化建设",
          category: "/newsCenter/category/65/total/19/page/1",
        },
        {
          id: "66",
          detail: "党建工作",
          category: "/newsCenter/category/66/total/12/page/1",
        },
        {
          id: "118",
          detail: "小鲜鹭公益",
          category: "/newsCenter/category/118/total/3/page/1",
        },
        {
          id: "67",
          detail: "廉政信息",
          category: "/newsCenter/category/67/total/4/page/1",
        },
        {
          id: "116",
          detail: "精神文明建设",
          category: "/newsCenter/category/116/total/2/page/1",
        },
      ],
    };
  },
  mounted() {
    let path = window.location.pathname.split("/")[3];
    this.menus.forEach((element, index) => {
      element.id == path ? (this.num = index) : 0;
    });
  },
  // watch: {
  //   $route(to) {
  //     console.log(to);
  //     let path = to.params.category;
  //     this.menus.forEach((element, index) => {
  //       element.id == path ? (this.num = index) : 0;
  //     });
  //   },
  // },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    change(index) {
      this.num = index;
    },
  },
};
</script>
<style lang="scss" scoped>
$baseColor: #e50039;
$asideColor: rgba(249, 249, 249, 255);
$itemColor: rgba(238, 238, 238, 255);
$radius: 5px;

.main-section {
  min-height: 100px;
  width: 80%;
  min-width: 600px;
  margin: 0 auto 50px;

  &:first-child {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

.swap-bar {
  height: 300px;
  width: 100%;

  .el-carousel {
    border-radius: $radius;
  }

  .newcenter-img,
  img {
    width: 100%;
    height: 100%;
  }
}

.subnews-contain-aside {
  font-size: 0.8rem;
  background-color: $asideColor;
  margin-right: 5px;
  height: 420px;
  overflow: hidden;
  position: sticky;
  top: 0;
  border-radius: $radius;

  h3 {
    text-align: center;
    padding: 10px 0;
    font-weight: bold;
    color: #fff;
    background-color: $baseColor;
  }

  .menu-item {
    margin: 5px auto;
    width: 95%;
    border-radius: $radius;
    background: $itemColor;
    transition: all 0.2s;

    &:hover {
      background: rgb(241, 241, 241);
      transform: translate(0, -1px);
      box-shadow: 1px 1px 1px #ccc;
    }

    &.active {
      background: #ddd;
    }

    a {
      color: black;
      display: block;
      border-radius: $radius;
      padding: 5px 10px;
    }
  }
}

.subnews-contain-body {
  min-height: 500px;
  background-color: $asideColor;
  border-radius: $radius;
}
</style>