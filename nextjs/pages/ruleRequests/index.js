import { getRuleRequests } from '../../requests/ruleRequestApi';

function RuleRequests({ ruleRequests }) {
  return <>{JSON.stringify(ruleRequests)}</>;
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
