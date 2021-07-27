const userService = require("./users.service");

class UserController {
  async create(req, res) {
    const createdUser = await userService.create(req.body);
    res.status(201).json(createdUser);
  }

  findAll(_, res) {
    const users = userService.findAll();
    res.status(200).json(users);
  }

  findOne(req, res) {
    const existUser = userService.findOne(req.params.id);
    if (!existUser) {
      res.status(404).json({
        message: `User by id #${req.params.id} not found`,
      });
    }

    res.status(200).json(existUser);
  }

  async update(req, res) {
    const existUser = userService.findOne(req.params.id);
    if (!existUser) {
      res.status(404).json({
        message: `User by id #${req.params.id} not found`,
      });
    }

    const updateUser = await userService.update(req.body, req.params.id);
    res.status(200).json(updateUser);
  }

  remove(req, res) {
    const existUser = userService.findOne(req.params.id);
    if (!existUser) {
      res.status(404).json({
        message: `User by id #${req.params.id} not found`,
      });
    }

    userService.remove(req.params.id);
    res.status(200).json(true);
  }
}

module.exports = new UserController();
