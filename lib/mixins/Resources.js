'use strict';

var qs = require('querystring');

function getResources(id){
    var path = 'resources';
    if(id){
        path += '/' + id;
    }
    return this._get(path);
}

function getResourceOpeningHours(id, params){
    params = params || {};
    var path = '/resources/' + id + '/opening_hours?';
    path += qs.stringify(params);
    
    return this._get(path);
}

function createResource( params ){
    return this._post('resources', {resource: params});
}

function updateResource(id, params){
    return this._put('resources/' + id, {resource: params});
}

function deleteResource(id){
    return this._delete('resources/' + id);
}

function getResourceExceptionDates(id, date, params){
    ///resources/{resource_id}/exception_dates
    var path = 'resources/' + id + '/exception_dates';
    if(date){
        path += '/' + date;
    }
    
    params = params || {};
    
    var qs = Object.keys(params).map(function(key){
        return key + '=' + params[key];
    }).join('&');
    
    path += '?' + qs;
    
    return this._get(path);
}


function createResourceExceptionDate(id, date, openingHours){
    return this._post('resources/' + id + '/exception_dates/' + date, {
            resource:{
                exception_date: {opening_hours:openingHours}
            }
        });
}

function deleteResourceExceptionDate(id, date){
    var path = 'resources/' + id + '/exception_dates/' + date;
    return this._delete(path);
}

module.exports = {
    createResources: createResource,
    getResources: getResources,
    getResource: getResources,
    getResourceOpeningHours: getResourceOpeningHours,
    updateResources:updateResource,
    deleteResources: deleteResource,
    getResourcesExceptionDates: getResourceExceptionDates,
    createResourcesExceptionDate: createResourceExceptionDate,
    updateResourcesExceptionDate: createResourceExceptionDate,
    deleteResourcesExceptionDate: deleteResourceExceptionDate
};