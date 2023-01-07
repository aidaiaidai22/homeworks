//ЗАдача 05;
//Дано 3 целых числа. Вывести их в порядке возрастания.


/*
prompt() - для получения данных от пользователя
parseInt() - переводит строковые данные в числовые
if - условие
else if -  условик
alert() - чтобы вывести результат

Как ьулем решать задачу:
Получим первое число
Получим второе число
Получим третье число

maxNumber = x

если maxNumber < y тогда maxNumber = y
если maxNumber < z тогда maxNumber = z


x y z
5 6 2
5 6
5 2
6 2
*/

var firstNumberString = prompt("Введите первое число");
var secondNumberString = prompt("Введите второе число");
var thirdNumberString = prompt("Введите третье число");

var firstNumber = parseInt(firstNumberString);
var secondNumber = parseInt(secondNumberString);
var thirdNumber = parseInt(thirdNumberString);

var maxNumber = firstNumber;

//если maxNumber < y тогда maxNumber = y
// если maxNumber < z тогда maxNumber = z

if(maxNumber < secondNumber){
    maxNumber = secondNumberString;
}
if(maxNumber < thirdNumber){
    maxNumber = thirdNumber;
}
alert("Максимальное число = " + maxNumber); 