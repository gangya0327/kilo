import loadingIcon from '@/assets/loading2.svg';
import styles from './loading.module.less';

function getLoading(el) {
  return el.querySelector('img[data-role="loading"]');
}

function createLoadingIcon() {
  const img = document.createElement('img');
  img.dataset.role = 'loading';
  img.src = loadingIcon;
  img.className = styles.loading;
  return img;
}

// 包含 bind，update 状态改变时调用
export default function (el, binding) {
  console.log('binding :>> ', binding);
  const currentLoading = getLoading(el);
  // 判断有无 loading 元素
  if (binding.value) {
    if (!currentLoading) {
      const img = createLoadingIcon();
      el.appendChild(img);
    }
  } else {
    if (currentLoading) {
      el.removeChild(currentLoading);
    }
  }
}
