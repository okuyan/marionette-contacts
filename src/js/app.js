var Backbone = require('backbone');
var Marionette = require('marionette');
var _ = require('underscore');

var app = new Marionette.Application();

app.addRegions({
  layoutRegion: '#app-container'
});

app.commands.setHandler('show', function(view) {
  view.app = app;
  app.layout.getRegion('content').show(view);
});

module.exports = app;