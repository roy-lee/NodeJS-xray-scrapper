var Xray = require('x-ray');
var x = Xray();

var scrapeLink = "https://twitter.com/smrt_singapore";

x(scrapeLink , 'div.tweet', [{
  title: 'strong.fullname',
  tweet: 'tweet-text',
  link: '@data-permalink-path'
}])
  .write('SMRT_singapore.json')
