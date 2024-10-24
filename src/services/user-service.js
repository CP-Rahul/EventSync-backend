const bcrypt = require('bcrypt')

const { UserRepository } = require('../repositories');
const { ServerConfig } = require('../config');
const AppError = require('../utils/error/app-error');

async function register(data) {
    try {
      let user = await UserRepository.getUser(data.email);
      if (user) {
        throw new AppError("User already exixts", 400);
      }
      const encryptedPassword = bcrypt.hashSync(
        data.password,
        +ServerConfig.SALT
      );
      data.password = encryptedPassword;
      user = await UserRepository.create(data);
      return user;
    } catch (error) {
      if(error instanceof AppError) throw error;
      throw new AppError("Something went wrong while registering", 500);
    }
  }
  
  module.exports = {
    register
  }