function Variable(identifier) {
    this.identifier = identifier;
}

Variable.prototype = {

    // Variable ~> Context -> Boolean
    interpret: function (context) {
        var value = context[this.identifier];

        if (typeof value !== "boolean") {
            throw new SyntaxError("Not a boolean");
        }

        return value;
    }
    
};

module.exports = Variable;
