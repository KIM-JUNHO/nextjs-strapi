import { getRuleRequest } from '../../requests/ruleRequestApi';

function RuleRequest({ ruleRequest }) {
  return <>{JSON.stringify(ruleRequest)}</>;
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
