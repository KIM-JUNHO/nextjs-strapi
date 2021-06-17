import { useState } from 'react';
import { createRuleRequest } from '../requests/ruleRequestApi';

function RequestRule() {
  const [comment, setComment] = useState('');

  const onRequestSubmit = async (e) => {
    e.preventDefault();
    const res = await createRuleRequest({ comment });
    console.log(res);
  };

  return (
    <form onSubmit={onRequestSubmit}>
      <input type="text" onChange={(e) => setComment(e.target.value)} value={comment} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RequestRule;
