const express = require('express');

const { UserController } = require('../../controllers');
const { UserMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/register', 
        UserMiddlewares.validateAuthRequest,
        UserController.register);

module.exports = router;