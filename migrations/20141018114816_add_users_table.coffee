
exports.up = (knex, Promise) ->
  Promise.all [
    knex.schema.createTable 'users', (t) ->
      t.increments('id').primary()
      t.string('username').unique()
      t.string('password')
      t.string('email').unique()
      t.string('firstname')
      t.string('surname')
      t.string('address1')
      t.string('address2')
      t.string('suburb')
      t.string('city')
      t.integer('province_id')
      t.integer('country_id')
      t.string('postal_code')
      t.timestamps()
  ]

exports.down = (knex, Promise) ->

