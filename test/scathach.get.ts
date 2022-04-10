/* eslint-disable @typescript-eslint/no-var-requires */
import Scathach from '../build/index';

const config = {
  useragent: 'github workflows (ci)',
  apikey: '<scathach.dev auth>'
};

const sca = new Scathach(config);

sca.getFgo().then((r) => {
  console.log('fgo', r);
});
