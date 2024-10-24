const express = require('express');

const { EventController } = require('../../controllers');
const { EventMiddlewares } = require('../../middlewares');
const { UserMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/', 
        EventMiddlewares.validateCreateEventRequest,
         UserMiddlewares.checkAuth,
        EventController.createEvent);

router.get('/',
        UserMiddlewares.checkAuth,
        EventController.getAllEvents);

router.patch('/:id',
        EventMiddlewares.validateUpdateEventRequest,
        UserMiddlewares.checkAuth,
        EventController.updateEvents);

router.delete('/:id',
        UserMiddlewares.checkAuth,
        EventController.deleteEvents);

module.exports = router;