'use strict';
var colors = require('colors');
var df = require('moment');

var Logger = function() {

    var config = {
        logLevel: 'INFO',
        colors: {
            DEBUG: 'blue',
            INFO: 'green',
            WARN: 'yellow',
            ERROR: 'red'
        },
        dateFormat: 'YYYYMMMDD:HH:MM:ss.SSS ZZ'
    };

    colors.setTheme(config.colors);

    var levels = ['DEBUG', 'INFO', 'WARN', 'ERROR'];

    var debug = function(message) {
        log('DEBUG', message);
    }

    var info = function(message) {
        log('INFO', message);
    }

    var warn = function(message) {
        log('WARN', message);
    }

    var error = function(message) {
        log('ERROR', message);
    }

    var log = function(level, message) {
        var TS = moment(new Date());
        if (levels.indexOf(level) >= levels.indexOf(config.logLevel)) {
            if (typeof message !== 'string') {
                message = JSON.stringify(message);
            };
            console.log((TS.format(config.dateFormat) + ' [' + level + ']: ' + message)[level]);
        }
    }

    if (logLevel != undefined)
        this.setLogLevel(logLevel);

    return {
        config: config,
        debug: debug,
        info: info,
        warn: warn,
        error: error
    };
}

module.exports = Logger();