import { defineStore } from 'pinia';
import { reactive } from 'vue';

// const useLoveTalkStore = defineStore('talkList', {
//   state: () => {
//     return {
//       // talkList: [
//       //   { id: 1, title: '今天天气真不错' },
//       //   { id: 2, title: '你中午吃饭了吗' },
//       //   { id: 3, title: '我们一起去郊游吧' },
//       // ],
//       talkList: JSON.parse(localStorage.getItem('talkList') as string) || [],
//     };
//   },
// });

const useLoveTalkStore = defineStore('talkList', () => {
  const talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || []);
  return { talkList };
});

export { useLoveTalkStore };
