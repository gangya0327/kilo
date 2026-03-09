import '../App.css'

function App() {
  const logo = 'test'

  const style = { color: 'red' }

  return (
    <>
      <div className={logo}>className</div>
      <div className={`${logo} classA classB`}>className</div>
      <div style={style}>style</div>
      <div style={{ color: 'blue' }}>style</div>
    </>
  )
}

export default App
