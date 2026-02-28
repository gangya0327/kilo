import React, { useState, useEffect } from 'react'

export default function FunctionComponent(props) {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    // 相当于 componentDidMount, componentDidUpdate
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    // 相当于 componentWillUnmount
    return () => clearInterval(timer)
  }, []) // 依赖项为空数组，表示只在组件挂载和卸载时执行
  return (
    <div>
      <h3>FunctionComponent</h3>
      <div>{date.toLocaleTimeString()}</div>
    </div>
  )
}
