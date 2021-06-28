import { useState } from 'react';
import { Table, Button, Modal, Form, Input, Radio } from 'antd';
import useFindUsers from '../data/useFindUsers';

const ApprovalCreateForm = ({ visible, onCreate, onCancel }) => {
  const [username, setUsername] = useState('');
  const { data, loading, error } = useFindUsers({ username });
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Add a new approval"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        name="approvalInfo"
        initialValues={{
          type: 'APPROVAL',
        }}
      >
        <Form.Item name="type" rules={[{ required: true, message: 'Please pick an item!' }]}>
          <Radio.Group>
            <Radio.Button value="APPROVAL">APPROVAL</Radio.Button>
            <Radio.Button value="AGREEMENT">AGREEMENT</Radio.Button>
            <Radio.Button value="NOTIFICATION">NOTIFICATION</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="user"
          rules={[
            {
              required: true,
              message: 'Please input the user!',
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <Button
            onClick={() => {
              setUsername(form.getFieldValue('user'));
            }}
          >
            Search
          </Button>
        </Form.Item>
      </Form>

      <Table dataSource={data && data} columns={columns} size="small" loading={loading} />
    </Modal>
  );
};

export default function ApprovalsForm() {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        New Collection
      </Button>
      <ApprovalCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}

const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];
