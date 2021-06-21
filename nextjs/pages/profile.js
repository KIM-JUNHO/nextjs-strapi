import Layout from '../components/Layout';
import useUser from '../data/useUser';
import User from '../components/User';

function ProfilePage() {
  const { user, loading, error } = useUser();

  if (loading) return 'loading...';
  if (error) return 'redirecting...';

  return (
    <Layout>
      <User user={user} />
    </Layout>
  );
}

export default ProfilePage;
