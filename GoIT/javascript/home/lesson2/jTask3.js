/**
 * Created by А on 04.10.2015.
 */
var login, pasword;
login=prompt('Введите логин');
if (login=='admin'){
    password=prompt('Введите пароль');
    if(password===null){alert('Canceled');}
    if(password=='passw0rd'){alert('Welcome home!');}
    if(password!='passw0rd'&&password!=null){alert('Wrong password');}
}
if(login==null){alert('Canceled');}
if(login!='admin'&&login!=null){alert('Access denied');}
