var App = require('./app');
var Layout = require('./views/layout');
var Router = require('./router');
var headerView = require('./views/header');
var footerView = require('./views/footer');
var $ = require('jquery');

$(function () {
  App.start({
    layout: new Layout({
      headerView: new headerView(),
      footerView: new footerView()
    }),
    router: new Router(App)
  });  
});

App.on('before:start', function(options) {
  App.layout = options.layout;
  App.layoutRegion.show(this.layout);
  App.appRouter = options.router;  
});

App.on('start', function(options) {
  if (Backbone.history) {
    Backbone.history.start();
    console.log('start!');
  }
});