import React, { useState, useEffect } from 'react'

export default function CustomHookPage() {
  const [count, setCount] = useState(0)
  const date = useClock()

  // 相当于 componentDidMount, componentDidUpdate
  useEffect(() => {
    console.log(`点击了${count}次`)
  }, [count])

  return (
    <div>
      <h3>CustomHookPage</h3>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}

function useClock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    // 相当于 componentWillUnmount
    return () => clearInterval(timer)
  }, [])
  return date
}