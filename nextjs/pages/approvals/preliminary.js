import Layout from '../../components/layout/Layout';
import PreliminaryTable from '../../components/table/PreliminaryTable';
import ApprovalMenuList from '../../components/list/ApprovalMenuList';

export default function PreliminaryPage() {
  return (
    <Layout aside={<ApprovalMenuList />}>
      <PreliminaryTable />
    </Layout>
  );
}
