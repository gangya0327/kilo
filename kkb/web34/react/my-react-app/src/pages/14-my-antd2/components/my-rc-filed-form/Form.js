import React from 'react'
import useForm from './useForm'
import FieldContext from './FieldContext'

export default function Form({ form, children, onFinish, onFinishFailed }, ref) {
  // ! class 组件的初始化，而函数组件的初始化发生在 Form 的父组件
  const [formInstance] = useForm(form)
  formInstance.setCallbacks({ onFinish, onFinishFailed })

  React.useImperativeHandle(ref, () => formInstance)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        formInstance.onSubmit()
      }}
    >
      <FieldContext.Provider value={formInstance}>{children}</FieldContext.Provider>
    </form>
  )
}
