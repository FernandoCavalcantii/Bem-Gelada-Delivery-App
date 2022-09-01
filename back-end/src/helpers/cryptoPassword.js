const md5 = require('md5');

module.exports = {
  cryptoPassword(password) {
    return md5(password);
  },
};
