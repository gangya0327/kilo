var doms = {
  video: document.querySelector('video'),
  play: document.querySelector('#play'),
  progress: {
    range: document.querySelector('#progress'), // 进度条
    current: document.querySelector('#current'), // 当前播放时间
    total: document.querySelector('#total'), // 总时间
  },
  rate: document.querySelector('#rate'), // 播放倍率
  volume: {
    range: document.querySelector('#volume input'), // 滑动块
    text: document.querySelector('#volume span'), // 显示音量
  },
  buttons: {
    save: document.querySelector('#save'), // 保存按钮
    load: document.querySelector('#load'), // 加载按钮
  },
  controls: document.querySelectorAll('.controls'),
};

// 初始化
doms.video.onloadeddata = init;

function init() {
  setProgress();
  setRate();
  setVolume();
  for (var i = 0; i < doms.controls.length; i++) {
    doms.controls[i].style.display = 'block';
  }
}

// 根据当前视频的进度，设置进度条的状态
function setProgress() {
  // 设置文本
  doms.progress.current.innerHTML = format(doms.video.currentTime);
  doms.progress.total.innerHTML = format(doms.video.duration);
  // 设置进度
  doms.progress.range.value = (doms.video.currentTime / doms.video.duration) * 100;
}

// 设置播放倍率
function setRate() {
  var btns = doms.rate.querySelectorAll('button');
  for (var i = 0; i < btns.length; i++) {
    var r = btns[i].dataset.rate;
    if (+r === doms.video.playbackRate) {
      btns[i].classList.add('active');
    } else {
      btns[i].classList.remove('active');
    }
  }
}

// 设置音量
function setVolume() {
  var percent = Math.floor(doms.video.volume * 100);
  if (doms.video.muted) {
    percent = 0;
  }
  // 设置文本
  doms.volume.text.innerHTML = percent + '%';
  // 设置进度
  doms.volume.range.value = percent;
}

function format(sec) {
  var h = Math.floor(sec / 3600);
  var m = Math.floor((sec - h * 3600) / 60);
  var s = Math.floor(sec - h * 3600 - m * 60);
  var res = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  return res;
}

doms.play.onclick = function () {
  if (doms.video.paused) {
    doms.video.play();
  } else {
    doms.video.pause();
  }
};

doms.progress.range.oninput = function () {
  doms.video.currentTime = (this.value / 100) * doms.video.duration;
  setProgress();
};

doms.video.ontimeupdate = function () {
  setProgress();
};

var rateBtns = doms.rate.querySelectorAll('button');
for (var i = 0; i < rateBtns.length; i++) {
  rateBtns[i].onclick = function (e) {
    doms.video.playbackRate = e.target.dataset.rate;
    setRate();
  };
}

doms.volume.range.oninput = function () {
  doms.video.volume = this.value / 100;
  setVolume();
};

doms.buttons.save.onclick = function () {
  var data = {
    currentTime: doms.video.currentTime,
    rate: doms.video.playbackRate,
    volume: doms.video.volume,
  };
  localStorage.setItem('data', JSON.stringify(data));
  doms.video.pause();
  alert('保存成功');
};

doms.buttons.load.onclick = function () {
  var data = JSON.parse(localStorage.getItem('data'));
  doms.video.currentTime = data.currentTime;
  doms.video.playbackRate = data.rate;
  doms.video.volume = data.volume;
  setProgress();
  setRate();
  setVolume();
  doms.video.play();
};
