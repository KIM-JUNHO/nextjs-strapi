import Layout from '../../components/Layout';
import { getRequest } from '../../requests/requestApi';
import Request from '../../components/Request';

function RequestPage({ request }) {
  return (
    <Layout>
      <Request request={request} />
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
