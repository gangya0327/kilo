function createAnimation(options) {
  var from = options.from;
  var to = options.to;
  var total = options.total || 1000; // 总时长
  var duration = options.duration || 10; // 间隔时长
  var times = total / duration; // 总次数
  var curTimes = 0; // 当前次数
  var distance = (to - from) / times; // 每次变化的距离

  var timerId = setInterval(() => {
    from += distance;
    curTimes++;
    if (curTimes >= times) {
      from = to;
      clearInterval(timerId);
      options.onend && options.onend();
    }
    options.onmove && options.onmove(from);
  }, duration);
}

// createAnimation({
//   from: 0,
//   to: 190,
//   total: 300,
//   duration: 10,
//   onmove: function (n) {
//     console.log('n :>> ', n);
//   },
//   onend: function () {},
// });
