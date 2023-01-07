let exp = require ("express"); // подключила библиотек

let myApp= new express(); // создала экземляр класса

myApp.listen(7000, ()=> {
    console.log ("Here on 7000");
})