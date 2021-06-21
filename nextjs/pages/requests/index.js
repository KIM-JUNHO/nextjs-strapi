import Layout from '../../components/Layout';
import { getRequests } from '../../requests/requestApi';

function RuleRequests({ requests }) {
  return <Layout>{JSON.stringify(requests)}</Layout>;
}

export async function getServerSideProps() {
  const requests = await getRequests();

  return {
    props: {
      requests,
    },
  };
}

export default RuleRequests;
