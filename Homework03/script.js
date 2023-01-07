
var nameString = prompt("Введите имя");
var indexString = prompt("Введите число");

var Index = parseInt(indexString);
var IndexForNormalPeople = Index - 1;
var Bukva = nameString[IndexForNormalPeople];

alert(" Ваше имя" + nameString + " и число которое вы ввели " + Index + "Ваша буква = " + Bukva);
