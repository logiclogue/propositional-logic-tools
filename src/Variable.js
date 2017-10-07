function Variable() {
    
}

Variable.prototype = {

    // Variable ~> String -> Object -> (Boolean, Boolean)
    interpret: function (input, values) {
        if (!this.validate(input)) {
            return [false, false];
        }

        return [true, values[input]];
    },

    // Variable ~> String -> Boolean
    validate: function (input) {
        var isP = input === 'p';
        var isQ = input === 'q';
        var isR = input === 'r';
        var isS = input === 's';

        return isP || isQ || isR || isS;
    }
    
}

module.exports = Variable;
