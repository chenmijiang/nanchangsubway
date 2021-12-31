<template>
  <div class="section-box-subtime">
    <!-- 地铁时刻表切换按钮 -->
    <div class="subtime-lines">
      <button
        :class="{ 'line-button': true, active: num == index }"
        v-for="(line, index) of lines"
        :key="index"
        @click="change(index)"
      >
        {{ line }}
      </button>
    </div>
    <!-- 地铁时刻表 -->
    <div class="subtime-shows">
      <el-table
        :data="subTimesData"
        height="500"
        border
        style="width: 100%; font-size: 0.7rem"
        class="subtime-line-show"
        @header-click="headerClick"
      >
        <el-table-column prop="state" label="车站" width="180" align="center">
        </el-table-column>
        <el-table-column :label="lineStyle" width="180" align="center">
          <el-table-column
            prop="first"
            :label="position[0]"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="last"
            :label="position[1]"
            align="center"
          ></el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import line1 from "@/assets/json/line1.json";
import line2 from "@/assets/json/line2.json";
import line3 from "@/assets/json/line3.json";
import line4 from "@/assets/json/line4.json";

export default {
  name: "SubRunTime",
  data: function () {
    return {
      num: 0,
      lines: ["1号线", "2号线", "3号线", "4号线"],
      firstTime: true,
      position: [],
      subTimesTable: [],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  methods: {
    change(index) {
      // 处理列车类型切换 ["1号线", "2号线", "3号线", "4号线"]
      this.num = index;
      switch (index) {
        case 0:
          this.position = line1.position;
          this.subTimesTable = line1.states;
          break;
        case 1:
          this.position = line2.position;
          this.subTimesTable = line2.states;
          break;
        case 2:
          this.position = line3.position;
          this.subTimesTable = line3.states;
          break;
        case 3:
          this.position = line4.position;
          this.subTimesTable = line4.states;
          break;
      }
    },
    headerClick(column) {
      // 处理班车类型切换[首班车，末班车]
      if (column.colSpan == 2 && column.level == 1) {
        this.firstTime = !this.firstTime;
      }
    },
  },
  created() {
    this.position = line1.position;
    this.subTimesTable = line1.states;
  },
  computed: {
    lineStyle: function () {
      return this.firstTime ? "首班车" : "末班车";
    },
    subTimesData() {
      let data = [];
      this.subTimesTable.forEach((ele) => {
        let node = {};
        node.state = ele.state;
        node.first = this.firstTime ? ele.head[0] : ele.foot[0];
        node.last = this.firstTime ? ele.head[1] : ele.foot[1];
        data.push(node);
      });
      return data;
    },
  },
};
</script>

<style lang="scss" scoped>
$colors: #e50039, #f3cd3d, #0080c7, #1ba86c;

.section-box-subtime {
  width: 85%;
  margin: 2rem auto 0;
}

@mixin hoverColor($color, $shadowColor) {
  box-shadow: 2px 2px 8px $shadowColor, -2px -2px 8px $shadowColor;
  background-color: $color;
  color: #fff;
}

.subtime-lines {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;

  .line-button {
    font-size: 0.7rem;
    padding: 5px 40px;
    border: none;
    border-radius: 5px;
    background-color: #f2f2f2;
    box-shadow: 2px 2px 2px #c6c6c6;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;

    $count: 1;
    @each $color in $colors {
      &:nth-child(#{$count}) {
        &:hover {
          @include hoverColor($color, $color);
        }
        &.active {
          @include hoverColor($color, $color);
        }
      }
      $count: $count + 1;
    }
  }
}
</style>