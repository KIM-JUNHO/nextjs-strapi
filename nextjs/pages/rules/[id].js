import Layout from '../../components/Layout';
import { getRule } from '../../api/ruleApi';
import RuleTable from '../../components/RuleTable';

function RulePage({ rule }) {
  return (
    <Layout>
      <RuleTable rule={rule} />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const rule = await getRule({ id });

  return {
    props: {
      rule,
    },
  };
}

export default RulePage;
