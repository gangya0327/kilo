import React, { Component } from 'react'
import FieldContext from './FieldContext'

export default class Field extends Component {
  static contextType = FieldContext

  componentDidMount() {
    this.unRegisterField = this.context.registerField(this)
  }

  componentWillUnmount() {
    // 取消订阅
    this.unRegisterField()
  }

  onStoreChange = () => {
    this.forceUpdate()
  }

  getControlled = () => {
    const { getFieldValue, setFieldsValue } = this.context
    const { name } = this.props
    return {
      value: getFieldValue(name),
      onChange: (event) => {
        const newValue = event.target.value
        setFieldsValue({ [name]: newValue })
      },
    }
  }

  render() {
    const { children } = this.props
    const returnChildNode = React.cloneElement(children, this.getControlled())
    return returnChildNode
  }
}
