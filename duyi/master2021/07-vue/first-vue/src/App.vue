<template>
  <div>
    <div class="part">
      <div class="title">组件</div>
      <Avatar url="https://i.postimg.cc/zDRPKpdQ/avatar2.png" :size="120" />
      <Avatar url="https://i.postimg.cc/nzLfn7pJ/pink.png" :size="80" />
      <Icon type="icon-home" />
      <Icon type="icon-date" />
    </div>

    <div class="part">
      <div class="title">分页组件</div>
      <Pager :current="current" :total="total" @pageChange="handlePageChange" />
      <Pager :current="17" :total="182" />
      <Pager :current="3" :total="182" />
    </div>

    <div class="part">
      <div class="title">v-if 与 v-show</div>
      <h2 v-if="score >= 80">优</h2>
      <h2 v-else-if="score >= 60">良</h2>
      <h2 v-else>不及格</h2>

      <button @click="visible = !visible">切换</button>
      <p v-if="visible">一段 if 内容</p>
      <p v-show="visible">一段 show 内容</p>
    </div>


  </div>
</template>

<script>
import Avatar from './components/Avatar/index';
import Icon from './components/Icon/index';
import Pager from './components/Pager';

export default {
  components: { Avatar, Icon, Pager },
  data() {
    return {
      score: 70,
      visible: true,
      current: 8,
      total: 206
    }
  },
  methods: {
    handlePageChange(newPage) {
      console.log('page change', newPage);
      this.current = newPage
    }
  }
}
</script>

<style scoped>
.part {
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;

  .title {
    font-weight: bold;
  }
}
</style>