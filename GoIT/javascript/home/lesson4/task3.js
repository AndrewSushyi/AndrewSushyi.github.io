/*�������� �������, ������� ��������� �� ���� ������ � ���������� �� ���������� ���� �� ����� �� ��������� 20 ��������. ���� ������ ������ 20, �� �������� ������ � ��������� � ����� ������ '...'*/

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