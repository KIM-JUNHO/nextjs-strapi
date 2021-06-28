import { Form, Input, Button, Space, Radio } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export default function RequestForm() {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <Form
      name="ruleSetInfoVos"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{ approvalSetInfoVos: [{ type: 'APPROVAL', username: '' }] }}
    >
      <Form.List name="approvalSetInfoVos">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'type']}
                  fieldKey={[fieldKey, 'last']}
                  rules={[{ required: true, message: 'Please pick an item!' }]}
                >
                  <Radio.Group>
                    <Radio.Button value="APPROVAL">APPROVAL</Radio.Button>
                    <Radio.Button value="AGREEMENT">AGREEMENT</Radio.Button>
                    <Radio.Button value="NOTIFICATION">NOTIFICATION</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'last']}
                  fieldKey={[fieldKey, 'last']}
                  rules={[{ required: true, message: 'Missing last name' }]}
                >
                  <Input placeholder="Username" />
                </Form.Item>
                <PlusOutlined onClick={() => add()} />
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
