/*написать Калькулятор...*/
function culk(){
    var arr = [];
    var number;
    var i=0;
    var sum=null;
    number = prompt("enter value");

    while(number!=""&&!isNaN(number)&&number!=null){
        arr[i]=+number;
        sum+=arr[i];
        i++;
        number = prompt("enter next value");
    }
    console.log("сумма всех значение равна "+sum);
}
culk();



