import '../App.css'
import { useState, useReducer } from 'react'

const initState = { count: 0 }

type State = typeof initState

// 初始化函数，只执行一次
const initFn = (state: State) => {
  console.log('initFn', state)
  return { count: state.count + 100 }
}

// 通过 dispatch 触发
const reducer = (state: State, action: { type: 'add' | 'sub' }) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }
    case 'sub':
      return { count: state.count - 1 }
  }
}

function Demo() {
  const [num, setNum] = useState(0)

  const [state, dispatch] = useReducer(reducer, initState, initFn)

  return (
    <div>
      <div>{num}</div>
      <button onClick={() => setNum(num - 1)}> -1 </button>
      <button onClick={() => setNum(num + 1)}> +1 </button>

      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: 'sub' })}> -1 </button>
      <button onClick={() => dispatch({ type: 'add' })}> +1 </button>
    </div>
  )
}

export default Demo
