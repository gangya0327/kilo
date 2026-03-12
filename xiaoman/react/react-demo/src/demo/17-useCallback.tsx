import '../App.css'
import React, { useState, useCallback } from 'react'

function Demo() {
  console.log('render')
  const [input, setInput] = useState('')
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }, [])
  return (
    <>
      <div>父组件</div>
      <input type="text" value={input} onChange={handleChange} />
    </>
  )
}

export default Demo
