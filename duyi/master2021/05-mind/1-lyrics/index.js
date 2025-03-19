async function getLyrics() {
  // return await fetch('https://study.duyiedu.com/api/lyrics')
  // return await fetch('./唯一-告五人.lrc')
  return await fetch('./lyrics.json')
    .then((res) => res.json())
    .then((r) => r.data);
}

const doms = {
  ul: document.querySelector('.lrc'),
  audio: document.querySelector('audio'),
};
let lrcData; // 歌词数据
const size = {
  liHeight: 30,
  containerHeight: 300,
};
async function init() {
  doms.audio.volume = 0.3;
  // doms.audio.currentTime = 25;

  const lrc = await getLyrics();
  lrcData = lrc.split('\n').map((l) => {
    const parts = l.split(']');
    const time = parts[0].slice(1).split(':');
    return {
      word: parts[1],
      time: Number(time[0]) * 60 + Number(time[1]),
    };
  });
  console.log('lrcData :>> ', lrcData);

  const lrcHTML = lrcData.map((l) => `<li>${l.word}</li>`).join('');
  doms.ul.innerHTML = lrcHTML;
}

init();

doms.audio.addEventListener('timeupdate', function () {
  setStatus(this.currentTime);
});

function setStatus(currentTime) {
  // currentTime -= 0.5;
  const index = lrcData.findIndex((l) => l.time > currentTime);
  console.log(441, index);
  if (index < 0) return;
  doms.ul.children[index - 2]?.classList.remove('active');
  doms.ul.children[index - 1]?.classList.add('active');

  let top = size.liHeight * index;
  doms.ul.style.transform = `translateY(${210 - top}px)`;
}
