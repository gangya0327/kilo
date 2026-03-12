import '../App.css'
import { useRef, useState, useImperativeHandle } from 'react'

interface ChildRef {
  name: string
  count: number
  subCount: () => void
  addCount: () => void
}

// 18版本
// const Child = forwardRef<ChildRef>((props, ref) => {

// 19版本
const Child = ({ ref }: { ref: React.Ref<ChildRef> }) => {
  const [count, setCount] = useState(0)
  useImperativeHandle(ref, () => {
    console.log('useImperativeHandle')
    return {
      name: 'child',
      count,
      subCount: () => setCount(count - 1),
      addCount: () => setCount(count + 1),
    }
  }, [count])
  return (
    <div>
      <h3>子组件</h3>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

function Demo() {
  const childRef = useRef<ChildRef>(null)
  const getChild = () => {
    console.log(childRef.current)
  }
  return (
    <>
      <div>父组件</div>
      <Child ref={childRef} />
      <button onClick={getChild}> 获取子组件 </button>
      <button onClick={() => childRef.current?.subCount()}> 子组件-1 </button>
      <button onClick={() => childRef.current?.addCount()}> 子组件+1 </button>
    </>
  )
}

export default Demo
