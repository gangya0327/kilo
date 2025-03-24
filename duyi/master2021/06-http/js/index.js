(async function () {
  const res = await API.profile();
  const user = res.data;

  if (!user) {
    alert('请先登录');
    location.href = './login.html';
    return;
  }

  const doms = {
    aside: {
      nickname: $('#nickname'),
      loginId: $('#loginId'),
    },
    close: $('.close'),
    chatContainer: $('.chat-container'),
    txtMsg: $('#txtMsg'),
    msgContainer: $('.msg-container'),
  };

  setUserInfo();

  doms.close.onclick = function () {
    API.logout();
    location.href = './login.html';
  };

  // 加载历史记录
  await loadHistory();

  async function loadHistory() {
    const res = await API.getHistory();
    res.data.map((h) => {
      addChat(h);
    });
    scrollToBottom();
  }

  doms.msgContainer.onsubmit = function (e) {
    e.preventDefault();
    sendChat();
  };

  function setUserInfo() {
    doms.aside.nickname.innerText = user.nickname;
    doms.aside.loginId.innerText = user.loginId;
  }

  function addChat(chatInfo) {
    const div = $$$('div');
    div.classList.add('chat-item');
    if (chatInfo.from) {
      div.classList.add('me');
    }
    const img = $$$('img');
    img.className = 'chat-avatar';
    img.src = chatInfo.from ? './asset/avatar.png' : './asset/robot-avatar.jpg';

    const content = $$$('div');
    content.className = 'chat-content';
    content.innerText = chatInfo.content;

    const date = $$$('div');
    date.className = 'chat-date';
    date.innerText = formatDate(chatInfo.createdAt);

    div.appendChild(img);
    div.appendChild(content);
    div.appendChild(date);
    doms.chatContainer.appendChild(div);
  }

  function scrollToBottom() {
    doms.chatContainer.scrollTop = doms.chatContainer.scrollHeight;
  }

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  // addChat({ content: '你好啊', createdAt: Date.now(), from: 'gangya0327', to: null });

  async function sendChat() {
    const content = doms.txtMsg.value.trim();
    if (!content) return;
    addChat({ content, createdAt: Date.now(), from: user.loginId, to: null });
    doms.txtMsg.value = '';
    scrollToBottom();
    const res = await API.sendChat({ content, createdAt: Date.now(), from: user.loginId, to: null });
    addChat({ from: null, to: user.loginId, ...res.data });
    scrollToBottom();
  }
})();
