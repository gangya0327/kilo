import { useSyncExternalStore } from 'react'

export const useHistory = () => {
  const subscribe = (callback: () => void) => {
    window.addEventListener('popstate', callback)
    window.addEventListener('hashchange', callback)
    return () => {
      window.removeEventListener('popstate', callback)
      window.removeEventListener('hashchange', callback)
    }
  }

  const getSnapshot = () => {
    return window.location.href
  }

  const url = useSyncExternalStore(subscribe, getSnapshot)

  const push = (url: string) => {
    window.history.pushState({}, '', url)
    // 手动出发 popstate 事件
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  const replace = (url: string) => {
    window.history.replaceState({}, '', url)
    // 手动出发 hashchange 事件
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  }

  return [url, push, replace] as const // 元组类型
}
