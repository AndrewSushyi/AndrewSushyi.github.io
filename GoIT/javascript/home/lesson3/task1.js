/**
 Задание 1 (Повторять цикл, пока ввод неверен)
 */
function enterNumber(){
    var number;
    do{
        number = prompt ("введите число");
        if (number>100) console.log("правильно! ваше число больше 100 и =" + number);
        if (number<=100) console.log("введите число больше 100!");
    }while (number<=100);
}
enterNumber();
