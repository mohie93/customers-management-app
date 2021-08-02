'use strict';

require('dotenv').config({});

exports.up = function (knex) {
  return knex.schema.hasTable('customers_profiles').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('customers_profiles', (table) => {
        table.uuid('id').primary();
        table.string('firstName').nullable();
        table.string('lastName').nullable();
        table.string('email').notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
      });
    }
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('customers_profiles');
};
