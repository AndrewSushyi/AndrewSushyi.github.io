/**/
function filterNumbers(a){
    var simbol = "#";
    var gap = " ";
    var chessRow="";
    var i=0, j=0;
    var even;
    var odd=3;
    while(i<a){
        while(j<a){
            even=(j+2)%2;
            if(even) {
                chessRow+=simbol;
            }
            else {chessRow += gap;}
            j++;
        }
        even=null;
        if ((i+2)%2!==0){chessRow=' '+ chessRow;}
        console.log(chessRow);
        j=0;
        i++;
        chessRow="";
    }
}
filterNumbers(8);