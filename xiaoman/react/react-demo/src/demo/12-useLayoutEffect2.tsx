import '../App.css'
import { useLayoutEffect } from 'react'
import { useHistory } from '../hooks/useHistory'

function Demo() {
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop
    console.log('scrollTop ->', scrollTop)
    window.history.replaceState({}, '', `#${scrollTop}`)
  }

  useLayoutEffect(() => {
    // 获取滚动位置
    const container = document.getElementById('container') as HTMLDivElement
    const top = window.location.hash.slice(1)
    container.scrollTop = top ? Number(top) : 0
  })

  const [url, push, replace] = useHistory()

  return (
    <>
      <div onScroll={handleScroll} id="container" style={{ height: 500, overflow: 'auto' }}>
        {Array.from({ length: 200 }).map((item, index) => {
          return (
            <div key={index} style={{ background: '#ce0', width: 90, marginBottom: 20 }}>
              {index + 1}
            </div>
          )
        })}
      </div>
      <div>url: {url}</div>
      <button onClick={() => push('/add')}>跳转 push</button>
      <button onClick={() => replace('sub')}>跳转 replace</button>
    </>
  )
}

export default Demo
