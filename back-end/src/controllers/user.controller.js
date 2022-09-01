const userService = require('../services/user.service');

module.exports = {
  async create(req, res) {
    const { name, email, password, role } = req.body;
    const token = await userService.create({ name, email, password, role });
    return res.status(201).json({ token });
  },

  async getAll(req, res) {
    const { role } = req.data;
    const users = await userService.getAll(role);
    return res.status(200).json(users);
  },

  async remove(req, res) {
    const {
      params: { id },
      data: { role },
    } = req;
    await userService.remove(id, role);
    return res.status(200).end();
  },

  async getAllSellers(_req, res) {
    const sellers = await userService.getAllSellers();
    return res.status(200).json(sellers);
  },
};
