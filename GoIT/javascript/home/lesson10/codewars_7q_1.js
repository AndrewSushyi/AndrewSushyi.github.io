function sum (a,b){
    return isNaN(b) ? function(x){return x+a} : a+b;
}