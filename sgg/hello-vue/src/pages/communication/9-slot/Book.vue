<template>
  <div>
    <h3>Books</h3>
    <!-- <ol>
      <li v-for="item in books" :key="item.name">
        <div>{{ item.name }}</div>
      </li>
    </ol> -->
    <slot name="abc" :shu="books"></slot>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const books = reactive([
  {
    name: '人生拒绝清单',
    icon: 'https://img1.doubanio.com/view/subject/l/public/s35074299.jpg',
  },
  {
    name: '月亮与篝火',
    icon: 'https://img9.doubanio.com/view/subject/l/public/s35081646.jpg'
  },
  {
    name: '中国古典文学讲义',
    icon: 'https://img9.doubanio.com/view/subject/l/public/s35090864.jpg'
  },
  {
    name: '苹果不会落下',
    icon: 'https://img1.doubanio.com/view/subject/l/public/s35085369.jpg'
  },
  {
    name: '夏与冬的奏鸣曲',
    icon: 'https://img9.doubanio.com/view/subject/l/public/s35081395.jpg'
  },
])
</script>

<style scoped></style>