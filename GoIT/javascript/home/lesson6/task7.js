/*Анаграммы*/
function anClean(arr) {
    var obj = {};
    var key=0;
    for (key in arr){
        var word = arr[key].toLowerCase().split('').sort().join('');
        //console.log(word);
        obj[word] = arr[key];
        //console.log(word);
    }
    var arrClean = [];
    for (key in obj){
        arrClean.push(obj[key]);
    }
    //console.log(arrClean);
    return arrClean;
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log(anClean(arr));
