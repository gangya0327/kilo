<template>
  <div>
    <div class="talk">
      <button @click="getWords">生成一句话</button>
      <ul>
        <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useLoveTalkStore } from '@/store/loveTalk';

const loveTalkStore = useLoveTalkStore()

const talkList = loveTalkStore.talkList

async function getWords() {
  const result = await axios.get('https://v1.hitokoto.cn/?c=f&encode=text')
  console.log('result :>> ', result);
  talkList.unshift({ id: talkList.length + 1, title: result.data })
}

loveTalkStore.$subscribe((mutate, state) => {
  console.log('count change', state);
  localStorage.setItem('talkList', JSON.stringify(talkList))
})
</script>

<style scoped>
.talk {
  padding: 10px;
  background: #f98;
  border-radius: 10px;
  box-shadow: 0 0 10px #555
}
</style>