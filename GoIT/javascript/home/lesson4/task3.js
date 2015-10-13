/*Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов. Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'*/

function ControlStringLength(str){
    var i=0;
    var temp='';
    var maxLength=20;
    if (str.length>maxLength) {
        while(i<maxLength){
            temp+=str[i];
            i++;
        }
        temp+="...";
        str=temp;
        return str;
    }
    else return str;
}
console.log(ControlStringLength("aaaaabbbbbcccccddddd"));
console.log(ControlStringLength("aaaaabbbbbcccccdddddeeeee"));