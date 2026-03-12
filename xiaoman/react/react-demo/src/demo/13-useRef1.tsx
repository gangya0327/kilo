import '../App.css'
import { useRef } from 'react'

function Demo() {
  const divRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    console.dir(divRef.current)
    divRef.current!.innerHTML = '天气：多云'
  }

  return (
    <>
      <div>2026 年 3 月 11 日</div>
      <div ref={divRef}>天气：晴朗</div>
      <button onClick={handleClick}>跳转 replace</button>
    </>
  )
}

export default Demo
