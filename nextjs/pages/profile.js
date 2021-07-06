import Layout from '../components/layout/Layout';
import useUser from '../data/useUser';

function ProfilePage() {
  const { data } = useUser();

  return <Layout>{data && JSON.stringify(data)}</Layout>;
}

export default ProfilePage;
