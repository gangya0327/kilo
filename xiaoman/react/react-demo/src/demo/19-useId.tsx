import '../App.css'
import { useId } from 'react'

function Demo() {
  const id = useId()
  return (
    <>
      <div>父组件</div>
      <label htmlFor={id}>输入框</label>
      <input type="text" id={id} />
    </>
  )
}

export default Demo
