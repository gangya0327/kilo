import { useSyncExternalStore } from 'react'

export const useStorage = (key: string, initialValue: string | number) => {
  const subscribe = (callback: () => void) => {
    // 订阅浏览器 API
    window.addEventListener('storage', callback)
    return () => {
      // 取消订阅
      window.removeEventListener('storage', callback)
    }
  }

  const getSnapshot = () => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : initialValue
  }

  const res = useSyncExternalStore(subscribe, getSnapshot)

  const updateStorage = (value: string) => {
    localStorage.setItem(key, JSON.stringify(value))
    // 手动出发 storage 事件
    window.dispatchEvent(new StorageEvent('storage'))
  }

  return [res, updateStorage]
}
