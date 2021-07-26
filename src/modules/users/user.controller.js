const mappedUser = require("./user.utils");

const userStore = new Map([
  mappedUser({
    name: "Elon",
    username: "Elon_Musk",
    email: "@gmail.com",
    address: "1 Rocket Rd, Hawthorne, CA 90250",
  }),
]);

class UserController {
  create(req, res) {
    const [id, user] = mappedUser(req.body);
    userStore.set(id, user);
    res.status(201).json(user);
  }

  findAll(req, res) {
    res.status(200).json([...userStore.values()]);
  }

  findOne(req, res) {
    res.status(200).json(userStore.get(req.params.id));
  }

  update(req, res) {
    const [id, user] = mappedUser(req.body, req.params.id);
    userStore.set(id, user);
    res.status(200).json(user);
  }

  remove(req, res) {
    userStore.delete(req.params.id);
    res.status(200).json(true);
  }
}

module.exports = new UserController();
