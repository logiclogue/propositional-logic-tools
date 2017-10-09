var expect = require("chai").expect;
var Expression = require("../src/Expression");

describe("Expression", function () {
    var expression;

    before(function () {
        expression = new Expression();
    });

    describe("#interpret()", function () {

    });

    describe("#validate", function () {
        it("recognises q", function () {
            expect(expression.validate("q")).to.be.true;
        });
    });
});
