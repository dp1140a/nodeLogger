/*global describe, it */
'use strict';
var assert = require('assert');
var Log = require('../nodeLogger');

describe('Module Tests', function() {
    var write = function() {
    	Log.debug(Log.config);
        Log.debug('I AM DEBUG');
        Log.info('I AM INFO');
        Log.warn('I AM WARN');
        Log.error('I AM ERROR');
    }

    describe('Configuring logLevels', function() {
        it('must print out all log levels with default colors', function() {
            Log.init({
                logLevel: 'DEBUG'
            });
            write();
        });

        it('must print out INFO and above log levels with default colors', function() {
            Log.init({
                logLevel: 'INFO'
            });
            write();
        });

        it('must print out WARN and above log levels with default colors', function() {
            Log.init({
                logLevel: 'WARN'
            });
            write();
        });

        it('must print out ERROR and above log levels with default colors', function() {
            Log.init({
                logLevel: 'ERROR'
            });
            write();
        });

    });

    describe('Configure colors', function() {
        it('must print out all log levels with default colors in opposite order', function() {
            Log.init({
                logLevel: 'DEBUG',
                colors: {
                    DEBUG: 'rainbow',
                    INFO: 'yellow',
                    WARN: 'green',
                    ERROR: 'blue'
                }
            });
            write();
        });
    });


    describe('Configure DateFormats', function() {
        it('must print out all log levels with default colors and modified timestamp format', function() {
            Log.init({
                logLevel: 'DEBUG',
                colors: {
                    DEBUG: 'blue',
                    INFO: 'green',
                    WARN: 'yellow',
                    ERROR: 'red'
                },
                dateFormat: 'YYYY/MM/DD-HH:mm:ss.SSS ZZ'
            });
            write();
        });
    });
});
