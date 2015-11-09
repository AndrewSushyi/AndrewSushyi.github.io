function descendingOrder(n){
    return +String(n).split('').sort(function( a, b){ return b - a;}).join('');
}