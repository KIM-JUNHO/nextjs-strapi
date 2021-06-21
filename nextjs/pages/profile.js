import Layout from '../components/Layout';
import useUser from '../data/useUser';
import User from '../components/User';

function ProfilePage() {
  const { user } = useUser();

  return <Layout>{user && <User user={user} />}</Layout>;
}

export default ProfilePage;
