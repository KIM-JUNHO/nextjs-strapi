import Layout from '../../components/Layout';
import RequestsTable from '../../components/RequestsTable';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

function RequestsPage() {
  return (
    <Layout>
      <RequestsTable />
      <Link href="/requests/create" passHref>
        <Button style={{ float: 'right' }}>Create</Button>
      </Link>
    </Layout>
  );
}

export default RequestsPage;
