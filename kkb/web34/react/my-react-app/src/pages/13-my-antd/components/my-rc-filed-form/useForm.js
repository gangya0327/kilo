import { useRef } from 'react'

class FormStore {
  constructor() {
    this.store = {}
    this.fieldEntities = []
  }
  getFieldsValue() {
    return { ...this.store }
  }

  getFieldValue(name) {
    return this.store[name]
  }

  setFieldsValue(newStore) {
    this.store = { ...this.store, ...newStore }
    // 订阅组件更新
    this.fieldEntities.forEach((_f) => {
      _f.onStoreChange()
    })
  }

  registerFieldEntities(field) {
    this.fieldEntities.push(field)
  }

  getForm() {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      registerFieldEntities: this.registerFieldEntities,
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
