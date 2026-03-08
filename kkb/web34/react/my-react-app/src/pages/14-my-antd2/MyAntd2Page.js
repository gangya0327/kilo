// import React, { useEffect } from 'react'
import Form, { Field } from './components/my-rc-filed-form'
import Input from './components/Input'

// export default function MyAntd2Page(props) {
//   const [form] = Form.useForm()

//   const onFinish = (values) => {
//     console.log('Success:', values)
//   }

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo)
//   }

//   useEffect(() => {
//     form.setFieldsValue({ username: 'admin', password: '123456' })
//   }, [form])

//   return (
//     <div style={{ width: '400px', margin: '0 auto' }}>
//       <h3>MyAntd2Page</h3>

//       <Form form={form} labelCol={{ span: 6 }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//         <Field name="username" label="用户名" rules={[nameRules]}>
//           <Input placeholder="Basic usage" />
//         </Field>
//         <Field name="password" label="密码" rules={[passwordRules]}>
//           <Input placeholder="Basic usage" type="password" />
//         </Field>
//         <Field>
//           <button type="primary">提交</button>
//         </Field>
//       </Form>
//     </div>
//   )
// }

import React, { Component } from 'react'

const nameRules = { required: true, message: '请输入用户名' }
const passwordRules = { required: true, message: '请输入密码' }

export default class MyAntd2Page extends Component {
  formRef = React.createRef()
  onFinish = (values) => {
    console.log('Success:', values)
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  componentDidMount() {
    this.formRef.current.setFieldsValue({ username: 'admin', password: '123456' })
  }

  render() {
    return (
      <div style={{ width: '400px', margin: '0 auto' }}>
        <h3>MyAntd2Page</h3>

        <Form
          ref={this.formRef}
          labelCol={{ span: 6 }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Field name="username" label="用户名" rules={[nameRules]}>
            <Input placeholder="Basic usage" />
          </Field>
          <Field name="password" label="密码" rules={[passwordRules]}>
            <Input placeholder="Basic usage" type="password" />
          </Field>
          <Field>
            <button type="primary">提交</button>
          </Field>
        </Form>
      </div>
    )
  }
}
