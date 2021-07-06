import Layout from '../../components/layout/Layout';
import PostponedTable from '../../components/table/PostponedTable';
import ApprovalMenuList from '../../components/list/ApprovalMenuList';

export default function PostponedPage() {
  return (
    <Layout aside={<ApprovalMenuList />}>
      <PostponedTable />
    </Layout>
  );
}
