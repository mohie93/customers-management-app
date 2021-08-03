'use strict';

const DB = require('../configs/kenx');
const { v4: uuidv4 } = require('uuid');

const table = 'customers_profiles';

class CustomerProfile {
  constructor(payload) {
    this.id = uuidv4();
    this.email = payload.email;
    this.firstName = payload.firstName;
    this.lastName = payload.lastName;
  }

  save() {
    const { id, email, firstName, lastName } = this;
    return DB(table).insert({ id, email, firstName, lastName });
  }

  static getAll() {
    return DB(table).select('*');
  }

  static getById(id) {
    return DB(table).where({ id }).select('*').first();
  }

  static searchBy(needle) {
    return DB(table)
      .where('email', 'LIKE', `%${needle}%`)
      .orWhere('firstName', 'LIKE', `%${needle}%`)
      .orWhere('lastName', 'LIKE', `%${needle}%`)
      .select('*');
  }

  static orderBy(attribute, direction) {
    return DB(table).orderBy(attribute, direction);
  }

  static destroy(id) {
    return DB(table).where({ id }).del();
  }

  static update(id, options) {
    return DB(table).where({ id }).update(options);
  }
}

module.exports = CustomerProfile;
