'use strict';

var qs = require('querystring');

function getEvents(params){
    params = params || {};
    var path = 'events/?';
    path += qs.stringify(params);
    
    return this._get(path);
}


function createEvent(params){
    return this._post('events', {event:params});
}

function updateEvent(eventId, params){
    return this._put('events/' + eventId, {event:params});
}

function deleteEvent(eventId){
    return this._delete('events/' + eventId);
}

module.exports = {
    getEvents: getEvents,
    createEvent: createEvent,
    updateEvent: updateEvent,
    deleteEvent: deleteEvent
};