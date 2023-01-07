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

let nString = prompt ("Введите длину массива");
let mString = prompt ("Введите высоту массива");

let n =parseInt(nString);
let m = parseInt(mString);

let filler = 0;
let result = [];

for(let mShagi = 0 ; mShagi <m; mShagi++){
    let row="";// просто строка текущая в массиве в котором буду собирать все элементы
    for(let nShagi = 0; nShagi < n; nShagi++){ //цикл колонок -сколько элементов в каждой строке
    row =row +" "+ filler +1;
if (filler == 10){
    filler=0;
}
}
result.push(row);
}

console.log("---------------------");

