/*Создайте функцию find(arr, value), которая ищет в массиве
 arr значение value и возвращает его позицию, если найдено,
 или -1, если не найдено.*/
function find(arr, value){
    var result;
    arr.forEach(function(item, i) {
        if (item===value) {
            result = "значение найдено, его позиция = " + i;
        }
        else result=-1;
    });
    return result;
}
var a = ["a", "b", "c"];
var result;
console.log (find(a, 'b'));
