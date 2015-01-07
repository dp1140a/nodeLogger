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
        dateFormat: 'DD/MMM/YYYY:HH:mm:ss.SSS ZZ'
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
            var s = new Error().stack;
            var sLine = s.split("\n")[4];
            var lineNum = new RegExp(/([a-z]*\.js.*):*([^\)]){1}/).exec(sLine);
            //var lineNum = sLine.match(/([a-z]*\.js.*):*([^\)]){1}/);
            //console.log(lineNum instanceof Array);
            console.log('[' + (moment().format(config.dateFormat) + '] [' + level + '] ' + lineNum[0] + ': ' + message)[level]);
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

Logger.init();
module.exports = Logger;
