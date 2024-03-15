import {Form, Button, Input} from 'antd-mobile'

function FormContent() {
  const [form] = Form.useForm()
  return (
    <Form form={form} layout="horizontal" footer={
      <Button block type='submit' color='primary' size='small'>
        确定
      </Button>
    }>
      <Form.Item
        name='value'
        label='value'
        rules={[{required: true, message: 'value不能为空'}]}
      >
        <Input placeholder=''/>
      </Form.Item>
      <Form.Item
        name='explain'
        label='explain'
        rules={[{required: false, message: '姓名不能为空'}]}
      >
        <Input placeholder=''/>
      </Form.Item>
    </Form>
  )
}

export default FormContent
