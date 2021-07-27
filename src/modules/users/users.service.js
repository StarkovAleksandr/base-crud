const usersRepository = require("./users.repository");

const { generetaHash } = require("../../common/utils/crypto");

class UsersService {
  async create(user) {
    const hashPassword = await generetaHash(user.password);
    return usersRepository.createOrUpdateUser({
      ...user,
      password: hashPassword,
    });
  }

  findAll() {
    return usersRepository.findAll();
  }

  findOne(id) {
    return usersRepository.findOneById(id);
  }

  async update(user, id) {
    const hashPassword = await generetaHash(user.password);
    return usersRepository.createOrUpdateUser(
      {
        ...user,
        password: hashPassword,
      },
      id
    );
  }

  remove(id) {
    return usersRepository.remove(id);
  }
}

module.exports = new UsersService();
