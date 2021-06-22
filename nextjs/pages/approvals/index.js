import Layout from '../../components/Layout';
import ApprovalsTable from '../../components/ApprovalsTable';
import useApprovals from '../../data/useApprovals';

function ApprovalsPage() {
  const { approvals, loading, error } = useApprovals();

  if (loading) return 'loading...';
  if (error) return 'error...';

  return (
    <Layout>
      <ApprovalsTable approvals={approvals} />
    </Layout>
  );
}

export default ApprovalsPage;
