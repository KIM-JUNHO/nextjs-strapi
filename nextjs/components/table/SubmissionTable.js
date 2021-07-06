import { useState } from 'react';
import { Table } from 'antd';
import useSubmission from '../../data/useSubmission';

export default function SubmissionTable() {
  const pageSize = 5;
  const [pageNum, setPageNum] = useState(0);

  const { data, loading, error } = useSubmission({ username: 'root', pageSize, pageNum });
  const {} = useSubmission({ pageSize, pageNum: pageNum + 1 });

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
