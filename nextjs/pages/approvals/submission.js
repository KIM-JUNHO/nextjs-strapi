import Layout from '../../components/layout/Layout';
import SubmissionTable from '../../components/table/SubmissionTable';
import ApprovalMenuList from '../../components/list/ApprovalMenuList';

function ApprovalsPage() {
  return (
    <Layout aside={<ApprovalMenuList />}>
      <SubmissionTable />
    </Layout>
  );
}

export default ApprovalsPage;
