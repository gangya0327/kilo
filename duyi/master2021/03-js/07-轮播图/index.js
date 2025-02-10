function $(selector) {
  return document.querySelector(selector);
}

function _createImg(url) {
  var img = document.createElement('img');
  img.src = url;
  img.className = 'carousel-item';
  doms.carouselList.appendChild(img);
}

function _createIndicator() {
  var div = document.createElement('div');
  div.className = 'indicator-item';
  doms.indicator.appendChild(div);
}

var curIndex = 0;
var doms = {
  carousel: $('.carousel-container'),
  carouselList: $('.carousel-list'),
  arrowLeft: $('.arrow-left'),
  arrowRight: $('.arrow-right'),
  indicator: $('.indicator'),
};
var containerWidth = doms.carousel.clientWidth;
var isPlaying = false; // 是否正在播放动画
var urls = ['./img/1.jpeg', './img/2.jpeg', './img/3.jpeg', './img/4.jpeg'];

function init() {
  for (var i = 0; i < urls.length; i++) {
    // 创建图片
    _createImg(urls[i]);

    // 创建指示器
    _createIndicator();
  }
  _createImg(urls[0]);
  doms.carouselList.style.width = doms.carouselList.children.length + '00%';
  setIndicatorStatus();
}

// 设置指示器状态
function setIndicatorStatus() {
  // 清除所有指示器状态
  var indicatorItems = doms.indicator.children;
  for (var i = 0; i < indicatorItems.length; i++) {
    indicatorItems[i].className = 'indicator-item';
  }
  // 激活当前指示器
  var index = curIndex % urls.length;
  indicatorItems[index].className = 'indicator-item active';
}

init();

// 下一张
function moveTo(newIndex, onend) {
  if (isPlaying) return;
  var from = parseInt(doms.carouselList.style.marginLeft) || 0;
  var to = -newIndex * containerWidth;

  createAnimation({
    from,
    to,
    total: 500,
    onmove: function (n) {
      doms.carouselList.style.marginLeft = n + 'px';
    },
    onend: function () {
      isPlaying = false;
      onend && onend();
    },
  });
  curIndex = newIndex;
  setIndicatorStatus();
}

// 处理指示器的点击事件
for (var i = 0; i < doms.indicator.children.length; i++) {
  (function (i) {
    doms.indicator.children[i].onclick = function () {
      moveTo(i);
    };
  })(i);
}

function next() {
  var newIndex = curIndex + 1;
  var onend;
  if (newIndex === doms.carouselList.children.length - 1) {
    onend = function () {
      doms.carouselList.style.marginLeft = 0;
      curIndex = 0;
    };
  }
  moveTo(newIndex, onend);
}

function prev() {
  var newIndex = curIndex - 1;
  if (newIndex < 0) {
    var maxIndex = doms.carouselList.children.length - 1;
    doms.carouselList.style.marginLeft = -maxIndex * containerWidth + 'px';
    newIndex = maxIndex - 1;
  }
  moveTo(newIndex);
}

doms.arrowLeft.onclick = prev;
doms.arrowRight.onclick = next;

var duration = 2000;
var timer;
function autoStart() {
  if (timer) return;
  timer = setInterval(next, duration);
}
function autoStop() {
  clearInterval(timer);
  timer = null;
}

autoStart();
doms.carousel.onmouseenter = autoStop;
doms.carousel.onmouseleave = autoStart;
