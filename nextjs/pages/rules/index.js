import { useState } from 'react';
import Layout from '../../components/Layout';
import RulesTable from '../../components/RulesTable';
import useRules from '../../data/useRules';

function RulesPage() {
  const pageSize = 5;
  const [pageNum, setPageNum] = useState(1);
  return (
    <Layout>
      <RulesTable pageSize={pageSize} pageNum={pageNum} />
      <button onClick={() => setPageNum(pageNum - 1)}>Previous</button>
      <button onClick={() => setPageNum(pageNum + 1)}>Next</button>
    </Layout>
  );
}

export default RulesPage;
