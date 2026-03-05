import { useRef } from 'react'

class FormStore {
  constructor() {
    this.store = {}
    this.fieldEntities = []
    this.callbacks = {}
  }

  setCallbacks = (newCallbacks) => {
    this.callbacks = { ...this.callbacks, ...newCallbacks }
  }
  getFieldsValue = () => {
    return { ...this.store }
  }

  getFieldValue = (name) => {
    return this.store[name]
  }

  setFieldsValue = (newStore) => {
    this.store = { ...this.store, ...newStore }
    // 订阅组件更新
    this.fieldEntities.forEach((_f) => {
      Object.keys(newStore).forEach((key) => {
        if (key === _f.props.name) {
          _f.onStoreChange()
        }
      })
    })
  }

  validate = () => {
    let err = []
    return err
  }

  onSubmit = () => {
    let err = this.validate()
    if (err.length === 0) {
      // onFinish()
      this.callbacks.onFinish(this.getFieldsValue())
    } else {
      // onFinishFailed()
      this.callbacks.onFinishFailed(err, this.getFieldsValue())
    }
  }

  // 订阅和取消订阅应该成对出现
  registerFieldEntities = (field) => {
    this.fieldEntities.push(field)

    // 取消订阅
    return () => {
      this.fieldEntities = this.fieldEntities.filter((_f) => _f !== field)
      delete this.store[field.props.name]
    }
  }

  getForm() {
    return {
      setCallbacks: this.setCallbacks,
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      registerFieldEntities: this.registerFieldEntities,
      onSubmit: this.onSubmit,
    }
  }
}

export default function useForm(form) {
  const formRef = useRef()
  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      const formStore = new FormStore()
      formRef.current = formStore.getForm()
    }
  }
  return [formRef.current]
}
