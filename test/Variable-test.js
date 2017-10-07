var expect = require("chai").expect;
var Variable = require("../src/Variable");

describe("Variable", function () {
    var variable;

    before(function () {
        variable = new Variable();
    });

    describe("#validate()", function () {
        context("given q", function () {
            it("returns true", function () {
                expect(variable.validate("q")).to.be.true;
            });
        });

        context("given ^", function () {
            it("returns false", function () {
                expect(variable.validate("^")).to.be.false;
            });
        });
    });

    describe("#interpret()", function () {
        context("given q is true", function () {
            it("returns true", function () {
                expect(variable.interpret("q", { q: true })[1]).to.be.true;
            });
        });
    });
});
