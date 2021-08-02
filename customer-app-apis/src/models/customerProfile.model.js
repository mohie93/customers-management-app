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

  async save() {
    const { id, email, firstName, lastName } = this;
    return await DB(table).insert({ id, email, firstName, lastName });
  }

  static async getAll() {
    return DB(table).select('*');
  }

  static async getById(id) {
    return DB(table).where({ id }).select('*').first();
  }

  static async searchBy(needle) {
    return DB(table)
      .where('email', 'LIKE', `%${needle}%`)
      .orWhere('firstName', 'LIKE', `%${needle}%`)
      .orWhere('lastName', 'LIKE', `%${needle}%`)
      .select('*');
  }

  static async orderBy(attribute, direction) {
    return DB(table).orderBy(attribute, direction);
  }

  static async destroy(id) {
    return DB(table).where({ id }).del();
  }

  static async update(id, options) {
    return DB(table).where({ id }).update(options);
  }
}

module.exports = CustomerProfile;
