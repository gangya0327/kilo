import { createContext } from 'react'

// 1 创建 context 对象
const FieldContext = createContext()
export default FieldContext

// 2 通过 Provider 传递 value

// 3 后代消费 value
// - 1 contextType 只能用在 class 组件
// - 2 useContext 只能用在函数组件或自定义 hook 中
// - 3 Consumer
