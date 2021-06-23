import faker from 'faker';
import { createApproval } from '../api/approvalApi';
import { createRequest } from '../api/requestApi';
import { createRule } from '../api/ruleApi';

function FakerPage() {
  const addApproval = async () => {
    const approval = {
      type: faker.random.alpha(),
      status: faker.random.alpha(),
    };

    const res = await createApproval({ approval });
    console.log(res);
  };
  const addRequest = async () => {
    const request = {
      expireDate: faker.date.recent(),
      comment: faker.random.alpha(),
      status: faker.random.alpha(),
    };

    const res = await createRequest({ request });
    console.log(res);
  };
  const addRule = async () => {
    const rule = {
      srcAddr: faker.random.alpha(),
      dstAddr: faker.random.alpha(),
      dstPort: faker.random.alpha(),
      comment: faker.random.alpha(),
    };

    const res = await createRule({ rule });
    console.log(res);
  };
  return (
    <>
      <button onClick={() => addApproval()}>Generate Approval Content</button>
      <button onClick={() => addRequest()}>Generate Request Content</button>
      <button onClick={() => addRule()}>Generate Rule Content</button>
    </>
  );
}

export default FakerPage;
