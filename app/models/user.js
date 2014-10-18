'use strict'

var Country = require('./country.js');
var Province = require('./province.js');

var User = bookshelf.Model.extend({
  tableName: 'users',
  country: function() {
    return this.belongsTo(Country);
  },
  province: function() {
    return this.belongsTo(Province);
  }
});

module.exports = User;
