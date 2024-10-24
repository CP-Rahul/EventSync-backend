const AppError = require("../utils/error/app-error");

function validateCreateEventRequest(req, res, next) {
    if(!req.body.title || !req.body.description || !req.body.date) {
        const error = new AppError('Title, description, date are required', 400);
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

function validateUpdateEventRequest(req, res, next) {
    if(!req.body.title && !req.body.description && !req.body.date) {
        const error = new AppError('Any of the following Title, description, date is required', 400);
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
    validateUpdateEventRequest,
    validateCreateEventRequest,
}
