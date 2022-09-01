const decryptPass = require('../helpers/decryptPass');

const passwordVerification = async (pw, dbPw) => {
  const correctPw = await decryptPass(pw, dbPw);
  return correctPw;
};

module.exports = passwordVerification;
