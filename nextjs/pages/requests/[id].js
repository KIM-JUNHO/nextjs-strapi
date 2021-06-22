import Layout from '../../components/Layout';
import { getRequest } from '../../api/requestApi';
import RequestTable from '../../components/RequestTable';

function RequestPage({ request }) {
  return (
    <Layout>
      <RequestTable request={request} />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const request = await getRequest({ id });

  return {
    props: {
      request,
    },
  };
}

export default RequestPage;
