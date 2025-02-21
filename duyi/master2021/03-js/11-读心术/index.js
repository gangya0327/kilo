var maxImgIndex = 15;
var curTargetIndex = null;
var isGameOver = false;

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

var panel = $('.panel'); // 整个魔盘
var initImg = $('#initImg'); // 初始图片
var resultImg = $('#resultImg'); // 结果图片
var dictionary = $('.dictionary'); // 字典表

// 获取随机数
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function init() {
  // 随机取一张作为结果图片
  curTargetIndex = getRandom(1, maxImgIndex);
  panel.style.transition = 'all 2s';
  panel.style.transform = 'rotate(180deg)';

  // 清空上一次字典表
  dictionary.innerHTML = '';
  for (var i = 0; i < 100; i++) {
    var imgIndex = null;
    if (i % 9 === 0) {
      imgIndex = curTargetIndex;
    } else {
      imgIndex = getRandom(1, maxImgIndex);
    }
    dictionary.innerHTML += `
    <div class="">
    <span class="number">${i + 1}</span>
    <span class="img">
    <img src="./img/${imgIndex}.png"/>
    </span>
    </div>
    `;
  }
}

init();

panel.onclick = function () {
  console.log('isGameOver :>> ', isGameOver);
  if (isGameOver) {
    if (confirm('游戏结束，是否重新开始？')) {
      panel.removeEventListener('transitionend', panelHandle);
      panel.style.transform = 'rotate(0)';
      initImg.src = `./img/six.png`;
      init();
      isGameOver = false;
    }
  } else {
    panel.style.transform = 'rotate(0)';
    panel.addEventListener('transitionend', panelHandle);
  }
};

function panelHandle() {
  initImg.src = `./img/${curTargetIndex}.png`;
  isGameOver = true;
}
