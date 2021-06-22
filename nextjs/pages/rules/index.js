import Layout from '../../components/Layout';
import { getRules } from '../../api/ruleApi';
import RulesTable from '../../components/RulesTable';

function RulesPage({ rules }) {
  return (
    <Layout>
      <RulesTable rules={rules} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const rules = await getRules();

  return {
    props: {
      rules,
    },
  };
}

export default RulesPage;
