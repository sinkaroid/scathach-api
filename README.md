<div align="center">

   <a href="https://sinkaroid.github.io/scathach-api">
   <img width="480" src="https://cdn.discordapp.com/attachments/952117487166705747/962346332268400700/sca.png" alt="logo"></a></br><h2>scathach-api</h2>
   Scathach bot is a lewd bot, then this wrapper exists for it
   <br>
   <br> 

[![Test get](https://github.com/sinkaroid/scathach-api/actions/workflows/get.yml/badge.svg)](https://github.com/sinkaroid/scathach-api/actions/workflows/get.yml)
[![Documentation](https://github.com/sinkaroid/scathach-api/actions/workflows/docs.yml/badge.svg)](https://sinkaroid.github.io/scathach-api)

----

</div>

## Getting started
Previous versions is completely ended for its services.

> This version is completely rewritten and just focused on minigame API, If you still rely on the old version install with  
`npm install scathach-api@0.0.9 / yarn add scathach-api@0.0.9`

This resources mostly hand-picked but also automate pick and does not low quality content

## Features
<img align="right" src="https://cdn.discordapp.com/attachments/952117487166705747/962562849874542642/tong.png" width="440"></img>
- Fate grand order sex
- Genshin impact sex
- Azur lane sex
- Hololive sex
- Arknights sex
- Fire emblem sex
- Girls' frontline sex
- Kancolle sex
- Random gif sex
- Get wholesome waifu
- Fgo reaction
- Anime sex like `nekos.life` do, but juicier

---

## 🚀Installation
`npm install scathach-api@latest / yarn add scathach-api@latest`  

## Usage
> Documentation: https://sinkaroid.github.io/scathach-api  

CommonJS should do with `require('scathach-api')`  
- Api key is optional: https://scathach.dev/dashboard

```js
import Scathach from 'scathach-api'

const config = {
  useragent: '<user-agent>',
  apikey: '<scathach.dev api>' // optional
};

const sca = new Scathach(config);

sca.getFgo().then((res) => { console.log('fgo', res) });
// => Random normalizes FGO sex data

sca.getGenshin().then((res) => { console.log('genshin', res) });
// => Random normalizes Genshin impact sex data

sca.getAzur().then((res) => { console.log('azur', res) });
// => Random normalizes Azurlane sex data

sca.getHololive().then((res) => { console.log('hololive', res) });
// => Random normalizes Hololive sex data

sca.getArknights().then((res) => { console.log('arkinghts', res) });
// => Random normalizes Arkinghts sex data

sca.getFireEmblem().then((res) => { console.log('fire_emblem', res) });
// => Random normalizes Fire emblem sex data

sca.getGirlsFrontline().then((res) => { console.log('gfl', res) });
// => Random normalizes Girls' frontline sex data

sca.getKancolle().then((res) => { console.log('kancolle', res) });
// => Random normalizes Kancolle girls sex data

sca.getReaction('smug').then((res) => { console.log('smug', res) });
// => Random smug reaction

sca.searchR34('futanari', 100).then((res) => { console.log('futanari', res) });
// => Bulk image request from r34, not an object, ready to extends

sca.getAnimeSex('hentai').then((res) => { console.log('anime sex', res) });
// => Get random anime sex like nekos.life do but more juicier 
```

## Results example
- **Fgo**
```js
fgo {
  data: {
    character: 'medusa (rider)',
    approver: '@sinkaroid',
    favorites: 0,
    rating: 'questionable',
    category: 'fgo'
  },
  info: '0.48',
  image: 'https://tomoe.sinkaroid.org/original/d3/96/d396bfb5afed67e708a0664473963b0c.jpg',
  size: 'original',
  type: 'jpg',
  nsfw: true,
  fetch: '6PXq4YVgBS'
}
```
- **Genshin**
```js
genshin {
  data: {
    character: 'beidou',
    approver: '@sinkaroid',
    favorites: 0,
    rating: 'questionable',
    category: 'genshin_impact'
  },
  info: '0.39',
  image: 'https://tomoe.sinkaroid.org/original/87/e8/87e8e55ab9a7c02779c7086ec8f36641.png',
  size: 'original',
  type: 'png',
  nsfw: true,
  fetch: 'qyVAlZMS9b'
}
```
- **Azur lane**
```js
azur {
  data: {
    character: 'taihou',
    approver: '@sinkaroid',
    favorites: 0,
    rating: 'explicit',
    category: 'azur_lane'
  },
  info: '0.41',
  image: 'https://tomoe.sinkaroid.org/original/5c/40/5c408922b9195f37e0744adda01bdbac.jpg',
  size: 'original',
  type: 'jpg',
  nsfw: true,
  fetch: 'DkOC0M3GrNQUZpAcHWqP'
}
```

- **search method**

```js
gelbooru {
  info: '0.55',
  message: "i've took 50 clean images of the total initial data 50",
  pattern_block: '/',
  clean_image: [
    'https://img3.gelbooru.com/images/33/2d/332dac3ee83a39da47891addfc0171f4.jpg',
    'https://img3.gelbooru.com/images/93/31/9331dd4702b22e2f8561f21c6f3ac24a.jpg',
    'https://img3.gelbooru.com/images/5c/e4/5ce467ef4b3aa9a59d4aa5a8ecf115b6.jpg',
    'https://img3.gelbooru.com/images/b4/45/b44516efa363b00e9b72df5727d9de95.jpeg' // and so on
  ],
  is_shuffle: true,
  from_booru: 'gelbooru'
}
```

## Pronunciation
[`en_US`](https://www.localeplanet.com/java/en-US/index.html) • **/skah·hahk/** — Scathach bot is an FGO-oriented Lewd bot then this wrapper exists for it. [Click here to spill](https://discord.com/oauth2/authorize?client_id=724047481561809007&permissions=808840278&response_type=code&scope=bot+applications.commands)

## Legal

This tool can be freely copied, modified, altered, distributed without any attribution whatsoever. However, if you feel
like this tool deserves an attribution, mention it. It won't hurt anybody

## Limitations
- There is a hard limit of 100 posts per [`search()`](https://sinkaroid.github.io/scathach-api/classes/index.Scathach.html) request
- There is a rate limit every 1 seconds per request
- The instance has easy to overload, your data returns may lead to null

## Support me
> This instance sits together with Scathach bot, the server may easy to overload then upgrading stuff is not really cheap for me, any kind of donations will helps.
<img width="500" src="https://cdn.discordapp.com/attachments/952117487166705747/974559294517284874/Screenshot_428.png" alt="cf">
