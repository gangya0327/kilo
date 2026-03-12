import '../App.css'
import React, { useState } from 'react'

interface IUser {
  name: string
  age: number
  phone: string
}

const Child = React.memo((props: { user: IUser }) => {
  const { user } = props
  console.log('child render')
  return (
    <div>
      <h3>子组件</h3>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.phone}</p>
    </div>
  )
})

function Demo() {
  const [input, setInput] = useState('')
  const [user, setUser] = useState({ name: '张三', age: 18, phone: '12345678901' })
  return (
    <>
      <div>父组件</div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <Child user={user} />
      <button onClick={() => setUser({ ...user, name: '张三' })}>修改 user</button>
    </>
  )
}

export default Demo
