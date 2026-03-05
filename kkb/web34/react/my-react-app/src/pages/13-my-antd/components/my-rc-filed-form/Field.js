import React, { Component } from 'react'
import FieldContext from './FieldContext'

export default class Field extends Component {
  static contextType = FieldContext

  onStoreChange() {
    this.forceUpdate()
  }

  componentDidMount() {
    this.unregisterFieldEntities = this.context.registerFieldEntities(this)
  }

  componentWillUnmount() {
    this.unregisterFieldEntities()
  }

  getControlled() {
    const { getFieldValue, setFieldsValue } = this.context
    const { name } = this.props
    return {
      value: getFieldValue(name),
      onChange: (event) => {
        const newValue = event.target.value
        setFieldsValue({ [name]: newValue })
        console.log('newValue ->', newValue)
      },
    }
  }
  render() {
    const { children } = this.props
    const returnChildNode = React.cloneElement(children, this.getControlled())
    return returnChildNode
  }
}
