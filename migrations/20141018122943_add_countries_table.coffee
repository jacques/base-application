
exports.up = (knex, Promise) ->
  Promise.all [
    knex.schema.createTable 'countries', (t) ->
      t.increments('id').primary()
      t.string('countryname').unique()
      t.string('tld').unique()
      t.timestamps()
  ]
  


exports.down = (knex, Promise) ->
  
