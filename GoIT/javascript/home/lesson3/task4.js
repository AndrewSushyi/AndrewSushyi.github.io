/*��������� 1� ������ ���, ����� ��� �������� �FizzBuzz� ��� ���� �����, ������� ������� � �� 3, � �� 5.*/
function filterNumbers(){
    var i=1;
    while (i<=100){
        if(i%5===0&&i%3===0) {console.log(i + " - FizzBuzz");  i++; continue;}
        if(i%3===0) {console.log(i+ " - Fizz");  i++; continue;}
        if(i%5===0&&i%3!==0) {console.log(i + " - Buzz"); i++;  continue;}
        console.log(i);
        i++;
    }
}
filterNumbers();