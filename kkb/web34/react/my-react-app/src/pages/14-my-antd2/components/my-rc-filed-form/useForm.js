import { useRef } from 'react'

class FormStore {
  constructor() {
    this.store = {}
    this.fieldEntities = []
    this.callbacks = {}
  }

  // get
  getFieldValue = (name) => {
    return this.store[name]
  }
  getFieldsValue = () => {
    return this.store
  }

  // set
  setFieldsValue = (newStore) => {
    this.store = { ...this.store, ...newStore }
    console.log('this.store ->', this.store)

    this.fieldEntities.forEach((_f) => {
      Object.keys(newStore).forEach((key) => {
        // 订阅对应的组件更新
        if (key === _f.props.name) {
          _f.onStoreChange()
        }
      })
    })
    // 组件卸载时要取消订阅
  }

  // 订阅和取消订阅，监听和取消监听应该成对出现
  registerField = (field) => {
    this.fieldEntities.push(field)

    // 取消订阅
    return () => {
      this.fieldEntities = this.fieldEntities.filter((_f) => _f !== field)
      delete this.store[field.props.name]
    }
  }

  setCallbacks = (newCallbacks) => {
    this.callbacks = { ...this.callbacks, ...newCallbacks }
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

  validate = () => {
    let err = []
    // todo 校验
    return err
  }

  getForm() {
    return {
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
      registerField: this.registerField,
      onSubmit: this.onSubmit,
      setCallbacks: this.setCallbacks,
    }
  }
}

export default function useForm(form) {
  const formRef = useRef(null)

  // 保证组件每次使用的都是这个formStore
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
