/**
 * uservoice.js
 *
 * Cordova UserVoice plugin for version >= 3.0.0
 *
 * Copyright(c) Resgrid 2015 (http://resgrid.com)
 */

var exec = require('cordova/exec');

var Uservoice = function(){};

Uservoice.init = function(config, successCallback, errorCallback){
	cordova.exec(successCallback, errorCallback, "CDVUserVoice", 'init', [config.site, config.key, config.secret]);	
};

Uservoice.launchFeedback = function(successCallback, errorCallback){
	cordova.exec(successCallback, errorCallback, "CDVUserVoice", 'launchFeedback', []);	
};

Uservoice.launchForum = function(successCallback, errorCallback){
	cordova.exec(successCallback, errorCallback, "CDVUserVoice", 'launchForum', []);	
};

Uservoice.launchContactUs = function(successCallback, errorCallback){
	cordova.exec(successCallback, errorCallback, "CDVUserVoice", 'launchContactUs', []);	
};

Uservoice.launchPostIdea = function(successCallback, errorCallback){
	cordova.exec(successCallback, errorCallback, "CDVUserVoice", 'launchPostIdea', []);	
};

module.exports = Uservoice;
