function isPangram(string){
    var stringArray = string.toLowerCase().match(/[a-z]/g).sort().join('').replace(/(.)\1+/g,'$1');
    return (stringArray.length === 26);
}