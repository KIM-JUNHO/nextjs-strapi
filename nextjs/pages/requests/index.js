import Layout from '../../components/Layout';
import RequestsTable from '../../components/RequestsTable';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import useRequests from '../../data/useRequests';

function RequestsPage() {
  const { requests, loading, error } = useRequests();

  if (loading) return 'loading...';
  if (error) return 'error...';

  return (
    <Layout>
      <Link href="/requests/create" passHref>
        <Button style={{ float: 'right' }}>Create</Button>
      </Link>
      <RequestsTable requests={requests} />
    </Layout>
  );
}

export default RequestsPage;
