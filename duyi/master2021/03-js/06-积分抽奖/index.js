(function () {
  var number = 2;
  var numberText = document.querySelector('#number');
  var start = document.querySelector('#start');
  var prizes = document.querySelectorAll('.prize');
  var index = -1;
  var curIndex = null;
  var timer = null;
  var dialog = document.querySelector('#dialog');
  var text = document.querySelector('#text');
  var close = document.querySelector('#close');
  var confirm = document.querySelector('#confirm');

  var init = function () {
    numberText.innerHTML = number;
    initEvent();
  };

  var initEvent = function () {
    start.onclick = startFn; // 开始抽奖
    close.onclick = closeDialog; // 关闭弹窗
    confirm.onclick = function () {
      closeDialog();
      startFn();
    }; // 再来一次
  };
  var startFn = function () {
    if (timer) return;
    if (number === 0) return;
    number--;
    numberText.innerHTML = number;

    var num = 1000 + Math.floor(Math.random() * 3000);
    timer = setInterval(() => {
      num -= 200;
      if (num <= 0) {
        clearInterval(timer);
        timer = null;
        openDialog();
        return;
      }
      curIndex = ++index % prizes.length;
      prizes[curIndex === 0 ? prizes.length - 1 : curIndex - 1].classList.remove('active');
      prizes[curIndex].classList.add('active');
    }, 100);
  };
  var openDialog = function () {
    if (number === 0) {
      confirm.innerHTML = '关闭弹窗';
    }
    var prizeText = prizes[curIndex].querySelector('span').innerHTML;
    text.innerHTML = '恭喜您获得了 ' + prizeText;

    dialog.style.display = 'block';
  };
  var closeDialog = function () {
    dialog.style.display = 'none';
  };
  init();
})();
