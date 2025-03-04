const moment = require('moment-timezone');

module.exports = function (schema) {
  // Add a pre-save middleware to format the timestamps before saving
  schema.pre('save', function (next) {
    this.createdAt = moment().tz('Australia/Sydney').format('YYYY-MM-DD HH:mm:ss');
    this.updatedAt = moment().tz('Australia/Sydney').format('YYYY-MM-DD HH:mm:ss');
    next();
  });
};
