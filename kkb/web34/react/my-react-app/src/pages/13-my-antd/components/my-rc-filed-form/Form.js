import React from 'react'
import useForm from './useForm'
import FieldContext from './FieldContext'

const Form = React.forwardRef(({ form, children }, ref) => {
  const [formInstance] = useForm(form)
  return <FieldContext.Provider value={formInstance}>{children}</FieldContext.Provider>
})

export default Form
