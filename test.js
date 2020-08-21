const fetch = require('node-fetch');
const cheerio = require('cheerio')

const links = ['https://book.douban.com/tag/%E5%B0%8F%E8%AF%B4?start=40&type=T']

fetch('https://book.douban.com/tag/%E5%B0%8F%E8%AF%B4').then(res => res.text()).then((text) => {
    const $ = cheerio.load(text)
    const title = $('title').text();
    console.log(title);
}).catch(console.log)