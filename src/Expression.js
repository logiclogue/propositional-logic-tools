var Variable = require("./Variable");

function Expression() {
    this.variable = new Variable();
}

Expression.prototype = {

    // Expression ~> String -> Object -> (Boolean, Boolean)
    interpret: function (input, values) {
        $
    },

    // Expression ~> String -> Boolean
    validate: function (input) {
        return this.variable.validate(input);
    }
    
};

module.exports = Expression;
