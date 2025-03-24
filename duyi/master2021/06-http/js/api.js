const API = (function () {
  const BASE_URL = 'https://study.duyiedu.com';
  const TOKEN_KEY = 'token';

  function get(path) {
    const headers = { 'Content-Type': 'application/json' };
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }
    return fetch(BASE_URL + path, { headers });
  }

  function post(path, body) {
    const headers = { 'Content-Type': 'application/json' };
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }
    return fetch(BASE_URL + path, { method: 'post', headers, body: JSON.stringify(body) });
  }

  async function register(userInfo) {
    const resp = await fetch(BASE_URL + '/api/user/reg', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    return resp.json();
  }

  async function login(loginInfo) {
    const resp = await fetch(BASE_URL + '/api/user/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    });
    const result = await resp.json();
    if (result.code === 0) {
      const token = resp.headers.get('authorization');
      localStorage.setItem(TOKEN_KEY, token);
    }
    return result;
  }

  // const res = login({ loginId: 'haha', loginPwd: '123123' });

  async function exists(loginId) {
    const resp = await get('/api/user/exists?loginId=' + loginId);
    return await resp.json();
  }

  async function profile() {
    const resp = await get('/api/user/profile');
    return resp.json();
  }

  // profile();

  async function sendChat(data) {
    const resp = await post('/api/chat', data);
    return resp.json();
  }

  async function getHistory() {
    const resp = await get('/api/chat/history');
    return resp.json();
  }

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
  }

  return { register, login, exists, profile, sendChat, getHistory, logout };
})();
