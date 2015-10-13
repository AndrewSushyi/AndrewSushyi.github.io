/*Исправьте 1ю задачу так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.*/
function filterNumbers(){
    var i=1;
    while (i<=100){
        if(i%5===0&&i%3===0) {console.log(i + " - FizzBuzz");  i++; continue;}
        if(i%3===0) {console.log(i+ " - Fizz");  i++; continue;}
        if(i%5===0&&i%3!==0) {console.log(i + " - Buzz"); i++;  continue;}
        console.log(i);
        i++;
    }
}
filterNumbers();