import Scathach from '../build/index';

const sca = new Scathach();

sca.searchGelbooru('cat_girl', 25).then((r) => {
  console.log('cat_girl', r);
});

sca.searchR34('futanari', 25).then((r) => {
  console.log('futanari', r);
});

sca.searchSafe('elf', 25).then((r) => {
  console.log('elf', r);
});