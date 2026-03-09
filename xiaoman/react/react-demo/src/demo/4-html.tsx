import '../App.css'

function App() {
  const dangerousHtml = '<div>dangerousHtml</div>'

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: dangerousHtml }}></div>
    </>
  )
}

export default App
