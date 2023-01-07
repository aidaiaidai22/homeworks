//Задача №7
//Дано целое положительное число N. Найти сумму квадратов всех натуральных чисел от 0 до N

//prompt() - для получения данных от пользователя
//parseInt() - переводит строковые данные в числовые
//** - возведение в степень
/* умножение
alert() - чтобы вывести результат
*/
//count = count +1count ++
//var и let - объявление переменной 


var NumberString = prompt ("Введите первое число");
var N = parseInt (NumberString);

var squareSumm = 0;

for (var count = 0; count <= N; count++){
    if (count > 0){
        var square = count * count;
        squareSumm = squareSumm + square;
    }
}
    
    alert ("Сумма квадратов до N=" + N + "равна = " + squareSumm)