import '../App.css'
import React, { useState, useContext } from 'react'

interface IThemeContext {
  theme: string
  setTheme: (theme: string) => void
}

// 创建一个上下文
const ThemeContext = React.createContext({} as IThemeContext)

const Child = () => {
  const theme = useContext(ThemeContext)
  console.log('theme ->', theme)
  const styles = {
    width: 200,
    height: 200,
    backgroundColor: theme.theme === 'light' ? '#ffa' : '#a00',
    color: theme.theme === 'light' ? '#a00' : '#ffa',
  }
  return (
    <div style={styles}>
      <h3>子组件</h3>
      <button onClick={() => theme.setTheme(theme.theme === 'light' ? 'dark' : 'light')}>
        切换主题
      </button>
    </div>
  )
}

const Parent = () => {
  return (
    <div>
      <h3>父组件</h3>
      <Child />
    </div>
  )
}

function Demo() {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <div>顶组件</div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>切换主题</button>
      {/* <ThemeContext.Provider value={{ theme, setTheme }}> */}
      <ThemeContext value={{ theme, setTheme }}>
        <Parent />
      </ThemeContext>
      {/* </ThemeContext.Provider> */}
    </>
  )
}

export default Demo
