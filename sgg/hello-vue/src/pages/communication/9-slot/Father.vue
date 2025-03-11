<template>
  <div class="father">
    <h3>father</h3>
    <div class="content">
      <Child title="热门书籍">
        <span>你好，我是默认插槽</span>
        <template v-slot:s2>
          <span>好的，我是具名插槽 s2</span>
        </template>
      </Child>
      <Child title="热门网站" />
      <Child title="热门歌手" />
    </div>
    <hr>
    <Book>
      <template v-slot:abc="scope">
        <ol>
          <li v-for="item in scope.shu" :key="item.name">
            <div>{{ item.name }}</div>
          </li>
        </ol>
      </template>
    </Book>
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import Book from './Book.vue';
</script>

<style scoped>
.father {
  padding: 5px;
  border-radius: 5px;
  background: #5c8;
}

.content {
  display: flex;
}

.content>div {
  flex: 1;
  margin: 0 20px;
}
</style>
