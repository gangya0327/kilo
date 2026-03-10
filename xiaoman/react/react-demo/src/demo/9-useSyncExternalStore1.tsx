import '../App.css'
import { useStorage } from '../hooks/useStorage'

function Demo() {
  const [count, setCount] = useStorage('count', 1)
  return (
    <>
      <div>count：{count}</div>
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount(count - 1)}>sub</button>
    </>
  )
}

export default Demo
