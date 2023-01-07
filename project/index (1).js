let express = require("express"); // подключила библиотеку
let path = require("path");
let sql = require("mssql");
let mysql = require("mysql");
const  {config, engine}= require("express-edge");
let dbconfig = import("./dbcongigs");
let myApp = new express(); // создала экземпляр класса 

let config = {
  server: "localhost",
  user: "sa",
  password: "12qw!@QW",
  database: "NeobisCourses",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

let configForMySQL = {
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
}


myApp.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, "pages/index.html"));
});


myApp.get('/about', 
    (request, response) => {
        response.sendFile(path.resolve(__dirname, "pages/about.html"));

});

myApp.get('/calc', (request, response) => {
    let myGeneratedValue = 45 + 6;
    response.sendFile(path.resolve(__dirname, "pages/calculated.html"));

});

myApp.get('/otherpage', (request, response) => {
    response.sendFile(path.resolve(__dirname, "pages/normalpage.html"));
});

myApp.get('/datafromdb', (request, response) => {
    let result;
    sql.connect(config, function (err) {
        if (err) {console.log(err);}

        let request = new sql.Request();
        
        result = request.query('select coursename from Courses', function (err, recordset) {
            if (err) { console.log(err) }
            console.log(recordset);
            return recordset;
        });
        
    });
    response.send(result);
})

myApp.get("/mysql", (request, response) => {
    let result = "";
    var connection = mysql.createConnection(configForMySQL);
    
    connection.connect();
    
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) {
        throw error;
    }
    console.log('The solution is: ', results[0].solution);
    result = results;
    });
    
    connection.end();
    response.send(result);

})

myApp.listen(7000, () => {
    console.log("Here on 7000");
})
