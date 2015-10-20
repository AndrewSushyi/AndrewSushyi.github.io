/*Удаление css клссов*/

var obj = {
    className: 'open menu'
};

function removeClass(obj, cls){
    var arr =obj.className.split(' ');
    for (var i = 0; i < arr.length; i++){
        if (arr[i]==cls) {
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(' ');
    console.log(obj.className);
}

removeClass(obj, 'open');      // obj.className='menu'
obj = {className: 'open menu'};

removeClass(obj, 'blabla');  // без изменений



/*P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:*/
obj = {
    className: 'my menu menu last'
};

console.log(obj.className);
removeClass(obj, 'menu');
