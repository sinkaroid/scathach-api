export type config = {
  useragent?: string;
  apikey?: string | undefined;
};

export interface IReaction {
  url: string;
}

export interface IWaifu {
  image?: string;
  anime?: string;
  name?: string;
}

export interface IImgboard {
  info?: string;
  message?: string;
  pattern_block?: string
  clean_image?: string[];
  is_shuffle: boolean;
  from_booru?: string;
}

export interface ISexAnime {
  data: {
    character: string;
    approver: string;
    favorites: number;
    rating: string;
    category: string;
  }
  info: string;
  image?: string;
  size?: string;
  type?: string;
  nsfw: boolean;
  fetch: string;
}
