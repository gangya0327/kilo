var titles = document.querySelectorAll('.menu h2');
var itemHeight = 30;

console.log('titles :>> ', titles);
for (var i = 0; i < titles.length; i++) {
  (function (i) {
    titles[i].onclick = function () {
      var openSubmenu = document.querySelector('.submenu[status="open"]');
      if (openSubmenu) {
        closeSubmenu(openSubmenu);
      }
      toggleSubmenu(this.nextElementSibling);
    };
  })(i);
}

function openSubmenu(submenu) {
  // 通过设置自定义属性status：关闭，打开，进行中
  var status = submenu.getAttribute('status');
  if (status && status !== 'close') {
    return;
  }
  submenu.setAttribute('status', 'playing');
  createAnimation({
    from: 0,
    to: itemHeight * submenu.children.length,
    total: 500,
    onmove: function (n) {
      submenu.style.height = n + 'px';
    },
    onend: function () {
      submenu.setAttribute('status', 'open');
    },
  });
}

function closeSubmenu(submenu) {
  // 通过设置自定义属性status：关闭，打开，进行中
  var status = submenu.getAttribute('status');
  if (status !== 'open') {
    return;
  }
  submenu.setAttribute('status', 'playing');
  createAnimation({
    from: itemHeight * submenu.children.length,
    to: 0,
    total: 500,
    onmove: function (n) {
      submenu.style.height = n + 'px';
    },
    onend: function () {
      submenu.setAttribute('status', 'close');
    },
  });
}

function toggleSubmenu(submenu) {
  var status = submenu.getAttribute('status');
  if (status === 'playing') {
    return;
  } else if (status === 'open') {
    closeSubmenu(submenu);
  } else {
    openSubmenu(submenu);
  }
}
