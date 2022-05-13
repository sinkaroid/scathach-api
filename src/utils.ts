import phin from 'phin';
const delay = 1000;
/**
   * GET request to scathach bot API
   * @param url The related endpoint
   * @param headers custom headers that you pass to the request
   * @returns Promise that resolves to the response body
   */
export async function get(url: string, headers: string) {
  return await phin({
    method: 'get',
    url: url,
    headers: {
      'User-Agent': headers,
    },
    parse: 'json',
    timeout: 10000
  });
}

/**
   * Shuffles array in place.
   * @param arr An array containing the items.
   * @param path callback path
   * @returns shuffled array
   */
export function randomArray(arr: string, path = '') {
  let pisah;
  if (path) pisah = '/';
  else pisah = '';

  return `${path}${pisah}${arr[Math.floor(Math.random() * arr.length)]}`;
}

/**
   * Rate limit handling for shit users which spamming the API
   * @param time The time in milliseconds
   * @param data The data that represents from get()
   * @returns resolved the requests
   */
export function ratelimit(time: number, data: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

export { delay };