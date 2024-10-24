const { EventRepository } = require('../repositories');
const AppError = require('../utils/error/app-error');

async function createEvent(data) {
    try {
        const event = await EventRepository.create(data);
        return event;
    } catch (error) {
        throw new AppError('Something went wrong while creating event');
        
    }
}

async function getAllEvents(userId) {
    try {
        const events = await EventRepository.getAll(userId);
        return events;
    } catch (error) {
        throw new AppError('Something went wrong while fetching events', 500);
        
    }
}

async function updateEvents(id, data) {
    if(!id) {
        throw new AppError('id is required', 400);
    }
    try {
       let event = await EventRepository.get(id);
        if(!event) {
            throw new AppError('Can\'t find the event', 400);
        }
        event = await EventRepository.update(id, data);
        return event;
    } catch (error) {
        if(error instanceof AppError) {
            throw error
        }
        throw new AppError('Something went wrong while fetching events', 500);
        
    }
}

async function deleteEvents(id) {
    if(!id) {
        throw new AppError('id is required', 400);
    }
    try {
        const events = EventRepository.destroy(id);
        return events;
    } catch (error) {
        throw new AppError('Something went wrong while fetching events', 500);
        
    }
}

module.exports = {
    createEvent,
    getAllEvents,
    updateEvents,
    deleteEvents
}