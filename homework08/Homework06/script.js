// a = firstNumber
// b = secondNumber
// c = thirdNumber
// a + b > c
// a + c > b
// b + c > a

// firstNumber + secondNumber > thirdNumber
// firstNuber + thirdNumber > secondNumber 
// secondNumber + thirdNumber > firstNumber 

var firstNumberString = prompt ("Введите первое число")
var secondNumberString = prompt ("Введите второе число")
var thirdNumberString = prompt ("Введите третье число")

var firstNumber = parseInt (firstNumberString)
var secondNumber = parseInt (secondNumberString)
var thirdNumber = parseInt (thirdNumberString)

var triangleExist = false;

if(firstNumber > 0 && secondNumber > 0 && thirdNumber > 0 ){
    if (firstNumber + secondNumber> thirdNumber
        && firstNumber + thirdNumber > secondNumber
        && secondNumber + thirdNumber > firstNumber)
        {
            triangleExist = true;
        }
} else { 
    alert ("Треугольник не может существовать когда одна из их сторон меньше или равно")
}



if (triangleExist) {
    alert ("Треугольник существует");
} else {
    alert ("Треугольник Не существует");
}