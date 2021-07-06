import Layout from '../../components/layout/Layout';
import PendingTable from '../../components/table/PendingTable';
import ApprovalMenuList from '../../components/list/ApprovalMenuList';

export default function PendingPage() {
  return (
    <Layout aside={<ApprovalMenuList />}>
      <PendingTable />
    </Layout>
  );
}
