import Layout from '../../components/Layout';
import RulesTable from '../../components/RulesTable';
import useRules from '../../data/useRules';

function RulesPage() {
  const { rules, loading, error } = useRules();

  if (loading) return 'loading...';
  if (error) return 'error...';

  return (
    <Layout>
      <RulesTable rules={rules} />
    </Layout>
  );
}

export default RulesPage;
