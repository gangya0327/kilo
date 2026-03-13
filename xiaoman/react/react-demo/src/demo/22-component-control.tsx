import '../App.css'
import { useState, useRef } from 'react'

export default function Demo() {
  const [value] = useState('aaa')
  const inputRef = useRef<HTMLInputElement>(null)
  const handleChange = () => {
    console.log(inputRef.current?.value)
  }

  // const [value, setValue] = useState('aaa')
  return (
    <div>
      <h3>Component</h3>
      {/* 非受控组件，通过 ref 进行获取 */}
      <input defaultValue={value} ref={inputRef} onChange={handleChange} />

      {/* 受控组件，使用 value 绑定值，必须联合 onChange 监听值变化 */}
      {/* <input value={value} onChange={(e) => setValue(e.target.value)} /> */}
      <div>{value}</div>
    </div>
  )
}
