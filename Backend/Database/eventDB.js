//File for any logic involving the database
const db = require('./mongoDB.js');

/*
Sample Event Schema 
{"_id":{"$oid":"65d564b90ffa3de6450b7f1d"},
"title":"Test Event",
"start":"2019-09-05T09:00:00",
"end":"2019-09-05T18:00:00",
"id":{"$numberLong":"0"}}
*/

//if this function is given a number it will search for the event with the corresponding id
async function getEvent(eventData) { 
    var event = await db.interface("get", "Event", { id: eventData });
    return event;
}

async function getEvents(){
    var events = await db.interface("get", "Event", "all");
    return events;
}

module.exports = {
    getEvent, getEvents
}