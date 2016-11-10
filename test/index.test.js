var fn = require('../src');
var assert = require('assert');
describe('basic test', function() {
    it('must return true', function() {
        assert.equal(fn.T(), true);
    });
    it('must return false', function() {
        assert.equal(fn.F(), false);
    });
})