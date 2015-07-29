'use strict';

var fs = require('fs');

function MakePlans(apiKey, account, test){
    this.apiKey = apiKey;
    this.account = account;
    this.test = !!test;
    this.baseUrl = constructBaseUrl(apiKey, account, this.test);
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
        mixin =  require('./mixins/' + file);
    }catch(err){
        console.error(err);
    }
    
    return mixin;
});

Mixins.forEach(function(mixin){
    Object.keys(mixin).forEach(function(key){
       MakePlans.prototype[key] = mixin[key]; 
    });
});

module.exports = MakePlans;