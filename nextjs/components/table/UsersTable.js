import { Table } from 'antd';
import useUsers from '../../data/useUsers';

export default function UsersTable({ searhInput = 'api' }) {
  const { data, loading, error } = useUsers({ searhInput });

  if (error) return 'error...';

  return (
    <Table
      dataSource={data && data}
      loading={loading}
      columns={columns}
      rowKey={(record) => record.id}
    />
  );
}
const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];
