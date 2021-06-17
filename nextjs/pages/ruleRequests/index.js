import Layout from '../../components/Layout';
import { getRuleRequests } from '../../requests/ruleRequestApi';

function RuleRequests({ ruleRequests }) {
  return <Layout>{JSON.stringify(ruleRequests)}</Layout>;
}

export async function getServerSideProps() {
  const ruleRequests = await getRuleRequests();

  return {
    props: {
      ruleRequests,
    },
  };
}

export default RuleRequests;
