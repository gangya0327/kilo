import '../App.css'

function App() {
  const arr = [1, 2, 3, 4]

  return (
    <>
      <div>
        {arr.map((item) => {
          return <span key={item}>{item}</span>
        })}
      </div>
    </>
  )
}

export default App
