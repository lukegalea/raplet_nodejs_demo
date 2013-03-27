var request = require('request');

/*
 * GET home page.
 */

var metadata = function(req, res, next) {
  res.jsonp({
    name: 'PN Coaching',
    description: 'Displays information about each client while browsing email',
    icon_url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/c11.0.159.159/305996_277385985698373_679123386_a.png'
  });
};

var raplet = function(req, res, next) {
  res.render('expanded', function(err, expanded) {    
    if (err) return next(err);
    res.render('collapsed', function(err, collapsed) {

      res.jsonp({        
        sections: [{
          expanded_html: expanded, 
          collapsed_html: collapsed
        }],
        css: req.css,
        js: req.js
      });

    });
  });  
};

var loadAsset = function(url, name, req, res, next) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      req[name] = body; 
      next();
    } else {
      next(error);
    }
  });
};

var loadCSS = function(req, res, next) {
  return loadAsset('https://127.0.0.1:3000/stylesheets/style.css', 'css', req, res, next);
};

var loadJS = function(req, res, next) {
  return loadAsset('https://127.0.0.1:3000/javascripts/raplet.js', 'js', req, res, next);
};

exports.index_middleware = [loadCSS, loadJS];

exports.index = function(req, res, next){
  if (req.query.show === 'metadata') {
    return metadata(req, res, next);
  } else {
    return raplet(req, res, next);
  } 
};