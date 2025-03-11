import mitt from 'mitt';

const emitter = mitt();

// 绑定事件
emitter.on('test', (data) => {
  console.log('test', data);
});

// setTimeout(() => {
//   emitter.emit('test', 'hello mitt');
// }, 2000);

export default emitter;
