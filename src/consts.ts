const BASEURL = 'https://scathach.redsplit.org/v5';
const BASEARMORED = 'https://scathach.redsplit.org/api/armored';

export default {
  endpoint: {
    fgo: `${BASEURL}/fgo/`,
    genshin: `${BASEURL}/genshin_impact/`,
    azur: `${BASEURL}/azur_lane/`,
    waifu: `${BASEURL}/waifu/`,
    sex: `${BASEURL}/sex/`,
    gelbooru: `${BASEARMORED}/gelbooru`,
    r34: `${BASEARMORED}/r34`,
    safe: `${BASEARMORED}/safebooru`,
    reaction: 'https://gitlab.com/d0g/servant/-/raw/master/_constant',
  },
};
