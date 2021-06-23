import faker from 'faker';
import { createRule } from '../api/ruleApi';

function FakerPage() {
  const addRules = async () => {
    const rule = {
      srcAddr: faker.random.alpha(),
      dstAddr: faker.random.alpha(),
      dstPort: faker.random.alpha(),
      comment: faker.random.alpha(),
    };

    const rules = await createRule({ rule });
    console.log(rules);
  };
  return (
    <>
      <button onClick={() => addRules()}>Generate Rules Content</button>
    </>
  );
}

export default FakerPage;
