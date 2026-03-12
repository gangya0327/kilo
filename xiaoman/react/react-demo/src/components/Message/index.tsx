import ReactDOM from 'react-dom/client'
import './index.css'

export default function Message() {
  return <div>消息提示</div>
}

interface Message {
  messageContainer: HTMLDivElement
  root: ReactDOM.Root
}

const queue: Message[] = []
window.onShow = () => {
  const messageContainer = document.createElement('div')
  messageContainer.className = 'message'
  messageContainer.style.top = `${queue.length * 50}px`
  document.body.appendChild(messageContainer)

  // 注册容器成为根组件
  const root = ReactDOM.createRoot(messageContainer)
  root.render(<Message />)

  queue.push({ root, messageContainer })

  setTimeout(() => {
    const message = queue.find((item) => item.messageContainer === messageContainer)!
    document.body.removeChild(message.messageContainer)
    message?.root.unmount()
    queue.splice(queue.indexOf(message), 1)
  }, 2000)
}

declare global {
  interface Window {
    onShow: () => void
  }
}
