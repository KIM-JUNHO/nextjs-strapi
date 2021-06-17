import { useState } from 'react';
import { createRuleRequest } from '../requests/ruleRequestApi';
import Layout from '../components/Layout';

function RequestRule() {
  const [comment, setComment] = useState('');

  const onRequestSubmit = async (e) => {
    e.preventDefault();
    const res = await createRuleRequest({ comment });
    console.log(res);
  };

  return (
    <Layout>
      <form onSubmit={onRequestSubmit}>
        <input type="text" onChange={(e) => setComment(e.target.value)} value={comment} />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}

export default RequestRule;
