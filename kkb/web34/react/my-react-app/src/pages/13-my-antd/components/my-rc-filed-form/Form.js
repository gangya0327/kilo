import useForm from './useForm'
import FieldContext from './FieldContext'

export default function Form({ form, children, onFinish, onFinishFailed }) {
  const [formInstance] = useForm(form)
  console.log('formInstance ->', formInstance)
  formInstance.setCallbacks({ onFinish, onFinishFailed })

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
