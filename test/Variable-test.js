var expect = require("chai").expect;
var Variable = require("../src/Variable");

describe("Variable", function () {
    var variable;

    before(function () {
        variable = new Variable("q");
    });

    describe("#interpret", function () {
        it("returns true with its identifier", function () {
            expect(variable.interpret({
                q: true
            })).to.be.true;
        });

        it("throws exception without its identifier", function () {
            expect(variable.interpret({})).to.throw("");
        });
    });
});
