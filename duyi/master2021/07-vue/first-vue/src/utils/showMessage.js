import getComponentRootDom from '@/utils/getComponentRootDom';
import Icon from '@/components/Icon';
import style from '@/styles/showMessage.module.less';

export default function showMessage(options = {}) {
  const { content = '', type = 'info', duration = 2000, container = document.body } = options;
  const div = document.createElement('div');
  const iconType = {
    info: 'icon-details',
    success: 'icon-selected',
    warning: 'icon-warn',
    error: 'icon-close_circle',
  }[type];
  const iconDom = getComponentRootDom(Icon, {
    type: iconType,
  });
  div.innerHTML = `<span class=${style.icon}>${iconDom.outerHTML}</span><div>${content}</div>`;
  div.className = `${style.message} ${style['message-' + type]}`;

  if (getComputedStyle(container).position === 'static') {
    container.style.position = 'relative';
  }
  container.appendChild(div);

  // 浏览器强行渲染
  div.clintHeight;

  div.style.opacity = 1;
  div.style.transform = 'translate(-50%, -50%)';

  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = 'translate(-50%, -50%) translateY(-20px)';
    div.addEventListener(
      'transitionend',
      function () {
        div.remove();
        // 执行回调函数
        options.callback && options.callback();
      },
      { once: true }
    );
  }, duration);
}
