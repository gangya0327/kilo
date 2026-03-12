import '../App.css'
import { useState, useRef } from 'react'

function Demo() {
  const timer = useRef<number>(null)
  const [count, setCount] = useState(0)

  const start = () => {
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 500)
  }
  const end = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
  }

  return (
    <>
      <div>计时器</div>
      <div> count : {count}</div>
      <button onClick={start}>开始</button>
      <button onClick={end}> 结束</button>
    </>
  )
}

export default Demo
