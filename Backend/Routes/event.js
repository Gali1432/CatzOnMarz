const express = require('express');
const router = express.Router();
const database = require('../Database/eventDB.js')
//security can be added for inserting new events into db 

//Crud endpoints for event in db goes here 
const getEventWithId = async (req, res) => { // requires id:[Number]
    if (req.body.id != null)
        database.getEvent(req.body.id)
            .then((event) => {
                res.send(event)
            })
            .catch((err) => {
                res.sendStatus(400).send(err)
            })
}

const getEvents = async (req, res) => {
    console.log("into getEvents()");
    database.getEvents()
        .then((events) => {
            res.send(events);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        });
}

const postEvent = async (req, res) => { //needs title, start, and end date
    console.log("into post event");
    try {
        await database.addEvent(req.body.eventData);
        res.sendStatus(200); // Send response after event is successfully added
    } catch (err) {
        console.error(err);
        res.sendStatus(400).send(err); // Send response in case of error
    }
}

const patchEvent = async (req, res) => { //needs the id of the event being updated along with full event data 
    database.updateEvent(req.body.eventId, req.body.eventData)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.sendStatus(400).send(err);
        })
}

const deleteEvent = async (req, res) => { //needs id of the event being deleted
    database.deleteEvent(req.body.eventId)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.sendStatus(400).send(err);
        })
}

//declare routes here
router.get('/', getEvents)
router.get('/id', getEventWithId)
router.post('/', postEvent)
router.patch('/', patchEvent)
router.delete('/', deleteEvent)

module.exports = router;