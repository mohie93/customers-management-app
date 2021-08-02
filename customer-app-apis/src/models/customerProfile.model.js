'use strict';

const DB = require('../configs/kenx');
const { v4: uuidv4 } = require('uuid');

const table = 'customers_profiles';

class CustomerProfile {
  constructor(payload) {
    this.id = uuidv4();
    this.email = payload.email;
    this.first_name = payload.first_name;
    this.last_name = payload.last_name;
  }

  async save() {
    const { id, email, first_name, last_name } = this;
    return await DB(table).insert({ id, email, first_name, last_name });
  }

  static async getAll() {
    return DB(table).select('*');
  }

  static async getById(id) {
    return DB(table).where({ id }).select('*').first();
  }

  static async getBy(attribute, key) {
    return DB(table).where(attribute, 'LIKE', `%${key}%`).select('*');
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
