var Xray = require('x-ray');
var x = Xray({
  filters: {
    add: function (value) {
      return typeof value === 'string' ? "https://www.twitter.com" + value : value
    }
  }
});

var scrapeLink = "https://twitter.com/smrt_singapore";

x(scrapeLink , 'div.tweet', [{
  title: 'strong.fullname',
  tweet: '.tweet-text',
  link: '@data-permalink-path | add'
}])(console.log)
    .write('results/SMRT_singapore.json')
