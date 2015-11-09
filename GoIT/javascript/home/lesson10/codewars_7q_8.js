var Calculator = {
    average: function() {
        var sum = [].reduce.call(arguments, function(a, b) { return a + b; }, 0);
        return sum === 0 ? 0 : sum / arguments.length;
    }
};