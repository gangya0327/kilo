import '../App.css'
import { useState, useDebugValue } from 'react'

const useCookie = (name: string, initValue: string) => {
  // 获取cookie
  const getCookie = () => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
    return match ? match[2] : initValue
  }
  const [cookie, setCookie] = useState(getCookie())

  // 更新cookie
  const updateCookie = (newValue: string) => {
    document.cookie = `${name}=${newValue}`
    setCookie(newValue)
  }

  // 删除cookie
  const deleteCookie = () => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    setCookie('')
  }

  useDebugValue(cookie, (value) => {
    return 'format cookie ' + value
  })
  return [cookie, updateCookie, deleteCookie] as const
}

function Demo() {
  const [cookie, updateCookie, deleteCookie] = useCookie('xxx', 'value')
  return (
    <>
      <div>父组件</div>
      <div>{cookie}</div>
      <button onClick={() => updateCookie('update-xxx')}> 更新</button>
      <button onClick={deleteCookie}> 删除</button>
    </>
  )
}

export default Demo
