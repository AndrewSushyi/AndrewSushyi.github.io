/*�������� ���������, ������� ������� ����� console.log ��� ����� �� 1 �� 100, � ����� ������������. ��� �����, ������ ��������� �� 3, ��� ������ �������� �Fizz�, � ��� �����, ��������� �� 5 (�� �� �� 3) � �Buzz�.*/
function filterNumbers(){
    var i=1;
    while (i<=100){
        if(i%3===0) {console.log(i+ " - Fizz");  i++; continue;}
        if(i%5===0&&i%3!==0) {console.log(i + " - Buzz"); i++;  continue;}
        console.log(i);
        i++;
    }
}
filterNumbers();