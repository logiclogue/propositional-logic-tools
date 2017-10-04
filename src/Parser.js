var _ = require("lodash");

function Parser() {
    
}

Parser.prototype = {

    // Parser ~> String -> (ParseTree, Boolean)
    parse: function (expression) {
        return [
            {},
            this.parseVariable(expression)[1] || this.parseNot(expression)[1]
        ];
    },

    parseVariable: function (expression) {
        return [{}, expression === "q" ||
            expression === "p" ||
            expression === "r" ||
            expression === "s"];
    },
    
    parseNot: function (expression) {
        var operand = expression.substring(1);

        return [
            {},
            "¬" + operand === expression &&
                this.parse(operand)[1]
        ];
    },

    parseOr: function (expression) {
        var operandA = expression.slice(1);

        return [
            {},

        ];
    }
    
}

module.exports = Parser;
