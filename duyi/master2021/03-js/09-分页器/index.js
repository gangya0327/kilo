/**
 * 创建分页器
 * @param {number} page 当前页码
 * @param {number} pageNumber 总页数
 * @param {number} mostNumber 中间最多显示的页数
 * @param {*} container 分页容器
 */
function createPager(page, pageNumber, mostNumber, container) {
  container.innerHTML = '';

  var divPager = document.createElement('div');
  divPager.className = 'pager';

  /**
   * 创建页码
   * @param {string} className 要挂载的样式
   * @param {string} text 文本
   * @param {number} newPage 点击跳转的页码
   */
  function createAnchor(className, text, newPage) {
    var a = document.createElement('a');
    a.className = className;
    a.innerText = text;
    divPager.appendChild(a);
    a.onclick = function () {
      // 跳转页码小于最小页，或大于最大页，或等于当前页
      if (newPage < 1 || newPage > pageNumber || newPage === page) return;
      console.log('page :>> ', page);
      createPager(newPage, pageNumber, mostNumber, container);
    };
  }

  // 首页和上一页
  if (page === 1) {
    createAnchor('disabled', '首页', 1);
    createAnchor('disabled', '上一页', page - 1);
  } else {
    createAnchor('', '首页', 1);
    createAnchor('', '上一页', page - 1);
  }
  // 中间的数字
  var min = Math.floor(page - mostNumber / 2);
  if (min < 1) {
    min = 1;
  }
  var max = min + mostNumber - 1;
  if (max > pageNumber) {
    max = pageNumber;
  }
  for (var i = min; i <= max; i++) {
    if (i === page) {
      createAnchor('active', i, i);
    } else {
      createAnchor('', i, i);
    }
  }

  // 下一页和尾页
  if (page === pageNumber) {
    createAnchor('disabled', '末页', pageNumber);
    createAnchor('disabled', '下一页', page + 1);
  } else {
    createAnchor('', '下一页', page + 1);
    createAnchor('', '末页', pageNumber);
  }

  // 当前页码
  var span = document.createElement('span');
  span.innerText = page + ' / ' + pageNumber;
  divPager.appendChild(span);

  container.appendChild(divPager);
}

var pageContainer = document.getElementById('pageContainer');
createPager(5, 20, 8, pageContainer);
