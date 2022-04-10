import c from './consts';
import { get, randomArray, ratelimit, delay } from './utils';
const valid = ['angry', 'bonk', 'cry', 'happy', 'hug', 'kiss', 'lol', 'nom', 'pat', 'pout', 'smug', 'uwu', 'wink'];

export default async function request(options:
    {
        category: 'fgo' | 'genshin' | 'azur' | 'waifu' | 'sex' | 'gelbooru' | 'r34' | 'safe' | 'reaction',
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
    return ratelimit(delay, (await get(c.endpoint.fgo, options.useragent || '')).body as string);
  case 'genshin':
    return ratelimit(delay, (await get(c.endpoint.genshin, options.useragent || '')).body as string);
  case 'azur':
    return ratelimit(delay, (await get(c.endpoint.azur, options.useragent || '')).body as string);
  case 'waifu':
    return ratelimit(delay, (await get(c.endpoint.waifu, options.useragent || '')).body as string);
  case 'sex':
    return ratelimit(delay, (await get(c.endpoint.sex, options.useragent || '')).body as string);
  case 'reaction':
            
    if (!options.img) throw Error('No Tags provided');
    
    if (!valid.includes(options.img))
      throw Error('Invalid parameter, please use one of the following: ' + valid.join(', '));
    const res: unknown = (await get(`${c.endpoint.reaction}/${options.img}.json`, options.useragent || '')).body;
    const gambar: string = await res as string;
    return { url: randomArray(gambar, `https://gitlab.com/d0g/servant/-/raw/master/${options.img}`) };

  case 'gelbooru':
    if (!options.tags) throw Error('No Tags provided');
    if (options.limit && (options.limit > 100 || options.limit < 25)) throw Error('Limit must be between 25 and 100');
    const geltags = options.tags instanceof Array ? options.tags.join('+') : options.tags;
    const gelres: unknown = ratelimit(delay, (await get(`${c.endpoint.gelbooru}/?tags=${geltags}&limit=${options.limit || 50}&page=${options.page || 1}&shuffle=true`, options.useragent || '')).body as string);
    const gel: string = await gelres as string;
    return gel;

  case 'r34':
    if (!options.tags) throw Error('No Tags provided');
    if (options.limit && (options.limit > 100 || options.limit < 25)) throw Error('Limit must be between 25 and 100');
    const r34tags = options.tags instanceof Array ? options.tags.join('+') : options.tags;
    const r34res: unknown = ratelimit(delay, (await get(`${c.endpoint.r34}/?tags=${r34tags}&limit=${options.limit || 50}&page=${options.page || 1}&shuffle=true`, options.useragent || '')).body as string);
    const r34: string = await r34res as string;
    return r34;

  case 'safe':
    if (!options.tags) throw Error('No Tags provided');
    if (options.limit && (options.limit > 100 || options.limit < 25)) throw Error('Limit must be between 25 and 100');
    const safetags = options.tags instanceof Array ? options.tags.join('+') : options.tags;
    const saferes: unknown = ratelimit(delay, (await get(`${c.endpoint.safe}/?tags=${safetags}&limit=${options.limit || 50}&page=${options.page || 1}&shuffle=true`, options.useragent || '')).body as string);
    const safe: string = await saferes as string;
    return safe;
            

  default:
    return {
      success: false,
      message: 'No URL provided'
    };
  }


}

export { ratelimit, get, randomArray };