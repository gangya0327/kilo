export function getInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'admin',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        roles: ['admin'],
      });
    }, 1000);
  });
}
