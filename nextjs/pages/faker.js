import faker from 'faker';
import { createRule } from '../api/ruleApi';

function FakerPage() {
  const addRules = async () => {
    const rule = {
      srcAddr: faker.lorem.text(),
      dstAddr: faker.lorem.text(),
      dstPort: faker.lorem.text(),
      comment: faker.lorem.sentence(),
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
