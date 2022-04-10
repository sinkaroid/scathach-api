import defaults from './src/defaults';
import { config } from './src/types';
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
   * Get a Random Normalizes FGO lewds data
   * @returns Unfiltered <code>scathach.redsplit.org/v5/fgo</code> Response
   */
  async getFgo() {
    try {
      const res = await request({
        category: 'fgo',
        useragent: this.useragent,
        apikey: this.apikey
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Get a Random Normalizes Genshin lewds data
   * @returns Unfiltered <code>scathach.redsplit.org/v5/genshin</code> Response
   */
  async getGenshin() {
    try {
      const res = await request({
        category: 'genshin',
        useragent: this.useragent,
        apikey: this.apikey
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  /**
  * Get a Random Normalizes Azurlane sex data
  * @returns Unfiltered <code>scathach.redsplit.org/v5/azur_lane</code> Response
  */
  async getAzur() {
    try {
      const res = await request({
        category: 'azur',
        useragent: this.useragent,
        apikey: this.apikey
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Get a Random Normalizes wholesome waifu data
   * @returns Unfiltered scathach.redsplit.org/v5/waifu Response
   */
  async getWaifu() {
    try {
      const res = await request({
        category: 'waifu',
        useragent: this.useragent,
        apikey: this.apikey
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Get a random sex porn gif
   * @returns Unfiltered scathach.redsplit.org/v5/sex Response
   */
  async getSex() {
    try {
      const res = await request({
        category: 'sex',
        useragent: this.useragent,
        apikey: this.apikey
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Get a reaction from servant fate
   * @param img The reaction to get
   * @returns Unfiltered servant.gitlab.com/d0g/servant/-/raw/master/_constant/ Response
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
    try {
      const res = await request({
        category: 'reaction',
        img,
        useragent: this.useragent
      });
      return res;
    } catch (error) {
      console.error(error);
    }
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
    try {
      const res = await request({
        category: 'gelbooru',
        limit, tags, page,
        useragent: this.useragent
      });
      return res;
    } catch (error) {
      console.error(error);
    }
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
    try {
      const res = await request({
        category: 'r34',
        limit, tags, page,
        useragent: this.useragent
      });
      return res;
    } catch (error) {
      console.error(error);
    }
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
    try {
      const res = await request({
        category: 'safe',
        limit, tags, page,
        useragent: this.useragent
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  }

}


Scathach.default = Scathach;
export = Scathach;