import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'soccer-league/tests/helpers/start-app';

var application;
var LEAGUES = {
  league: [
    { id: 1, name: "Juvenil", max_age:15, min_age: 20 },
    { id: 2, name: "Libre", max_age:50, min_age: 20 },
  ]
};

module('Acceptance | new league', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /new-league', function(assert) {
  visit('/new-league');

  andThen(function() {
    assert.equal(currentURL(), '/new-league');
  });

});
