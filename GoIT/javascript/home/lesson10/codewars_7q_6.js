function add() {
    return [].reduce.call(arguments, function(sum, value, index) {
        return sum + (value * (index + 1));
    }, 0);
}