<div align="center">

   <a href="https://sinkaroid.github.io/scathach-api">
   <img width="480" src="https://cdn.discordapp.com/attachments/952117487166705747/962346332268400700/sca.png" alt="logo"></a></br><h2>scathach-api</h2>
   Scathach bot is a lewd bot, then this wrapper exists for it
   <br>
   <br> 

[![Test get](https://github.com/sinkaroid/scathach-api/actions/workflows/get.yml/badge.svg)](https://github.com/sinkaroid/lac/actions/workflows/get.yml)
[![Documentation](https://github.com/sinkaroid/scathach-api/actions/workflows/docs.yml/badge.svg)](https://sinkaroid.github.io/scathach-api)

----

</div>

## Getting started
Previous versions is completely ended for its services.

> This version is completely rewritten and just focused on minigame API, If you still rely on the old version install with  
`npm install scathach-api@0.0.9 / yarn add scathach-api@0.0.9`

## Features
<img align="right" src="https://scathach.dev/img/src/tong.png" width="400"></img>
This resources mostly hand-picked but also automate and does not low quality content
- Fate Grand order
  - tons of lewds servants data
- Genshin Impact
  - tons of lewds genshin data
- Azur Lane
  - tons of lewds ship data
- Get sex
  - tons of random gifs
- Waifu
  - Tons of wholesome waifus
- Reaction
  - Wholesome fgo reaction like smug, cry, pat and more

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
// => Random Normalizes FGO lewds data

sca.getGenshin().then((res) => { console.log('genshin', res) });
// => Random Normalizes Genshin lewds data

sca.getAzur().then((res) => { console.log('azur', res) });
// => Random Normalizes Azurlane sex data

sca.getReaction('smug').then((res) => { console.log('smug', res) });
// => Random smug reaction

sca.searchR34('futanari', 100).then((res) => { console.log('futanari', res) });
// => Bulk image request from r34, not an object, ready to extends
```

## Results
- **Fgo**
```js
fgo {
  data: {
    character: 'nero claudius',
    approver: '@sinkaroid',
    favorites: 0,
    rating: 'questionable',
    category: 'fgo'
  },
  info: '0.83',
  image: 'https://tomoe.scathach.software/original/3e/36/3e36f644a051bee376f1dda8c3717880.jpg',
  size: 'original',
  type: 'jpg',
  nsfw: true,
  fetch: 'rUFcyOimM2'
}
```
- **Genshin**
```js
genshin {
  data: {
    character: 'kujou sara',
    approver: '@sinkaroid',
    favorites: 0,
    rating: 'explicit',
    category: 'genshin_impact'
  },
  info: '0.85',
  image: 'https://tomoe.scathach.software/original/59/91/599160ee0840872d78250edcf4fd2d5c.png',
  size: 'original',
  type: 'png',
  nsfw: true,
  fetch: 'g5ljvRpnGL'
}
```
- **Azur lane**
```js
azur {
  data: {
    character: 'formidable',
    approver: '@sinkaroid',
    favorites: 0,
    rating: 'questionable',
    category: 'azur_lane'
  },
  info: '0.70',
  image: 'https://tomoe.scathach.software/original/c6/40/c6404521f422560458c767dde9410731.jpg',
  size: 'original',
  type: 'jpg',
  nsfw: true,
  fetch: 'eJ4TYhpE7ARmvwQxMldj'
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
- There is a hard limit of 100 posts per [`search()`](https://sinkaroid.github.io/lac/classes/index.Scathach.html) request
- There is a rate limit every 2 seconds per request
- The instance has easy to overload, your data returns may lead to null

## EoF
This instance sits with my bots, the server is not cheap for me, any kind of donations helps me a lot