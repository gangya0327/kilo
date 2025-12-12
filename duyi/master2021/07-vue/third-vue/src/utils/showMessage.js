import getComponentRootDom from "./getComponentRootDom"
import Icon from '@/components/icon'
import styles from '@/styles/showMessage.module.less'

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型 danger | success | warn | info | primary
 * @param {Number} duration 显示时长
 * @param {HTMLElement} container 容器，默认为整个页面
 */
export default function showMessage(options = {}) {
  const { content, type = 'primary', duration = 2000 } = options
  let container = options.container
  // 创建元素
  const div = document.createElement('div')
  const icon = getComponentRootDom(Icon, { icon: 'mdi:information-box' })
  // 添加内容
  div.innerHTML = `${icon.outerHTML}<div class="${styles.text}">${content}</div>`
  // 添加样式
  div.className = styles.message + ' ' + styles['message-' + type]
  // 添加到容器中
  if (!container) {
    container = document.body
  }
  container.appendChild(div)
  // 强行渲染一次，使样式生效
  div.clientHeight
  // 渲染动画
  div.style.opacity = 1
  div.style.transform = 'translate(-50%, -50%)'
  div.style.transition = 'all .3s ease-in-out'

  setTimeout(() => {
    div.style.opacity = 0
    div.style.transform = 'translate(-50%, -80%)'
    div.addEventListener('transitionend', function () {
      div.remove()
      options.callback && options.callback()
    }, { once: true })
  }, duration)
}