const { UserService } = require('../services');

async function register(req, res) {
    try {
      const user = await UserService.register({
        email: req.body.email,
        password: req.body.password,
      });
      return res.status(201).json({
        success: true,
        msg: 'Account created',
        data: user,
        error: {}
      });
    } catch (error) {
      return res.status(error.statusCode).json(
        {
          success: false,
          msg: 'Something went wrong',
          data: {},
          error: error
        }
      );
    }
  }

  async function login(req, res) {
    try {
      const user = await UserService.login({
        email: req.body.email,
        password: req.body.password,
      });
      return res.status(200).json({
        success: true,
        msg: 'login successfull',
        data: user,
        error: {}
      });
    } catch (error) {
      return res.status(error.statusCode).json({
        success: false,
        msg: 'Something went wrong',
        data: {},
        error: error
      });
    }
  }

  module.exports = {
    register,
    login
  }