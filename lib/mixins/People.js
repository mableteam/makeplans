'use strict';

var qs = require('querystring');

function getPeople(params){
    params = params||{};
    var path = 'people/?';
    path += qs.stringify(params);
    return this._get(path);
}

function createPerson(params){
    return this._post('people/', {person:params});
}

function updatePerson(personId, params){
    return this._put('people/' + personId, {person:params});
}

module.exports = {
    getPeople: getPeople,
    createPerson: createPerson,
    updatePerson: updatePerson
};