import { useState } from 'react';
import { Table } from 'antd';
import usePending from '../../data/usePending';

export default function PendingTable() {
  const pageSize = 5;
  const [pageNum, setPageNum] = useState(0);
  const { data, loading, error } = usePending({ username: 'logapi', pageSize, pageNum });
  const {} = usePending({ pageSize, pageNum: pageNum + 1 });

  if (error) return 'error...';

  return <Table dataSource={data && data} loading={loading} columns={columns} />;
}

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'ExpireDate',
    dataIndex: 'expireDate',
    key: 'expireDate',
  },

  {
    title: 'Comment',
    dataIndex: 'comment',
    key: 'comment',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'CreatedAt',
    dataIndex: 'created_at',
    key: 'created_at',
  },
];
