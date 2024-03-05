//File for any logic involving the database
const db = require("./mongoDB.js")

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
    console.log("Into getEvent()\nEvent Data: " + eventData);
    var event = await db.interface("get", "Event", { id: eventData });
    return event;
}

async function getEvents(){
    console.log("into getEvents()");
    var events = await db.interface("get", "Event", "all");
    console.log("Events: " + events);
    return events;
}

async function addEvent(eventData){ // needs a start, end, and title
    console.log("into create Event" + "\nEventData: " + eventData);
    await db.interface("post", "Event", eventData);
    return {status: 200, start: eventData.start}
}

async function updateEvent(eventId, eventData){ // Event data needs an ID
    eventData.id = eventId; //error checking 
    var event = await getEvent(eventData);
    event = event[0];
    return await db.interface("patch", "Event", [event, eventData]);
}

async function deleteEvent(eventId){
    await db.interface("delete", "Event", {id: eventId});
    return 200;
}

module.exports = {
    getEvent, getEvents, addEvent, updateEvent, deleteEvent
}