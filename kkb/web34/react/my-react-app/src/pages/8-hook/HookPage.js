import React, { useState, useEffect } from 'react'

export default function HookPage() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date())

  // 相当于 componentDidMount, componentDidUpdate
  useEffect(() => {
    console.log(`点击了${count}次`)
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    // 相当于 componentWillUnmount
    return () => clearInterval(timer)
  }, [count])
  
  return (
    <div>
      <h3>HookPage</h3>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}
