const bcrypt = require('bcrypt')

const { UserRepository } = require('../repositories');
const { ServerConfig } = require('../config');
const AppError = require('../utils/error/app-error');
const { generateToken, comparePassword } = require('../utils/common/auth');

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

  async function login(data) {
    try {
      const user = await UserRepository.getUser(data.email);
      if (!user) {
        throw new AppError("User not exixts", 400);
      }
      const passwordMatch = comparePassword(data.password, user.password);
      if (!passwordMatch) {
        throw new AppError("Invalid password", 400);
      }
      const jwtToken = generateToken({
        id: user._id,
        email: user.email,
      });
      return jwtToken;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError("Something went wrong while login", 500);
    }
  }
  

  module.exports = {
    register,
    login
  }