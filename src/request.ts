import c from './consts';
import { get, randomArray, ratelimit, delay } from './utils';

export default async function request(options:
    {
        category: 'fgo' | 'genshin' | 'azur' | 'waifu' | 'arknights' | 'fire_emblem' | 'gfl' | 'hololive' | 'kancolle' | 'sex' | 'gelbooru' | 'r34' | 'safe' | 'animesex' | 'reaction',
        tags?: string | string[],
        apikey?: string,
        limit?: number,
        block?: string | string[],
        page?: number,
        useragent?: string,
        img?: string
    }
) {

  switch (options.category) {

        

  case 'fgo':
    return ratelimit(delay, await get(c.endpoint.fgo, options.useragent || '').then(res => res.body as string));
  case 'genshin':
    return ratelimit(delay, await get(c.endpoint.genshin, options.useragent || '').then(res => res.body as string));
  case 'azur':
    return ratelimit(delay, await get(c.endpoint.azur, options.useragent || '').then(res => res.body as string));
  case 'waifu':
    return ratelimit(delay, await get(c.endpoint.waifu, options.useragent || '').then(res => res.body as string));
  case 'arknights':
    return ratelimit(delay, await get(c.endpoint.arknights, options.useragent || '').then(res => res.body as string));
  case 'fire_emblem':
    return ratelimit(delay, await get(c.endpoint.fire_emblem, options.useragent || '').then(res => res.body as string));
  case 'gfl':
    return ratelimit(delay, await get(c.endpoint.gfl, options.useragent || '').then(res => res.body as string));
  case 'hololive':
    return ratelimit(delay, await get(c.endpoint.hololive, options.useragent || '').then(res => res.body as string));
  case 'kancolle':
    return ratelimit(delay, await get(c.endpoint.kancolle, options.useragent || '').then(res => res.body as string));
  case 'sex':
    return ratelimit(delay, await get(c.endpoint.sex, options.useragent || '').then(res => res.body as string));
  case 'reaction':
            
    if (!options.img) throw Error('No Tags provided');
    
    if (!c.endpoint.reaction.includes(options.img))
      throw Error('Invalid parameter, please use one of the following: ' + c.endpoint.reaction.join(', '));
    const res = await get(`https://gitlab.com/d0g/servant/-/raw/master/_constant/${options.img}.json`, options.useragent || '').then(res => res.body as string);
    return { url: randomArray(res, `https://gitlab.com/d0g/servant/-/raw/master/${options.img}`) };
  
  case 'animesex':
            
    if (!options.img) throw Error('No Tags provided');
    
    if (!c.endpoint.animesex.includes(options.img))
      throw Error('Invalid parameter, please use one of the following: ' + c.endpoint.animesex.join(', '));
    const gitlab = await get(`https://gitlab.com/d0g/lewd/-/raw/master/${options.img}.json`, options.useragent || '').then(res => res.body as string);
    return { url: randomArray(gitlab) };

  case 'gelbooru':
    if (!options.tags) throw Error('No Tags provided');
    if (options.limit && (options.limit > 100 || options.limit < 25)) throw Error('Limit must be between 25 and 100');
    const geltags = options.tags instanceof Array ? options.tags.join('+') : options.tags;
    const gelres = ratelimit(delay, await get(`${c.endpoint.gelbooru}/?tags=${geltags}&limit=${options.limit || 50}&page=${options.page || 1}&shuffle=true`, options.useragent || '').then(res => res.body as string));
    return gelres;

  case 'r34':
    if (!options.tags) throw Error('No Tags provided');
    if (options.limit && (options.limit > 100 || options.limit < 25)) throw Error('Limit must be between 25 and 100');
    const r34tags = options.tags instanceof Array ? options.tags.join('+') : options.tags;
    const r34res = ratelimit(delay, await get(`${c.endpoint.r34}/?tags=${r34tags}&limit=${options.limit || 50}&page=${options.page || 1}&shuffle=true`, options.useragent || '').then(res => res.body as string));
    return r34res;

  case 'safe':
    if (!options.tags) throw Error('No Tags provided');
    if (options.limit && (options.limit > 100 || options.limit < 25)) throw Error('Limit must be between 25 and 100');
    const safetags = options.tags instanceof Array ? options.tags.join('+') : options.tags;
    const saferes: unknown = ratelimit(delay, await get(`${c.endpoint.safe}/?tags=${safetags}&limit=${options.limit || 50}&page=${options.page || 1}&shuffle=true`, options.useragent || '').then(res => res.body as string));
    return saferes;
            

  default:
    return {
      success: false,
      message: 'No URL provided'
    };
  }


}

export { ratelimit, get, randomArray };