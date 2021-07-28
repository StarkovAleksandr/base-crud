const usersService = require("../users/users.service");
const DATA_USERS = require("./data/users.data");

class InitializerService {
  initializeAll() {
    this.#initializeUsers();
  }

  #initializeUsers() {
    DATA_USERS.forEach((user) => {
      usersService.create(user);
    });
  }
}

module.exports = new InitializerService();
