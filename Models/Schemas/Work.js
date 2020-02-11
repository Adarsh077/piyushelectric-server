const Schema = require('mongoose').Schema;

module.export = new Schema({
  title: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true,
  }
})