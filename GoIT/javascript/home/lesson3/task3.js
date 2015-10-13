/*Ќапишите программу, котора€ выводит через console.log все числа от 1 до 100, с двум€ исключени€ми. ƒл€ чисел, нацело дел€щихс€ на 3, она должна выводить СFizzТ, а дл€ чисел, дел€щихс€ на 5 (но не на 3) Ц СBuzzТ.*/
function filterNumbers(){
    var i=1;
    while (i<=100){
        if(i%3===0) {console.log(i+ " - Fizz");  i++; continue;}
        if(i%5===0&&i%3!==0) {console.log(i + " - Buzz"); i++;  continue;}
        console.log(i);
        i++;
    }
}
filterNumbers();