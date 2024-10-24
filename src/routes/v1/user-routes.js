const express = require('express');

const { UserController } = require('../../controllers');
const { UserMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/register', 
        UserMiddlewares.validateAuthRequest,
        UserController.register);

router.post('/login', 
        UserMiddlewares.validateAuthRequest,
        UserController.login);

module.exports = router;