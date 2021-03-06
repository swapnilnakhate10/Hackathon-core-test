import * as express from "express";
import EventService = require("../service/EventService");
import { getLogger } from 'log4js';
const logger = getLogger("Event Controller");

class EventController {
    private localEventService: EventService;
    constructor() {
        logger.debug("Initiated Event Controller");
        this.localEventService = new EventService();
    }

    public createEvent(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            logger.debug("Creating Event in a Controller");
            const event = req.body;
            const eventService = new EventService();
            eventService.createEventData(event, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            logger.error("Exception in creating Event Data : ", e);
        }
    }

    public getEventById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            logger.debug("Get Event by Id");
            const eventService = new EventService();
            const eventId = req.params.id;
            eventService.getEventById(eventId, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            logger.error("Exception in getting all Event Data . ", e);
        }
    }

    public getAllEvents(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            logger.debug("Get all Events");
            const eventService = new EventService();
            eventService.getAllEventData((error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            logger.error("Exception in getting all Event Data . ", e);
        }
    }

    public updateEvent(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            logger.debug("Update Event by Id");
            const eventId = req.params.id;
            const updateBody = req.body;
            const eventService = new EventService();
            eventService.updateEventData(eventId, updateBody, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            logger.error("Exception in updating Event Data : ", e);
        }
    }

    public deleteEventById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            logger.debug("Delete Event by Id");
            const eventId = req.params.id;
            const eventService = new EventService();
            eventService.deleteEventById(eventId, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            logger.error("Exception in deleting Event by Id : ", e);
        }
    }
}

export = EventController;
