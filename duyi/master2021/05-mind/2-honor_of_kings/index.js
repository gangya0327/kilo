(async function () {
  // 获取英雄列表
  async function getHeroes() {
    return await fetch('https://study.duyiedu.com/api/herolist')
      .then((res) => res.json())
      .then((r) => r.data);
  }

  const doms = {
    ul: document.querySelector('.list'),
    radios: document.querySelectorAll('.radio'),
    radioAll: document.querySelector('.radio[data-type=all]'),
    keyword: document.querySelector('.input input'),
  };
  // 生成英雄列表
  const allHeroes = await getHeroes();
  setHeroesHTML(allHeroes);

  function setHeroesHTML(heroes) {
    const result = heroes
      .map(
        (h) => `
        <li>
        <a href="https://pvp.qq.com/web201605/herodetail/${h.id_name}.shtml" target="_blank">
          <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${h.ename}/${h.ename}.jpg" alt="">
          <span>${h.cname}</span>
        </a>
      </li>
      `
      )
      .join('');
    doms.ul.innerHTML = result;
  }

  for (let radio of doms.radios) {
    radio.addEventListener('click', function () {
      // 设置选中样式
      checkRadio(this);
      // 查询英雄
      searchHero(this);
    });
  }

  // 监听搜索框的输入事件
  doms.keyword.addEventListener('input', function () {
    checkRadio(doms.radioAll);
    const heroes = allHeroes.filter((h) => h.cname.includes(this.value));
    setHeroesHTML(heroes);
  });

  function searchHero(radio) {
    let heroes;
    const type = radio.dataset.type;
    const value = radio.dataset.value;
    if (type === 'all') {
      heroes = allHeroes;
    } else if (type === 'pay_type') {
      heroes = allHeroes.filter((h) => h.pay_type === +value);
    } else {
      heroes = allHeroes.filter((h) => h.hero_type === +value || h.hero_type2 === +value);
    }
    setHeroesHTML(heroes);
  }

  function checkRadio(radio) {
    const checkedRadio = document.querySelector('.radio.checked');
    checkedRadio && checkedRadio.classList.remove('checked');
    radio.classList.add('checked');
  }
})();
