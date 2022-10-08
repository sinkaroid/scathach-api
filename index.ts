import defaults from './src/defaults';
import { config } from './src/types';
import { IReaction } from './src/types';
import { ISexAnime } from './src/types';
import { IWaifu } from './src/types';
import { IImgboard } from './src/types';
import request from './src/request';


class Scathach {
  private config: config
  private useragent: string
  private apikey: string
  static default: typeof Scathach;


  constructor(config?: config) {
    this.config = config || defaults;
    this.useragent = this.config?.useragent ? `${defaults.useragent} ${this.config.useragent}` : defaults.useragent;
    this.apikey = this.config?.apikey ? this.config.apikey : '';
  }


  /**
   * Get a random normalizes FGO sex data
   * @returns Unfiltered <code>scathach.redsplit.org/v5/fgo</code> Response
   */
  async getFgo() {

    const res = await request({
      category: 'fgo',
      useragent: this.useragent,
      apikey: this.apikey
    }).catch((err) => console.error(err));
    
    return res as ISexAnime;

  }

  /**
   * Get a random normalizes Genshin impact sex data
   * @returns Unfiltered <code>scathach.redsplit.org/v5/genshin</code> Response
   */
  async getGenshin() {

    const res = await request({
      category: 'genshin',
      useragent: this.useragent,
      apikey: this.apikey
    }).catch((err) => console.error(err));

    return res as ISexAnime;

  }

  /**
  * Get a random normalizes Azur lane sex data
  * @returns Unfiltered <code>scathach.redsplit.org/v5/azur_lane</code> Response
  */
  async getAzur() {

    const res = await request({
      category: 'azur',
      useragent: this.useragent,
      apikey: this.apikey
    }).catch((err) => console.error(err));

    return res as ISexAnime;

  }

  /**
   * Get a Random Normalizes wholesome waifu data
   * @returns Unfiltered scathach.redsplit.org/v5/waifu Response
   */
  async getWaifu() {

    const res = await request({
      category: 'waifu',
      useragent: this.useragent,
      apikey: this.apikey
    }).catch((err) => console.error(err));

    return res as IWaifu;

  }

  /**
  * Get a random normalizes Arknights sex data
  * @returns Unfiltered <code>scathach.redsplit.org/v5/arknights</code> Response
  */
  async getArknights() {
    const res = await request({
      category: 'arknights',
      useragent: this.useragent,
      apikey: this.apikey
    }).catch((err) => console.error(err));

    return res as ISexAnime;

  }

  /**
  * Get a random normalizes Fire emblem sex data
  * @returns Unfiltered <code>scathach.redsplit.org/v5/fire_emblem</code> Response
  */
  async getFireEmblem() {

    const res = await request({
      category: 'fire_emblem',
      useragent: this.useragent,
      apikey: this.apikey
    }).catch((err) => console.error(err));

    return res as ISexAnime;

  }

  /**
  * Get a random normalizes Girls' frontline sex data
  * @returns Unfiltered <code>scathach.redsplit.org/v5/gfl</code> Response
  */
  async getGirlsFrontline() {

    const res = await request({
      category: 'gfl',
      useragent: this.useragent,
      apikey: this.apikey
    }).catch((err) => console.error(err));

    return res as ISexAnime;

  }

  /**
  * Get a random normalizes Hololive vtuber sex data
  * @returns Unfiltered <code>scathach.redsplit.org/v5/hololive</code> Response
  */
  async getHololive() {

    const res = await request({
      category: 'hololive',
      useragent: this.useragent,
      apikey: this.apikey
    }).catch((err) => console.error(err));

    return res as ISexAnime;

  }

  /**
  * Get a random normalizes Kancolle girls sex data
  * @returns Unfiltered <code>scathach.redsplit.org/v5/kancolle</code> Response
  */
  async getKancolle() {
 
    const res = await request({
      category: 'kancolle',
      useragent: this.useragent,
      apikey: this.apikey
    }).catch((err) => console.error(err));

    return res as ISexAnime;

  }

  /**
   * Get a random sex porn gif real shit
   * @returns Unfiltered scathach.redsplit.org/v5/sex Response
   */
  async getSex() {

    const res = await request({
      category: 'sex',
      useragent: this.useragent,
      apikey: this.apikey
    }).catch((err) => console.error(err));

    return res as ISexAnime;

  }

