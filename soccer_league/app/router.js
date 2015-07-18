import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('football', { path: "/" }, function() {
    this.route('new-team');
    this.route('new-league');
    this.route('new-category');
  });
  this.route("results");
  this.route("football/new-team");
  this.route("football/new-league");
  this.route("football/new-category");
  });

export default Router;
