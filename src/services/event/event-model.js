'use strict';

// event-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const event = sequelize.define('events', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    owner: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  event.sync({force: true});

  return event;
};
