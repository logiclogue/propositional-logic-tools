var expect = require("chai").expect;
var Parser = require("../src/Parser");

describe("Parser", function () {
    var parser;

    before(function () {
        parser = new Parser();
    });

    describe("#parse()", function () {
        it("recognises q", function () {
            expect(parser.parse("q")[1]).to.be.true;
        });

        it("doesn't recognise nothing", function () {
            expect(parser.parse("")[1]).to.be.false;
        });
    });
});
