function interpret(input, values) {
    return variable(input, values);
}

function variable(input, values) {
    var isP = input === 'p';
    var isQ = input === 'q';
    var isR = input === 'r';
    var isS = input === 's';

    if (isP || isQ || isR || isS) {
        return values[input];
    }
}

module.exports = interpret;
