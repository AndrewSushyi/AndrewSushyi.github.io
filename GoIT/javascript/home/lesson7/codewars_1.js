/*Closures and Scopes -- We want to create a function, which returns an array of functions, which return their index in the array. */
function createFunctions(n) {
    function constF(v){return function (){return v;}}
    var callbacks = [];

    for (var i=0; i<n; i++) {
        callbacks.push(constF(i));
    }

    return callbacks;
}
var callbacks = createFunctions(5);
console.log(callbacks);
console.log(callbacks[0]);
console.log(callbacks[0]()); // must return 0
console.log(callbacks[3]()); // must return 3

/*We want to create a function, which returns an array of functions, which return their index in the array. */