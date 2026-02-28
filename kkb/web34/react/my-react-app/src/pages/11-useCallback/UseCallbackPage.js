import React, { PureComponent, useState, useCallback } from 'react'

export default function UseCallbackPage() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')

  const addClick = useCallback(() => {
    console.log('计算了')
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  }, [count])

  return (
    <div>
      <h3>UseCallbackPage</h3>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <Child addClick={addClick} />
    </div>
  )
}

class Child extends PureComponent {
  render() {
    const { addClick } = this.props
    console.log('Child render')
    return <div>
      <h4>Child</h4>
      <button onClick={() => addClick()}>child add</button>
    </div>
  }
}