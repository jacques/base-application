# Base Application

This is an express with mysql and passport application to replace the
Slim + mysql PHP application that I base various projects off.

The idea behind this application is to be able to show how to use
express with mysql/percona/mariadb with passport to authenticate users.

The application is licensed under the MIT license so you can use it
as a base for your next app.

## Database Migrations

```
./node_modules/.bin/knex migrate:latest
```
