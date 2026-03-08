import React from 'react'

// 1. 创建 context 对象
const FieldContext = React.createContext()
export default FieldContext

// 2. 通过 Provider 传递 value

// 3. 后代消费 value
// 3.1 contextType 只能用于 class 组件，并且只能订阅单一 context 来源
// 3.2 useContext 只能用于函数组件或自定义 hook 中
// 3.3 Consumer
