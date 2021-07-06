import { List } from 'antd';
import Link from 'next/link';

export default function ApprovalMenuList() {
  return (
    <List
      size="large"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Link href={item.href} passHref>
            <div>{item.title}</div>
          </Link>
        </List.Item>
      )}
    />
  );
}

const data = [
  { href: '/approvals/submission', title: 'Submission' },
  { href: '/approvals/postponed', title: 'Postponed' },
  { href: '/approvals/pending', title: 'Pending' },
  { href: '/approvals/preliminary', title: 'Preliminary' },
];
