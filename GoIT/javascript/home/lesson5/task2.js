/*Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает объект в котором все числовые значения у свойств умножены на 2.*/

// Before
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj){
    for(var prop in obj) {
        if (!isNaN(obj[prop])) obj[prop]*=2;
    }
    return obj;
}
console.log(multiplyNumeric(image));

/*
// after
image = {
    width: 200,
    height: 800,
    title: 'Cool image'
};*/
