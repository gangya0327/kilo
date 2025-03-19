(async function () {
  // 获取英雄列表
  async function getData() {
    return await fetch('https://study.duyiedu.com/api/citylist')
      .then((res) => res.json())
      .then((r) => r.data);
  }

  const doms = {
    selectProvince: document.getElementById('selectProvince'),
    selectCity: document.getElementById('selectCity'),
    selectArea: document.getElementById('selectArea'),
  };

  const data = await getData();
  fillSelect(doms.selectProvince, data);
  fillSelect(doms.selectCity, []);
  fillSelect(doms.selectArea, []);

  function fillSelect(select, list) {
    if (list.length === 0) {
      select.classList.add('disabled');
    } else {
      select.classList.remove('disabled');
    }
    const name = select.dataset.name;
    const span = select.querySelector('.title span');
    span.innerText = `请选择${name}`;

    // 将填充的数据，添加到 dom 对象的属性 data 中
    select.data = list;

    const ul = select.querySelector('.options');
    ul.innerHTML = list.map((o) => `<li>${o.label}</li>`).join('');
  }

  regCommonEvent(doms.selectProvince);
  regCommonEvent(doms.selectCity);
  regCommonEvent(doms.selectArea);

  regProvinceEvent();
  regCityEvent();

  // 注册公共事件
  function regCommonEvent(select) {
    const title = select.querySelector('.title');
    title.addEventListener('click', function () {
      if (select.classList.contains('disabled')) return false;
      
      const expands = document.querySelectorAll('.select.expand');
      for (let o of expands) {
        o !== select && o.classList.remove('expand');
      }
      select.classList.toggle('expand');
    });

    const ul = select.querySelector('.options');
    ul.addEventListener('click', function (e) {
      if (e.target.tagName !== 'LI') return false;

      const active = select.querySelector('li.active');
      active && active.classList.remove('active');
      const li = e.target;
      li.classList.add('active');
      // 更改 title 文本
      const span = select.querySelector('.title span');
      span.innerText = li.innerText;
      // 折叠下拉列
      select.classList.remove('expand');
    });
  }

  // 注册省份点击事件
  function regProvinceEvent() {
    const ul = doms.selectProvince.querySelector('.options');
    ul.addEventListener('click', function (e) {
      if (e.target.tagName !== 'LI') return false;

      const li = e.target;
      const pr = doms.selectProvince.data.find((o) => o.label === li.innerText);

      fillSelect(doms.selectCity, pr.children);
      fillSelect(doms.selectArea, []);
    });
  }
  // 注册城市点击事件
  function regCityEvent() {
    const ul = doms.selectCity.querySelector('.options');
    ul.addEventListener('click', function (e) {
      if (e.target.tagName !== 'LI') return false;

      const li = e.target;
      const ct = doms.selectCity.data.find((o) => o.label === li.innerText);

      fillSelect(doms.selectArea, ct.children);
    });
  }
})();
