import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('news');
  this.route('contact');
  this.route('article', {
    path: '/article/:article_id'
  });
  this.route('editor');
});

export default Router;
