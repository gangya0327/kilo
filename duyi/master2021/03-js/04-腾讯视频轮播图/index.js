var imgs = document.getElementById('imgs');
var sidebar = document.getElementById('sidebar');

var imgsDom = [];
var navDom = [];

var activeImg = null;
var activeNav = null;

for (var i = 0; i < data.length; i++) {
  var item = data[i];

  var tagImg = document.createElement('a');
  tagImg.setAttribute('href', '#');
  tagImg.style.backgroundImage = 'url(' + item.img + ')';
  imgsDom.push(tagImg);
  imgs.appendChild(tagImg);

  var tagNav = document.createElement('a');
  tagNav.setAttribute('href', '#');
  tagNav.setAttribute('class', 'nav');
  tagNav.setAttribute('title', item.title + ': ' + item.desc);
  tagNav.innerHTML = '<span>' + item.title + '</span>';
  navDom.push(tagNav);
  sidebar.appendChild(tagNav);

  if (i === 0) {
    tagImg.setAttribute('class', 'active');
    tagNav.setAttribute('class', 'active');
    activeImg = tagImg;
    activeNav = tagNav;
  }

  tagNav.onmouseenter = (function (tagImg, tagNav) {
    return function () {
      clearInterval(timer);
      activeImg.setAttribute('class', '');
      activeNav.setAttribute('class', 'nav');

      tagImg.setAttribute('class', 'active');
      tagNav.setAttribute('class', 'active');

      activeImg = tagImg;
      activeNav = tagNav;
    };
  })(tagImg, tagNav);
}

tagNav.onmouseleave = function () {
  timer = setInterval(move, 3000);
};

var timer = setInterval(move, 3000);
function move() {
  activeImg.setAttribute('class', '');
  activeNav.setAttribute('class', 'nav');
  console.log('imgsDom :>> ', imgsDom);
  var index = imgsDom.indexOf(activeImg);
  console.log('index :>> ', index);
  if (index === data.length - 1) {
    activeImg = imgsDom[0];
    activeNav = navDom[0];
  } else {
    activeImg = imgsDom[index + 1];
    activeNav = navDom[index + 1];
  }
  activeImg.setAttribute('class', 'active');
  activeNav.setAttribute('class', 'active');
}
