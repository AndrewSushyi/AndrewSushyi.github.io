/*Сортировка массива строк*/
var arr = ['HTML', 'JavaScript', 'CSS'];
var arrSort = arr.slice();
arrSort.sort();

console.log( arrSort ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)