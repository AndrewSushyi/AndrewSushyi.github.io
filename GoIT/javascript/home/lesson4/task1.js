/*Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.*/
function fib(a){
    var x=0;
    var y=1;
    var i=2;
    var sumFibonachi=null;
    if(a===0) {sumFibonachi=0;}
    if(a===1) {sumFibonachi=1;}


    if(a>y){
        while(i<=a){
            sumFibonachi=x+y;
            i++;
            x=y;
            y=sumFibonachi;
        }
    }
    console.log("number Fibonachi = "+sumFibonachi);
}
fib(3);
fib(7);
fib(77);