const AppError = require("../utils/error/app-error");

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

module.exports = {
    validateAuthRequest
}