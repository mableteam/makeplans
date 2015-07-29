'use strict';

var qs = require('querystring');

function getAvailableSlots(serviceId, params){
    params = params || {};
    var path = 'services/' + serviceId + '/slots/?' + qs.stringify(params); 
    return this._get(path);
}

function getNextAvailableDate(serviceId, params){
    params = params||{};
    var path = 'services/' + serviceId + '/next_available_date?';
    path += qs.stringify(params);
    
    return this._get(path);
}

module.exports = {
    getAvailableSlots: getAvailableSlots,
    getNextAvailableDate: getNextAvailableDate
};