function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

var dTimer = null;
function debounce(cb) {
  if (dTimer) return;
  dTimer = setTimeout(() => {
    cb.call(this, arguments);
    dTimer = null;
  }, 5);
}

// 初始化数据图片
var imgs = {
  small: ['1-s.jpeg', '2-s.jpeg', '3-s.png', '4-s.png'], // 小图
  middle: ['1-m.jpeg', '2-m.jpeg', '3-m.png', '4-m.png'], // 中图
  large: ['1-l.jpeg', '2-l.jpeg', '3-l.png', '4-l.png'], // 大图
};

var container = $('.container');
var largeImg = $('.right-img');
var middleImg = $('.left-img');
var smallImg = $('.img-list');
var mask = $('.mask');

function init() {
  // 初始化所有缩略图
  var str = '';
  for (var i = 0; i < imgs.small.length; i++) {
    str += '<li style="background-image: url(./img/' + imgs.small[i] + ')"></li>';
  }
  smallImg.innerHTML = str;
  // 默认选中第一张图片
  $('.img-list li').style.border = '2px solid #3d3';
}

function bindEvent() {
  // 点击缩略图切换图片
  smallImg.onclick = function (e) {
    if (e.target.tagName === 'LI') {
      var lis = $$('.img-list li');
      for (var i = 0; i < lis.length; i++) {
        lis[i].style.border = '2px solid #ddd';
      }
      e.target.style.border = '2px solid #3d3';
      // var index = [].indexOf.call(lis, e.target);
      var index = Array.from(lis).indexOf(e.target);

      middleImg.style.backgroundImage = 'url(./img/' + imgs.middle[index] + ')';
      largeImg.style.backgroundImage = 'url(./img/' + imgs.large[index] + ')';
    }
  };
  // 移动遮罩层
  var canMove = true;
  middleImg.onmousemove = function (e) {
    if (!canMove) return;
    largeImg.style.opacity = 1;
    debounce(() => {
      mask.style.opacity = 0.3;
      var left = e.clientX - middleImg.offsetLeft - mask.offsetWidth / 2;
      var top = e.clientY - middleImg.offsetTop - mask.offsetHeight / 2;
      if (left <= 0) {
        left = 0;
      }
      if (top <= 0) {
        top = 0;
      }
      if (left >= middleImg.offsetWidth - mask.offsetWidth) {
        left = middleImg.offsetWidth - mask.offsetWidth;
      }
      if (top >= middleImg.offsetHeight - mask.offsetHeight) {
        top = middleImg.offsetHeight - mask.offsetHeight;
      }
      mask.style.left = left + 'px';
      mask.style.top = top + 'px';

      var largeLeft = (left / (420 - 230)) * (1080 - 420);
      var largeTop = (top / (800 - 230)) * (1920 - 800);
      largeImg.style.backgroundPositionX = -largeLeft + 'px';
      largeImg.style.backgroundPositionY = -largeTop + 'px';
    });
  };
  middleImg.onmouseleave = function () {
    if (!canMove) return;
    largeImg.style.opacity = 0;
  };
  middleImg.onclick = function () {
    canMove = !canMove;
  };
}

init();
bindEvent();
