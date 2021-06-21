import Layout from '../../components/Layout';
import { getRequests } from '../../requests/requestApi';
import RequestsTable from '../../components/RequestsTable';

function RequestsPage({ requests }) {
  return (
    <Layout>
      <RequestsTable requests={requests} />
    </Layout>
  );
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
