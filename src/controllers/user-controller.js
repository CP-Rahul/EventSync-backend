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
        date: user,
        error: {}
      });
    } catch (error) {
      return res.status(error.statusCode).json(
        {
          success: false,
          msg: 'Something went wrong',
          date: {},
          error: error
        }
      );
    }
  }

  module.exports = {
    register
  }