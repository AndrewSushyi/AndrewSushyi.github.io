function swap(str) {
    return str.split('').map(function(v) {return v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase();}).join('');
}