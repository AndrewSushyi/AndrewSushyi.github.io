Object.prototype.hash = function(string) {
    var splitString = string.split('.');
    for (var i = 0, obj = this; i < splitString.length && (obj = obj[splitString[i]]); i++) {}
    return obj
}