import '../App.css'
import { useEffect, useLayoutEffect } from 'react'

function Demo() {
  // 先绘制完成，再执行，能看到动画效果
  useEffect(() => {
    const app1 = document.getElementById('app1') as HTMLDivElement
    app1.style.transition = 'opacity .5s ease-in-out'
    app1.style.opacity = '1'
  }, [])

  // 先执行，再绘制完成，不能看到动画效果
  useLayoutEffect(() => {
    const app2 = document.getElementById('app2') as HTMLDivElement
    app2.style.transition = 'opacity .5s ease-in-out'
    app2.style.opacity = '1'
  })

  return (
    <>
      <div id="app1" style={{ width: 200, height: 200, opacity: 0, background: 'red' }}></div>
      <br />
      <div id="app2" style={{ width: 200, height: 200, opacity: 0, background: 'blue' }}></div>
    </>
  )
}

export default Demo
