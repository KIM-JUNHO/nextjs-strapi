import Layout from '../../components/Layout';
import { getApprovals } from '../../api/approvalApi';
import ApprovalsTable from '../../components/ApprovalsTable';

function ApprovalsPage({ approvals }) {
  return (
    <Layout>
      <ApprovalsTable approvals={approvals} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const approvals = await getApprovals();

  return {
    props: {
      approvals,
    },
  };
}

export default ApprovalsPage;
