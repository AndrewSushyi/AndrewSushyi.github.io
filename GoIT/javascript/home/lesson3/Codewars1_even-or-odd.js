/**
 Create a function that takes an integer as an argument and returns "Even" or "Odd".
 */
function  even_or_odd(number) {
    return   number%2?'odd':'even';
}

console.log(even_or_odd(3));
console.log(even_or_odd(6));