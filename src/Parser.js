function Parser() {
    
}

Parser.prototype = {

    // Parser ~> String -> (ParseTree, Boolean)
    parse: function (expression) {
        if (expression === "") {
            return [{}, false];
        }

        return [{}, true];
    }
    
}

module.exports = Parser;
