import { useState } from 'react';
import Layout from '../../components/Layout';
import { createRequest } from '../../requests/requestApi';

function CreateRequest() {
  const [srcAddr, setSrcAddr] = useState('');
  const [dstAddr, setDstAddr] = useState('');
  const [dstPort, setDstPort] = useState('');
  const [comment, setComment] = useState('');

  const onRequestSubmit = async (e) => {
    e.preventDefault();
    const rule = { srcAddr, dstAddr, dstPort, comment };
    const res = await createRequest({ rule });
  };

  return (
    <Layout>
      <form onSubmit={onRequestSubmit}>
        <input type="text" onChange={(e) => setSrcAddr(e.target.value)} value={srcAddr} />
        <input type="text" onChange={(e) => setDstAddr(e.target.value)} value={dstAddr} />
        <input type="text" onChange={(e) => setDstPort(e.target.value)} value={dstPort} />
        <input type="text" onChange={(e) => setComment(e.target.value)} value={comment} />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}

export default CreateRequest;
