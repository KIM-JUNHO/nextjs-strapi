import Layout from '../../components/Layout';
import { getRuleRequest } from '../../requests/ruleRequestApi';

function RuleRequest({ ruleRequest }) {
  return <Layout>{JSON.stringify(ruleRequest)}</Layout>;
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const ruleRequest = await getRuleRequest({ id });

  return {
    props: {
      ruleRequest,
    },
  };
}

export default RuleRequest;
