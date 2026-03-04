// import React from 'react'
import _Form from './Form'
import Field from './Field'
import useForm from './useForm'
console.log('_Form ->', _Form)

// const Form = React.forwardRef(_Form)
const Form = _Form
Form.Field = Field
Form.useForm = useForm

export { Field, useForm }
export default Form
