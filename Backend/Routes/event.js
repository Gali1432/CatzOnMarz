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

//declare routes here
router.get('/', getEvents)
router.get('/id', getEventWithId)
module.exports = router;