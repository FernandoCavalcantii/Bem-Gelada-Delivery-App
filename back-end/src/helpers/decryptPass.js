const md5 = require('md5');

const decryptPass = async (password, dbPassword) => {
  const md5Password = md5(password);

  if (md5Password !== dbPassword) {
    return false;
  }

  return true;
};

module.exports = decryptPass;
