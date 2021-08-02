const CustomerProfile = require('../models/customerProfile.model.js');

exports.index = async (req, res) => {
  const records = await CustomerProfile.getAll();
  return { statusCode: 200, data: records };
};

exports.show = async (req, res) => {
  const { id } = req.params;
  const record = await CustomerProfile.getById(id);
  return { statusCode: 200, data: record };
};

exports.create = async (req, res) => {
  const record = new CustomerProfile(req.body);
  await record.save();
  return { statusCode: 201, data: record };
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  await CustomerProfile.update(id, payload);
  return { statusCode: 200, data: { message: 'updated!' } };
};

exports.destroy = async (req, res) => {
  const { id } = req.params;
  await CustomerProfile.destroy(id);
  return { statusCode: 200, data: undefined };
};

exports.searchBy = async (req, res) => {
  const { attribute, key } = req.params;
  const records = await CustomerProfile.getBy(attribute, key);
  return { statusCode: 200, data: records };
};

exports.sortBy = async (req, res) => {
  const { attribute, direction } = req.params;
  const records = await CustomerProfile.orderBy(attribute, direction);
  return { statusCode: 200, data: records };
};
