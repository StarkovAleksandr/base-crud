const bcrypt = require("bcrypt");

const saltRounds = 10;

const generetaHash = async (str) => {
  try {
    const hash = await bcrypt.hash(str, saltRounds);
    return hash;
  } catch (err) {
    throw err;
  }
};

const compareHash = async (str, hashed) => {
  try {
    const hash = await bcrypt.compare(str, hashed);
    return hash;
  } catch (err) {
    throw err;
  }
};

module.exports.generetaHash = generetaHash;
module.exports.compareHash = compareHash;
