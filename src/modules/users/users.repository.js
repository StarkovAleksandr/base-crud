const mappedUser = require("./users.utils");

class UsersRepository {
  constructor() {
    this.map = new Map();
  }

  createOrUpdateUser(currentUser, currentId) {
    const [id, user] = mappedUser(currentUser, currentId);
    this.map.set(id, user);
    return user;
  }

  findAll() {
    return [...this.map.values()];
  }

  findOneById(id) {
    return this.map.get(id);
  }

  remove(id) {
    this.map.delete(id);
  }
}

module.exports = new UsersRepository();
