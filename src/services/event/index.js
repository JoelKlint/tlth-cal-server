'use strict';

const service = require('feathers-sequelize');
const event = require('./event-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: event(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/events', service(options));

  // Get our initialize service to that we can bind hooks
  const eventService = app.service('/events');

  // Set up our before hooks
  eventService.before(hooks.before);

  // Set up our after hooks
  eventService.after(hooks.after);
};
