var imgWidth = 220;
var container = document.getElementById('container');

function setPosition() {
  var info = cal();
  var arr = new Array(info.columnNumber);
  arr.fill(0); // 给数组填充0

  for (var i = 0; i < container.children.length; i++) {
    var img = container.children[i];
    var minTop = getMin(arr);
    img.style.top = minTop + 'px';
    var index = arr.indexOf(minTop);
    arr[index] += img.clientHeight + info.spaceWidth;
    var left = (index + 1) * info.spaceWidth + index * imgWidth;
    img.style.left = left + 'px';
  }

  var max = getMax(arr);
  container.style.height = max + 'px';
}

function cal() {
  var containerWidth = container.clientWidth;
  var columnNumber = Math.floor(containerWidth / imgWidth); // 列数
  var spaceNumber = columnNumber + 1; // 间隙数=列数+1
  var spaceWidth = (containerWidth - columnNumber * imgWidth) / spaceNumber; // 间隙宽度
  return { spaceWidth, columnNumber };
}

function getMin(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function getMax(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function createImgs() {
  for (var i = 1; i <= 25; i++) {
    var src = './img/' + i + '.jpeg';
    var img = document.createElement('img');
    img.src = src;
    img.style.width = imgWidth;
    // img.width = imgWidth;
    container.appendChild(img);
    img.onload = setPosition;
  }
}

var timer = null;
function bindEvent() {
  window.onresize = function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(setPosition, 200);
  };
}

function main() {
  // 加入图片元素
  createImgs();
  // 绑定事件
  bindEvent();
}

main();
