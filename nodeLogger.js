'use strict';
var colors = require('colors');

var Logger = function(logLevel) {
    colors.setTheme({
        DEBUG: 'blue',
        INFO: 'green',
        WARN: 'yellow',
        ERROR: 'red'
    });

    var levels = ['DEBUG', 'INFO', 'WARN', 'ERROR'];
    var curLevel = 'INFO'

    var getLogLevel = function() {
        return curLevel;
    };

    var setLogLevel = function(level) {
        if (levels.indexOf(level.toUpperCase()) == -1) {
            throw level + " is not a valid log level. Use [ERROR|WARN|INFO|DEBUG]";
        } else {
            curLevel = level.toUpperCase();
        }
    };

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
        var TS = new Date();
        if (levels.indexOf(level) >= levels.indexOf(curLevel)) {
            if (typeof message !== 'string') {
                message = JSON.stringify(message);
            };
            console.log((TS.toISOString() + ' [' + level + ']: ' + message)[level]);
        }
    }

    if (logLevel != undefined)
        this.setLogLevel(logLevel);

    return {
        setLogLevel: setLogLevel,
        getLogLevel: getLogLevel,
        debug: debug,
        info: info,
        warn: warn,
        error: error
    };
}

module.exports = Logger();
