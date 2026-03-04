import useForm from './useForm'
import FieldContext from './FieldContext'

export default function Form({ form, children }) {
  const [formInstance] = useForm(form)
  return <FieldContext.Provider value={formInstance}>{children}</FieldContext.Provider>
}
