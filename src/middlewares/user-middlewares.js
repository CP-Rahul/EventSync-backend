const AppError = require("../utils/error/app-error");
const { UserService } = require('../services');

function validateAuthRequest(req, res, next) {
    if(!req.body.email || !req.body.password) {
        const error = new AppError('Email, password are required', 400);
        return res
                .status(400)
                .json({
                    success: false,
                    msg: 'Something went wrong',
                    data: {},
                    error: error
                });
    }
    next();
}

async function checkAuth(req, res, next) {
    try {
        const response = await UserService.isAuthenticated(req.headers['x-access-token']);
        if(response) {
            req.user = response;
            next();
        }
    } catch (error) {
        return res
                .status(400)
                .json({
                    
                    success: false,
                    msg: 'Something went wrong',
                    data: {},
                    error: error
                });
    }
}


module.exports = {
    validateAuthRequest,
    checkAuth
}