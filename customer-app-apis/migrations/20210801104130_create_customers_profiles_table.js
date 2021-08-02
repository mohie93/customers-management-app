'use strict';

require('dotenv').config({});

exports.up = function (knex) {
  return knex.schema.hasTable('customers_profiles').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('customers_profiles', (table) => {
        table.uuid('id').primary();
        table.string('first_name').nullable();
        table.string('last_name').nullable();
        table.string('email').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
    }
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('customers_profiles');
};
