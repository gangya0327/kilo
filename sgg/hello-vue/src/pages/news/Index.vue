<template>
  <div>
    <h2>我是新闻</h2>
    <ul>
      <li v-for="item in list" :key="item.id">
        <router-link :to="{
          name: 'newDetail',
          // query: { id: item.id, name: item.name, content: item.content },
          params: { id: item.id, name: item.name, content: item.content }
        }">{{ item.name }}</router-link>
      </li>
      <li>
        <router-link :to="{
          path: '/news/detail/a/b/c',
        }">测试新闻</router-link>
      </li>
    </ul>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const list = reactive([
  { id: 1, name: '加沙重建计划引发争议', content: '法德意英四国外长支持由埃及起草的加沙重建计划，预计投资530亿美元，旨在改善巴勒斯坦人生活条件。然而，美国总统特朗普反对该计划，建议将加沙巴勒斯坦人迁往埃及和约旦，引发国际争议', },
  { id: 2, name: '中国可重复使用火箭技术突破', content: '我国多款可重复使用火箭计划于2025年首飞或试验，包括朱雀三号、天龙三号等。中国航天科技集团表示，相关技术已进入关键突破阶段，旨在降低太空探索成本并提升发射效率' },
  { id: 3, name: '阿里云开源高性能推理模型', content: '阿里云推出通义千问QwQ-32B模型，仅用320亿参数即可媲美DeepSeek-R1（激活参数370亿）的性能。该模型已开源，适用于复杂推理任务，推动AI技术普惠化' },
  { id: 4, name: '鸿蒙智行新车开启预订', content: '华为鸿蒙智行发布2025款问界M9和M8，预售价分别为47.8万元和36.8万元起，分别于本月和4月上市。M8满油满电综合续航达1526公里，主打家庭智慧出行场景' },
])
</script>

<style scoped>
.content {
  width: 50%;
  margin-left: 30px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px #aaa;
}
</style>