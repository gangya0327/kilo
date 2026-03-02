import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'

const nameRules = { required: true, message: '请输入用户名' }
const passwordRules = { required: true, message: '请输入密码' }

export default function AntdPage(props) {
  const [form] = Form.useForm()
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  useEffect(() => {
    form.setFieldsValue({ username: 'admin', password: '123456' })
    console.log('form ->', form)
  }, [form])
  return (
    <div style={{ width: '400px', margin: '0 auto' }}>
      <h3>AntdPage</h3>

      <Form form={form} labelCol={{ span: 6 }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item name="username" label="用户名" rules={[nameRules]}>
          <Input placeholder="Basic usage" />
        </Form.Item>
        <Form.Item name="password" label="密码" rules={[passwordRules]}>
          <Input placeholder="Basic usage" type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
