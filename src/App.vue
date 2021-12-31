<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="/南昌地铁.png" alt="南昌地铁" srcset="" />
      </div>
      <div id="nav">
        <span
          v-for="(nav, index) of navs"
          :key="nav.link"
          @click="change(index)"
          :class="{ active: num == index }"
        >
          <router-link :to="nav.link">{{ nav.detail }}</router-link>
        </span>
      </div>
    </header>
    <router-view />
    <footer>
      <section class="gf-footer">
        <div class="gf-footer-left">
          <img src="/南昌地铁2.png" alt="南昌地铁" />
        </div>
        <div class="gf-footer-right">
          <div class="gf-footer-detail">
            <div class="gf-footer-detail-links">
              <span
                v-for="(nav, index) of navs"
                :key="nav.link"
                @click="change(index)"
              >
                <router-link :to="nav.link">{{ nav.detail }}</router-link>
              </span>
            </div>
          </div>
          <div class="gf-footer-more">
            <div class="gf-footer-more-links">
              <a
                href="https://github.com/Your-songs-are-so-good/"
                target="_blank"
                >关于</a
              >
              |
              <a href="mailTo:jack.chenyuana@gmail.com" target="_blank">联系</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>
<script>
export default {
  name: "App",
  watch: {
    $route(to) {
      let path = to.matched[0].path;
      this.paths.forEach((element, index) => {
        element.includes(path) ? (this.num = index) : 0;
      });
    },
  },
  data() {
    return {
      num: 0,
      navs: [
        {
          detail: "首页",
          link: "/",
        },
        {
          detail: "新闻中心",
          link: "/newsCenter/category/42/total/112/page/1",
        },
        {
          detail: "乘客服务",
          link: "/passengerService",
        },
        {
          detail: "地铁文化",
          link: "/subwayCulture",
        },
        {
          detail: "地铁旅游",
          link: "/subwayTour",
        },
      ],
      paths: [
        "/",
        "/newsCenter",
        "/passengerService",
        "/subwayCulture",
        "/subwayTour",
      ],
    };
  },
  methods: {
    change(index) {
      this.num = index;
    },
  },
};
</script>

<style lang="scss">
$base-Color: #e50039;
$base-font-color: #fff;

:root {
  font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));
}

* {
  box-sizing: border-box;
}

#app,
body,
html {
  width: 100%;
  min-width: 1000px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.home,
.newcenter,
.passengerserve,
.subwayculture,
.subwaytour {
  flex: 1;
}

header {
  display: flex;
  justify-content: space-between;

  background-color: $base-Color;
  color: $base-font-color;
  width: 100%;

  img {
    height: 60px;
    margin: 0 20px;
  }
}

#nav {
  padding: 10px;
  font-size: 0.8rem;
  margin-right: 2rem;
  span {
    display: inline-block;
    margin: 0 30px;
    a {
      font-weight: bold;
      color: $base-font-color;
      display: inline-block;
      padding: 5px;

      // &.router-link-exact-active.router-link-active {
      //   border-bottom: 1px solid $base-font-color;
      // }
    }
    &.active {
      border-bottom: 2px solid $base-font-color;
    }
  }
}

footer {
  width: 100%;
  height: 200px;
  background-color: #5f5f5f;

  .gf-footer {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    gap: 50px;
    width: 80%;
    margin: 0 auto;
    font-size: 0.7rem;
    text-align: right;

    img {
      height: 5rem;
      margin: 10px 100px;
    }
  }

  .gf-footer-right {
    color: $base-font-color;
    span {
      display: inline-block;
      &::after {
        content: " | ";
      }
      &:last-child:after {
        content: "";
      }
    }
    .detail-link,
    a {
      font-weight: bold;
      color: $base-font-color;
      display: inline-block;
      padding: 10px 5px;
    }
  }
}
</style>
