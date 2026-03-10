import '../App.css'
import { useHistory } from '../hooks/useHistory'

function Demo() {
  const [url, push, replace] = useHistory()
  return (
    <>
      <div>count：{url}</div>
      <button onClick={() => push('/add')}>跳转 push</button>
      <button onClick={() => replace('sub')}>跳转 replace</button>
    </>
  )
}

export default Demo
