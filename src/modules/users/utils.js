const { v4 } = require("uuid");

const mappedUser = (newUser, id = v4()) => [id, { id, ...newUser }];

module.exports = mappedUser;
