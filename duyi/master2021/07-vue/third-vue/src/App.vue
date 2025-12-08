<template>
  <div id="app">
    <Avatar
      url="https://sns-webpic-qc.xhscdn.com/202512081713/e11682928b19ac989dc49f68a7ec1b3a/1040g00831kr2mded2u1g5pu41nuingh1gd0jvpg!nd_prv_wlteh_webp_3"
      :size="120" />

    <MyIcon icon="mdi:home"></MyIcon>
    <MyIcon icon="ant-design:aliwangwang-filled"></MyIcon>
    <MyIcon icon="material-symbols:in-home-mode-rounded"></MyIcon>

    <h3>The Outsiders：运动分析与锻炼负荷管理工具</h3>
    <p>The Outsiders 是针对运动、健身人士开发的运动分析类应用，它由 Gentler Streak 的团队开发，与后者相比， The Outsiders 更加偏向于运动表现、锻炼负荷和机能恢复等的管理。</p>
    <p>身心健康 / Wellbeing，通过采集健康应用中的心率、心率变异性、手腕温度、血氧浓度等等身体机能指标，进行简单的展示。最后的睡眠板块，简单地分析睡眠总时长、恢复性睡眠时长等关键数据和图表。</p>
    <p>表现 / Progress 页集中展现了过去 4
      周每天的训练趋势与负荷变化，并且以非常新颖的圆点图来示意展示，可以一眼看出锻炼量的趋势，非常直观。在图表中，我们还可以筛选锻炼负荷、锻炼时长、锻炼距离等更多维度的数据进行分析展示。接下来的强度分析 / Intensity
      Distribution 聚焦在有氧强度和心率区间的表现分析，以直观的柱状图等展示高有氧、普通有氧、低有氧运动的分布。不管是有氧减肥还是无氧增肌人士，都可以通过这个分布图来规划未来的运动分布。</p>

    <Pagination :current="current" :total="total" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Avatar from './components/Avatar.vue'
import MyIcon from './components/MyIcon.vue'
import Pagination from './components/Pagination.vue'

export default {
  name: 'App',
  components: { Avatar, MyIcon, Pagination },
  data() {
    return { current: 4, total: 83 }
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage
    }
  }
}
</script>
