var Xray = require('x-ray');
var x = Xray();

x('https://www.reddit.com/r/singapore/', '.entry', [{
  title: 'p.title',
  link: 'a.title@href'
}])
  .paginate('span.next-button > a@href')
  .limit(5)
  .write('reddit.json')
