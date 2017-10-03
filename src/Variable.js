function Variable(identifier) {
    this.identifier = identifier;
}

Variable.prototype = {

    // Variable ~> Context -> Boolean
    interpret: function (context) {
        return context[this.identifier];
    }
    
};

module.exports = Variable;
