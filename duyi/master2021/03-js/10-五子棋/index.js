function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

var chessboard = $('.chessboard');
var isGameOver = false; // 判断游戏是否结束
var whichOne = 'white';
var chessArr = [];

// 初始化棋盘
function initChessboard() {
  var tableContent = '';
  for (var i = 0; i < 14; i++) {
    var row = '<tr>';
    for (var j = 0; j < 14; j++) {
      row += `<td data-row='${i}' data-line='${j}'></td>`;
    }
    row += '</tr>';
    tableContent += row;
  }
  chessboard.innerHTML = tableContent;
}

function bindEvent() {
  chessboard.onclick = function (e) {
    // 判断游戏是否结束
    if (!isGameOver) {
      var temp = Object.assign({}, e.target.dataset);
      if (e.target.nodeName === 'TD') {
        var tdw = (chessboard.clientWidth * 0.92) / 14;
        var positionX = e.offsetX > tdw / 2;
        var positionY = e.offsetY > tdw / 2;
        var chessPoint = {
          x: positionX ? parseInt(temp.line) + 1 : parseInt(temp.line),
          y: positionY ? parseInt(temp.row) + 1 : parseInt(temp.row),
          c: whichOne,
        };
        chessMove(chessPoint);
      }
    } else {
      // 游戏结束
      if (window.confirm('游戏结束，是否重新开始？')) {
        chessArr = [];
        initChessboard();
        isGameOver = false;
      }
    }
  };
}

function chessMove(chessPoint) {
  if (!exist(chessPoint) && !isGameOver) {
    chessArr.push(chessPoint);

    // 生成棋子
    var newChess = `<div class="chess ${chessPoint.c}" data-row="${chessPoint.y}" data-line="${chessPoint.x}"></div>`;
    if (chessPoint.x < 14 && chessPoint.y < 14) {
      var tdPos = $(`td[data-row="${chessPoint.y}"][data-line="${chessPoint.x}"]`);
      tdPos.innerHTML += newChess;
    }
    // 最右侧棋子
    if (chessPoint.x === 14 && chessPoint.y < 14) {
      var tdPos = $(`td[data-row="${chessPoint.y}"][data-line="13"]`);
      tdPos.innerHTML += newChess;
      tdPos.lastChild.style.left = '50%';
    }
    // 最下侧棋子
    if (chessPoint.x < 14 && chessPoint.y === 14) {
      var tdPos = $(`td[data-row="13"][data-line="${chessPoint.x}"]`);
      tdPos.innerHTML += newChess;
      tdPos.lastChild.style.top = '50%';
    }
    // 最右下侧棋子
    if (chessPoint.x === 14 && chessPoint.y === 14) {
      var tdPos = $(`td[data-row="13"][data-line="13"]`);
      tdPos.innerHTML += newChess;
      tdPos.lastChild.style.top = '50%';
      tdPos.lastChild.style.left = '50%';
    }
    whichOne = whichOne === 'white' ? 'black' : 'white';
  }
  check();
}

function exist(chessPoint) {
  var res = chessArr.find((item) => item.x === chessPoint.x && item.y === chessPoint.y);
  return res ? true : false;
}

function check() {
  for (var i = 0; i < chessArr.length; i++) {
    var curChess = chessArr[i];
    var chess1, chess2, chess3, chess4;

    // 检查横向
    chess1 = chessArr.find((item) => curChess.x === item.x + 1 && curChess.y === item.y && curChess.c === item.c);
    chess2 = chessArr.find((item) => curChess.x === item.x + 2 && curChess.y === item.y && curChess.c === item.c);
    chess3 = chessArr.find((item) => curChess.x === item.x + 3 && curChess.y === item.y && curChess.c === item.c);
    chess4 = chessArr.find((item) => curChess.x === item.x + 4 && curChess.y === item.y && curChess.c === item.c);
    if (chess1 && chess2 && chess3 && chess4) {
      end(curChess, chess1, chess2, chess3, chess4);
    }

    // 检查竖向
    chess1 = chessArr.find((item) => curChess.x === item.x && curChess.y === item.y + 1 && curChess.c === item.c);
    chess2 = chessArr.find((item) => curChess.x === item.x && curChess.y === item.y + 2 && curChess.c === item.c);
    chess3 = chessArr.find((item) => curChess.x === item.x && curChess.y === item.y + 3 && curChess.c === item.c);
    chess4 = chessArr.find((item) => curChess.x === item.x && curChess.y === item.y + 4 && curChess.c === item.c);
    if (chess1 && chess2 && chess3 && chess4) {
      end(curChess, chess1, chess2, chess3, chess4);
    }

    // 检查斜向1
    chess1 = chessArr.find((item) => curChess.x === item.x + 1 && curChess.y === item.y + 1 && curChess.c === item.c);
    chess2 = chessArr.find((item) => curChess.x === item.x + 2 && curChess.y === item.y + 2 && curChess.c === item.c);
    chess3 = chessArr.find((item) => curChess.x === item.x + 3 && curChess.y === item.y + 3 && curChess.c === item.c);
    chess4 = chessArr.find((item) => curChess.x === item.x + 4 && curChess.y === item.y + 4 && curChess.c === item.c);
    if (chess1 && chess2 && chess3 && chess4) {
      end(curChess, chess1, chess2, chess3, chess4);
    }

    // 检查斜向2
    chess1 = chessArr.find((item) => curChess.x === item.x - 1 && curChess.y === item.y - 1 && curChess.c === item.c);
    chess2 = chessArr.find((item) => curChess.x === item.x - 2 && curChess.y === item.y - 2 && curChess.c === item.c);
    chess3 = chessArr.find((item) => curChess.x === item.x - 3 && curChess.y === item.y - 3 && curChess.c === item.c);
    chess4 = chessArr.find((item) => curChess.x === item.x - 4 && curChess.y === item.y - 4 && curChess.c === item.c);
    if (chess1 && chess2 && chess3 && chess4) {
      end(curChess, chess1, chess2, chess3, chess4);
    }
  }
}

function end() {
  if (!isGameOver) {
    isGameOver = true;
    for (var i = 0; i < chessArr.length; i++) {
      $(`div[data-row="${chessArr[i].y}"][data-line="${chessArr[i].x}"]`).innerText = i + 1;
    }
    for (var i = 0; i < arguments.length; i++) {
      $(`div[data-row="${arguments[i].y}"][data-line="${arguments[i].x}"]`).classList.add('win');
    }
  }
}

function main() {
  initChessboard();
  bindEvent();
}

main();
