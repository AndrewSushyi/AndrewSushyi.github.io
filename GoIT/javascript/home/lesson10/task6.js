function getType(x){
    return typeof x;
}

console.log(getType({}));
console.log(getType(true));
console.log(getType(function(){}));
console.log(getType(12));
console.log(getType('string'));
console.log(getType(undefined));
console.log(getType([]));