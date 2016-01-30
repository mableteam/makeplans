'use strict';

var fs = require('fs');

function MakePlans(apiKey, account, test, log){
    this.apiKey = apiKey;
    this.account = account;
    this.test = !!test;
    this.baseUrl = constructBaseUrl(apiKey, account, this.test);
    this.log = log;
}

function constructBaseUrl(apiKey, account, test){
    var baseUrl = 'http';
    baseUrl += test ? "":"s";
    baseUrl += '://' + apiKey + '@';
    baseUrl += account;
    baseUrl += test ? ".test":"";
    baseUrl += '.makeplans.net/api/v1/';
    
    return baseUrl;
}


// load mixins
var Mixins = fs.readdirSync(__dirname + '/mixins').map(function(file){
    var mixin = {};
    
    try{
        mixin =  require(__dirname+'/mixins/' + file);
    }catch(err){
        console.error(err);
        console.error(err.stack);
    }
    
    return mixin;
});

Mixins.forEach(function(mixin){
    Object.keys(mixin).forEach(function(key){
       MakePlans.prototype[key] = mixin[key]; 
    });
});

module.exports = MakePlans;