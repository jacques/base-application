'use strict'

var Province = bookshelf.Model.extend({
  tableName: 'provinces',
  country: function() {
    return this.belongsTo(Country);
  }
});

module.exports = Province;
