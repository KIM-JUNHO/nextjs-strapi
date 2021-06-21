import Layout from '../../components/Layout';
import { getRequests } from '../../requests/requestApi';

function RequestsPage({ requests }) {
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

export default RequestsPage;
