var expect = require("chai").expect;
var interpret = require("../src/interpret");

describe("interpret()", function () {
    context("given q", function () {
        it("returns true when q = true", function () {
            expect(interpret("q", { q: true })).to.be.true;
        });

        it("returns false when q = false", function () {
            expect(interpret("q", { q: false })).to.be.false;
        });
    });

    context("given p", function () {
        it("returns true when p = true", function () {
            expect(interpret("p", { p: true })).to.be.true;
        });
    });
});
