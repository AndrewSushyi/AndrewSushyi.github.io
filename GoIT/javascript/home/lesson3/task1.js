/**
 ������� 1 (��������� ����, ���� ���� �������)
 */
function enterNumber(){
    var number;
    do{
        number = prompt ("������� �����");
        if (number>100) console.log("���������! ���� ����� ������ 100 � =" + number);
        if (number<=100) console.log("������� ����� ������ 100!");
    }while (number<=100);
}
enterNumber();
