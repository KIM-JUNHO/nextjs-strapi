import Layout from '../../components/Layout';
import { getRules } from '../../api/ruleApi';

function RulesPage({ rules }) {
  return <Layout>{JSON.stringify(rules)}</Layout>;
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
