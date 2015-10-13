/*Задание 2 (Вывести простые числа)*/

function simplNumber(a, b){
    var i=a, j=null;
    var bool=true;

    if(a>1&&b>2&&a<b){

        while(i<=b){
            for(j=i-1; j>1; j--){
                if(i%j===0) {bool=false;}
            }
            if(i%1===0&&i%i===0&&bool!==false)   console.log(i);
            bool=true;
            i++;
        }
    }
}

simplNumber(2, 12);