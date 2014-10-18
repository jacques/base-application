
exports.up = (knex, Promise) ->
  Promise.all [
    knex.schema.createTable 'provinces', (t) ->
      t.increments('id').primary()
      t.integer('country_id').index()
      t.string('code').unique()
      t.string('provincename').unique()
      t.timestamps()
  ]

exports.down = (knex, Promise) ->
  
