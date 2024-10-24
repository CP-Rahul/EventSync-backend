const { EventService } = require('../services');

async function createEvent(req, res) {
    try {
      const event = await EventService.createEvent({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        userId: req.user
      });
      return res.status(201).json({
        success: true,
        msg: 'Event created',
        data: event,
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

  async function getAllEvents(req, res) {
    try {
      const events = await EventService.getAllEvents(req.user);
      return res.status(200).json({
        success: true,
        msg: 'Events fetched',
        data: events,
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

  async function updateEvents(req, res) {
    const dataToUpdate = {
      ...(req.body.title && { title: req.body.title }),
      ...(req.body.description && { description: req.body.description }),
      ...(req.body.date && { date: req.body.date }),
    };  
    try {
      const events = await EventService.updateEvents(Number(req.params.id), dataToUpdate);
      return res.status(200).json({
        success: true,
        msg: 'Event updated',
        data: events,
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

  async function deleteEvents(req, res) {
    try {
      const event = await EventService.deleteEvents(Number(req.params.id));
      return res.status(200).json({
        success: true,
        msg: 'Events Deleted',
        data: event,
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


  module.exports = {
    createEvent,
    getAllEvents,
    updateEvents,
    deleteEvents
  }