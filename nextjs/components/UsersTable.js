import { Table } from 'antd';
import useFindUsers from '../data/useFindUsers';

export default function UsersTable({ username }) {
  const { data, loading, error } = useFindUsers({ username });

  return <Table dataSource={data && data} columns={columns} size="small" loading={loading} />;
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
