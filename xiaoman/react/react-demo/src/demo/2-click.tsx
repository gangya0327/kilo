import '../App.css'

function App() {
  const clickMe = () => {
    console.log('bbb')
  }
  
  const clickName = (name: string) => {
    console.log('ccc ' + name)
  }

  return (
    <>
      {/* 点击事件 */}
      <div onClick={clickMe}>clickMe</div>
      {/* 带参数的点击事件 */}
      <div onClick={() => clickName('name')}>clickName</div>
    </>
  )
}

export default App
