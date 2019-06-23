const axios = require('axios');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.TOKEN;

const OUTFILE_NAME = path.resolve(__dirname, "../functions/url.json");
const MAX_PAGE = 100;
const WAIT_SEC = 5000;
const PER_PAGE = 100;

const delay = async (ms) => {
  return await new Promise(resolve => setTimeout(resolve, ms));
}

const getQiitaData = async (page) => {
  return await axios.get("https://qiita.com/api/v2/items", {
    headers: {
      'Authorization': `Bearer ${TOKEN}`
    },
    params: {
      'page': page,
      'per_page': PER_PAGE,
    }
  });
}

const getLatestQiitaUrls = async () => {
  let allUrls = [];
  for (let page=1; page<=MAX_PAGE; page++) {
    console.log("page:", page);
    const response = await getQiitaData(page);
    const urls = response.data.map((article) => {
      return {'title': article.title, 'url': article.url};
    })
    console.log(urls)
    Array.prototype.push.apply(allUrls, urls);
    await delay(WAIT_SEC);
  }
  return allUrls;
}

(async () => {
  const urls = await getLatestQiitaUrls();
  fs.writeFile(OUTFILE_NAME, JSON.stringify(urls, undefined, 2), () => {
    console.log("Done!")
  });
})();