  /**
   * Get a reaction from servant fate
   * @param img The reaction to get
   * @example
   * getReaction("angry")
   * getReaction("bonk")
   * getReaction("cry")
   * getReaction("happy")
   * getReaction("hug")
   * getReaction("kiss")
   * getReaction("lol")
   * getReaction("nom")
   * getReaction("pat")
   * getReaction("pout")
   * getReaction("smug")
   * getReaction("uwu")
   * getReaction("wink")
   * @returns the random reaction that endpoints given
   */
  async getReaction(img: string) {
 
    const res = await request({
      category: 'reaction',
      img,
      useragent: this.useragent
    }).catch((err) => console.error(err));

    return res as IReaction;

  }

  /**
   * Get random anime sex
   * @param img The endpoints to get
   * @example
   * getAnimeSex("ass")
   * getAnimeSex("bdsm")
   * getAnimeSex("cum")
   * getAnimeSex("creampie")
   * getAnimeSex("manga")
   * getAnimeSex("femdom")
   * getAnimeSex("hentai")
   * getAnimeSex("incest")
   * getAnimeSex("masturbation")
   * getAnimeSex("public")
   * getAnimeSex("ero")
   * getAnimeSex("orgy")
   * getAnimeSex("elves")
   * getAnimeSex("yuri")
   * getAnimeSex("pantsu")
   * getAnimeSex("glasses")
   * getAnimeSex("blowjob")
   * getAnimeSex("boobjob")
   * getAnimeSex("foot")
   * getAnimeSex("thighs")
   * getAnimeSex("vagina")
   * getAnimeSex("ahegao")
   * getAnimeSex("uniform")
   * getAnimeSex("gangbang")
   * getAnimeSex("tentacles")
   * getAnimeSex("gif")
   * getAnimeSex("neko")
   * getAnimeSex("nsfwMobileWallpaper")
   * getAnimeSex("zettaiRyouiki")
   * @returns the random anime sex from endpoints given
   */
  async getAnimeSex(img: string) {

    const res = await request({
      category: 'animesex',
      img,
      useragent: this.useragent
    }).catch((err) => console.error(err));

    return res as IReaction;

  }

  /**
   * Bulk image request from gelbooru
   * @param tags The Tags your want to use for your Search
   * @param limit the amount of posts you want back
   * @param page the page you want to search on
   * @example
   * searchGelbooru("cat_girl")
   * searchGelbooru("cat_girl", 25)
   * searchGelbooru("cat_girl", 25, 2)
   * @returns A data that represents the proxied gelbooru response from scathach bot
   */
  async searchGelbooru(tags: string | string[], limit?: number, page?: number) {
    const res = await request({
      category: 'gelbooru',
      limit, tags, page,
      useragent: this.useragent
    }).catch((err) => console.error(err));

    return res as IImgboard;

  }

  /**
   * Bulk image request from r34
   * @param tags The Tags your want to use for your Search
   * @param limit the amount of posts you want back
   * @param page the page you want to search on
   * @example
   * searchR34("futanari")
   * searchR34("futanari", 25)
   * searchR34("futanari", 25, 2)
   * @returns A data that represents the proxied r34 response from scathach bot
   */
  async searchR34(tags: string | string[], limit?: number, page?: number) {
 
    const res = await request({
      category: 'r34',
      limit, tags, page,
      useragent: this.useragent
    }).catch((err) => console.error(err));

    return res as IImgboard;

  }

  /**
   * Bulk image request from safebooru
   * @param tags The Tags your want to use for your Search
   * @param limit the amount of posts you want back
   * @param page the page you want to search on
   * @example
   * searchSafebooru("cat")
   * searchSafebooru("cat", 25)
   * searchSafebooru("cat", 25, 2)
   * @returns A data that represents the proxied safebooru response from scathach bot
   */
  async searchSafe(tags: string | string[], limit?: number, page?: number) {

    const res = await request({
      category: 'safe',
      limit, tags, page,
      useragent: this.useragent
    }).catch((err) => console.error(err));

    return res as IImgboard;

  }

}


Scathach.default = Scathach;
export = Scathach;