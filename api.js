const {get} = require('http');
const {URL, URLSearchParams} = require('url');
const endpoints = require('./injector.json');

function getContent(url) {
  return new Promise((resolve, reject) => {
    get(url, (res) => {
      const {statusCode} = res;
      if(statusCode !== 200) {
        res.resume();
        reject(`Uh oh, Request failed. ${statusCode}`);
      }
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => {rawData += chunk});
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } catch(e) {
          reject(`Error: ${e.message}`);
        }
      });
    }).on('error', (err) => {
      reject(`Error: ${err.message}`);
    })
  });
}

class scathachClient {
  constructor() {
    let self = this;
    self.sfw = {};
    self.nsfw = {};
    self.memes = {};
    self.dota = {};
    self.animemes = {};
    self.porn = {};
    self.sex = {};
    self.animated = {};
    let baseURL = 'http://192.145.238.5/~pasirm5/v3sca';
    Object.keys(endpoints.sfw).forEach(async (endpoint) => {
      self.sfw[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.sfw[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
        };
    });
    Object.keys(endpoints.nsfw).forEach( async (endpoint) => {
      self.nsfw[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.nsfw[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
      };
    });
    Object.keys(endpoints.memes).forEach( async (endpoint) => {
      self.memes[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.memes[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
      };
    });
    Object.keys(endpoints.dota).forEach( async (endpoint) => {
      self.dota[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.dota[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
      };
    });
    Object.keys(endpoints.animemes).forEach( async (endpoint) => {
      self.animemes[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.animemes[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
      };
    });
    Object.keys(endpoints.porn).forEach( async (endpoint) => {
      self.porn[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.porn[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
      };
    });
    Object.keys(endpoints.sex).forEach( async (endpoint) => {
      self.sex[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.sex[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
      };
    });
    Object.keys(endpoints.animated).forEach( async (endpoint) => {
      self.animated[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.animated[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
      };
    });
  }
}

module.exports = scathachClient;
