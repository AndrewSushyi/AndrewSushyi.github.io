/*�������� ������� pow(x,n), ������� ���������� x � ������� n. ����� ������, �������� x �� ���� n ��� � ���������� ���������.*/
function pow(x, n) {
    if (n != 1) {return x * pow(x, n - 1);
    } else {
        return x;
    }
}

console.log( pow(2, 3) );