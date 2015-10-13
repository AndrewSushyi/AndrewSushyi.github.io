/*Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.*/
function checkSpam (str) {
    var taboo_1_1="spam", taboo_1_2="SPAM";
    var taboo_2_1="sex ", taboo_2_2="Sex ";
    var check="";
    var result=false;

    var i=0;
    if(str==taboo_1_1||str==taboo_1_2||str==taboo_2_1||str==taboo_2_2) console.log("true");

    else while(i<str.length){

        if (str.length-i>=4){
            for(var j=0; j<4; j++) {
                check+=str[i+j];
                if(check==taboo_2_1||check==taboo_2_2||check==taboo_1_1||check==taboo_1_2)  {
                    result=true;
                    break;
                }
            }
        }
        check="";
        i++;
    }
    console.log(result);
}
checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false