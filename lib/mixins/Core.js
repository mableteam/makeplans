'use strict';

var request = require('request');
var Q = require('q');

function _get(path){
    var deferred = Q.defer();
    
    var url = this.baseUrl + path;
    
    var options = {
        url: url,
        headers: {
            'User-Agent': this.account + ' (via makeplans node sdk)',
            Accept: 'application/json'
        }
    };
    
    request(options, handleResponse(deferred));
    
    return deferred.promise;
}

function _post(path, body){
    var deferred = Q.defer();
    var options = this._getOptions(path, body);
    
    request.post(options, handleResponse(deferred));
    
    return deferred.promise;
}

function _put(path, body){
    var deferred = Q.defer();
    var options = this._getOptions(path, body);
    request.put(options, handleResponse(deferred));
    return deferred.promise;
}

function _delete(path){
    var deferred = Q.defer();
    var url = this.baseUrl + path;
    var options = {
        url: url,
        headers: {
            'User-Agent': this.account + ' (via makeplans node sdk)',
            Accept: 'application/json'
        }
    };
    request.del(options, handleResponse(deferred));
    
    return deferred.promise;
    
}

function _getOptions(path, body){
    var url = this.baseUrl + path;
    
    var options = {
        url: url,
        headers:{
            'User-Agent': this.account + ' (via makeplans node sdk)',
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:body,
        json:true,
        encoding:'utf-8'
    };
    
    return options;
}

function handleResponse(deferred){
    return function(error, response, body){
        if(error){
            deferred.reject(error);
            return;
        }
        
        var responseObject = body;
        
        try{
            responseObject = JSON.parse(body);
        }catch(e){
            // body obviously not JSON!
        }
        
        if (response.statusCode == 200) {
            
            deferred.resolve(responseObject);
        }else{
            deferred.reject({body:body, status:response.statusCode});
        }
    };
}

module.exports = {
    _get: _get,
    _post: _post,
    _put: _put,
    _delete: _delete,
    _getOptions: _getOptions
};