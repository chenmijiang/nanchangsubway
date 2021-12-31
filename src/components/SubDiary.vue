<template>
  <div class="section-box-subdiary">
    <div class="block">
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubAnimation",
  data() {
    return {
      reverse:true,
      activities: [
        {
          content:
            "2008年7月30日南昌市地铁筹建小组召开了第一次会议，南昌的地铁建设被列入政府重要议程",
          timestamp: "2008年以前：最初规划",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content:
            "2009年7月国务院批准《南昌市城市轨道交通近期建设规划(2009-2016年)》，随后2009年7月29日南昌城市快速轨道交通工程开工奠基",
          timestamp: "2008－2013：申报和建设",
        },
        {
          content:
            "在南昌政府2013年4月份表态之后于2013年5月31日公布三套第二轮建设的方案，定于2014到2020年之间建设",
          timestamp: "2014年起：第二轮建设 开始运营",
        },
        {
          content: "南昌地铁1号线开通运营",
          timestamp: "2015年12月26日",
          color: "#e50039",
          size: "large",
        },
        {
          content:
            "南昌市公布了《南昌市城市轨道交通第二期建设规划调整（2020-2025）》的方案，本次方案对1、2号线延伸进行了调整",
          timestamp: "2018年11月",
        },
        {
          content:
            "南昌地铁2号线首通段（地铁大厦-南路、全长19.63公里，设站17座）开通",
          timestamp: "2017年8月18日",
          color: "#f3cd3d",
          size: "large",
        },
        {
          content:
            "南昌地铁2号线后通段（地铁大厦-辛家庵，全长11.88公里，设站11座）通车",
          timestamp: "2019年6月30日",
          color: "#f3cd3d",
          size: "large",
        },
        {
          content: "南昌地铁3号线建成通车试运营",
          timestamp: "2020年12月26日",
          color: "#0080c7",
          size: "large",
        },
        {
          content: "南昌地铁4号线通车运营",
          timestamp: "2021年12月26日",
          color: "#1ba86c",
          size: "large",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.block {
  width: 60%;
  margin: 0 auto;
}
</style>