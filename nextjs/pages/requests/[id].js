import Layout from '../../components/Layout';
import { getRequest } from '../../requests/requestApi';

function Request({ request }) {
  return <Layout>{JSON.stringify(request)}</Layout>;
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

export default Request;
