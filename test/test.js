/*global describe, it */
'use strict';
var assert = require('assert');
var nodelogger = require('../');

describe('nodelogger node module', function () {
    it('must have at least one test', function () {
        nodelogger();
        assert(false, 'I was too lazy to write any tests. Shame on me.');
    });
});
