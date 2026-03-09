import '../App.css'
import { useState } from 'react'

function App() {
  const [str, setStr] = useState('hello react')
  const handleClick1 = () => {
    setStr('hello world')
  }
  const [num, setNum] = useState(0)
  const handleClick2 = () => {
    // setNum(1)
    // setNum(2)
    // setNum(3) // 异步更新，会直接输出 3

    setNum((prev) => {
      console.log(prev)
      return prev + 1
    })
    setNum((prev) => {
      console.log(prev)
      return prev + 2
    })
    setNum((prev) => {
      console.log(prev)
      return prev + 3
    }) // 通过函数更新，会依次输出 1 2 3
  }
  return (
    <div>
      <div>{str}</div>
      <button onClick={handleClick1}> 点击 </button>

      <div>{num}</div>
      <button onClick={handleClick2}> 点击 </button>
    </div>
  )
}

export default App
