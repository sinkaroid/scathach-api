import Scathach from '../build/index';

const sca = new Scathach();

sca.searchGelbooru('cat_girl', 100).then((r) => {
  console.log('cat_girl', r);
});

sca.searchR34('futanari', 100).then((r) => {
  console.log('futanari', r);
});

sca.searchSafe('elf', 100).then((r) => {
  console.log('elf', r);
});