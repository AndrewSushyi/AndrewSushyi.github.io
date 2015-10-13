/**
 * Created by А on 09.10.2015.
 */
/*Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.* */
function min(a,b) {
    if(a<b) return a;
    return b;
}
console.log(min(2, 5)); //2
console.log(min(3, -1)); //-1