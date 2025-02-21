function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

var imgBox = $('.imgBox');
var imgBlock = $('.imgBlock');
var imgGap = $('.imgGap');
var title = $('.imgContainer h3');
var slider = $('.slider');
var sliderSpan = $('.slider span');
var sliderBtn = $('.slider button');

function init() {
  // 生成随机图片
  var imgArr = ['1_resized.jpg', '2_resized.jpg', '3_resized.jpg', '4_resized.jpg'];
  var randomImg = Math.floor(Math.random() * imgArr.length);
  imgBox.style.backgroundImage = `url(./img/${imgArr[randomImg]})`;
  imgBlock.style.backgroundImage = `url(./img/${imgArr[randomImg]})`;

  var heightRange = imgBox.offsetHeight - imgBlock.offsetHeight;
  var widthRange = imgBox.offsetWidth / 2 - imgBlock.offsetWidth;

  // 生成随机 left 和 top
  var left = Math.random() * widthRange + imgBox.offsetWidth / 2;
  var top = Math.random() * heightRange;

  imgGap.style.left = left + 'px';
  imgGap.style.top = top + 'px';

  imgBlock.style.left = '0';
  imgBlock.style.top = top + 'px';
  imgBlock.style.backgroundPosition = `-${left}px -${top}px`;

  sliderBtn.onmousedown = function (e) {
    imgBlock.style.opacity = 1;
    imgBlock.style.transition = 'none';
    sliderBtn.style.transition = 'none';

    title.innerHTML = '请将滑块拖动到图片上';
    sliderSpan.style.opacity = 0;

    slider.onmousemove = function (ev) {
      var newLeft = ev.clientX - slider.offsetLeft - e.offsetX;
      if (newLeft < -2) {
        newLeft = -2;
      } else if (newLeft > imgBox.offsetWidth - imgBlock.offsetWidth) {
        newLeft = imgBox.offsetWidth - imgBlock.offsetWidth;
      }
      imgBlock.style.left = newLeft + 'px';
      sliderBtn.style.left = newLeft + 'px';
    };
    document.onmouseup = function () {
      var diffLeft = imgGap.offsetLeft - imgBlock.offsetLeft;
      if (diffLeft < 5 && diffLeft > -5) {
        imgBlock.style.opacity = 0;
        imgGap.style.opacity = 0;
        title.innerHTML = '验证成功';
        title.style.color = 'green';
        slider.onmousemove = sliderBtn.onmousedown = null;
      } else {
        imgBlock.style.left = 0;
        sliderBtn.style.left = 0;
        imgBlock.style.transition = 'all .5s';
        sliderBtn.style.transition = 'all .5s';
        title.innerHTML = '验证失败';
        title.style.color = 'red';
        slider.onmousemove = document.onmouseup = null;
      }
    };
  };
}

init();

$('.changeImg').onclick = init;
