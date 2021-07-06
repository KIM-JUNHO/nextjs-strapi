import Layout from '../../components/layout/Layout';
import ApprovalMenuList from '../../components/list/ApprovalMenuList';

function ApprovalsPage() {
  return <Layout aside={<ApprovalMenuList />}></Layout>;
}

export default ApprovalsPage;
