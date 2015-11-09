/*Lazily executing a function*/
var make_lazy = function () {
    var args = Array.slice(arguments);
    var func = args.shift();

    return function(){
        return func.apply(this, args);
    }
};
