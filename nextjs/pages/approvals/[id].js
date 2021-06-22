import Layout from '../../components/Layout';
import { getApproval } from '../../api/approvalApi';
import ApprovalTable from '../../components/ApprovalTable';

function ApprovalPage({ approval }) {
  return (
    <Layout>
      <ApprovalTable approval={approval} />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const approval = await getApproval({ id });

  return {
    props: {
      approval,
    },
  };
}

export default ApprovalPage;
