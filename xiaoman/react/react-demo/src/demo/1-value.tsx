import '../App.css'

function App() {
  const fn = () => {
    return 'aaa'
  }

  const a = 2

  return (
    <>
      {/* 字符串 */}
      <div>{'abc'}</div>
      {/* 数字 */}
      <div>{123}</div>
      {/* 数组 */}
      <div>{[4, 5, 6]}</div>
      {/* 元素 */}
      <div>{<span>789</span>}</div>
      {/* 三目表达式 */}
      <div>{a > 0 ? 1 : 0}</div>
      {/* 函数 */}
      <div>{fn()}</div>
    </>
  )
}

export default App
