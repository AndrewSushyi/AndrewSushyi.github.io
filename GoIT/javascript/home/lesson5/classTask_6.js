/*Создайте фунцию filterRange(arr, a, b), которая принимает
 массив чисел arr и возвращает новый массив, который
 содержит только числа из arr из диапазона от a до b.
 То есть, проверка имеет вид a ≤ arr[i] ≤ b.
 Функция не должна менять arr.*/

function filterRange(arr, a, b ){
    var result = [];
    var i = 0;
    arr.forEach(function(item) {
        if (item>=a&&item<=b) {
            result[i] = item;
            i++
        }
    });
    console.log(arr);
    console.log(result);
}
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
var arrNumber = [];
for (var i=0; i<10; i++){
    arrNumber[i]=randomInteger(1, 100);
}
filterRange(arrNumber,1, 50);



