import Layout from '../../components/Layout';
import { getRequests } from '../../api/requestApi';
import RequestsTable from '../../components/RequestsTable';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

function RequestsPage({ requests }) {
  return (
    <Layout>
      <Link href="/requests/create" passHref>
        <Button style={{ float: 'right' }}>Create</Button>
      </Link>
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
