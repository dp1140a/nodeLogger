'use strict';
var colors = require('colors');
var moment = require('moment'); //http://momentjs.com/docs/

var Logger = (function() {

    var config = {
        logLevel: 'INFO',
        colors: {
            DEBUG: 'blue',
            INFO: 'green',
            WARN: 'yellow',
            ERROR: 'red'
        },
        dateFormat: 'YYYY-MMM-DD:HH:mm:ss.SSS ZZ'
    };

    var init = function() {
        if (arguments[0]) {
            for (var prop in arguments[0]) config[prop] = arguments[0][prop];
        }

        colors.setTheme(config.colors);
    };

    var levels = ['DEBUG', 'INFO', 'WARN', 'ERROR'];

    var debug = function(message) {
        log('DEBUG', message);
    };

    var info = function(message) {
        log('INFO', message);
    };

    var warn = function(message) {
        log('WARN', message);
    };

    var error = function(message) {
        log('ERROR', message);
    };

    var log = function(level, message) {
        if (levels.indexOf(level) >= levels.indexOf(config.logLevel)) {
            if (typeof message !== 'string') {
                message = JSON.stringify(message);
            }
            console.log((moment().format(config.dateFormat) + ' [' + level + ']: ' + message)[level]);
        }
    };

    return {
        init: init,
        config: config,
        debug: debug,
        info: info,
        warn: warn,
        error: error
    };
})();
console.log(moment().format());
Logger.init();
module.exports = Logger;
