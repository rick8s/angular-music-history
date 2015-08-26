requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash': '../bower_components/lodash/lodash.min',
    'q': '../bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ["jquery", "lodash", "firebase", "hbs", "bootstrap", "dom-access", "core-work", "authentication", "check-for-authentication", "get-songs", "get-more-songs", "populate-songs", "filter-by-artist", "filter-by-album", "song-entry-form"], 
  function($, lodash,  _firebase, Handlebars, bootstrap, dom, core, auth, checkAuth, getSongs, getMoreSongs, pop, filter, filterAlb, songEntry) {

  




     
  });










