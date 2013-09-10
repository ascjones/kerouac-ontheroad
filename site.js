var kerouac = require('kerouac');
var site = kerouac();

site.set('base url', 'http://ontheroad.com/');
site.set('output', 'ontheroad.com');

site.engine('ejs', require('ejs-locals'));

site.content('content');
site.static('public');

// site.plug(require('kerouac-sitemap')());

site.generate(function(err) {
  if (err) {
    console.error(err.message);
    console.error(err.stack);
    return;
  }
});