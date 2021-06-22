import Layout from '../../components/Layout';
import { getApprovals } from '../../api/approvalApi';

function ApprovalsPage({ approvals }) {
  return <Layout>{JSON.stringify(approvals)}</Layout>;
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
