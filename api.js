const express = require('express');
const app = express();

//variables to execute the connection with the mysql database
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'abcd',
  database: 'google_replica',
});

//CORS allowing
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,DELETE,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
    });

//check if the user exists
app.get("/login_username", (req, res) => {
    const inserted_user = req.query.inserted_user
    const sql_command = "SELECT email FROM users WHERE email = \"" + inserted_user + "\";"
    connection.query(sql_command, (err,results)=>{
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
      } else {
          //false/undefined = user doesn't exist, true = user found
          if(results[0] === null || results[0] === undefined){res.send(false)}
          else{res.send(true);}
      }
    })
});
//check if the user exists
app.get("/login_password", (req, res) => {
  const inserted_user = req.query.inserted_user
  const inserted_password = req.query.inserted_password
  const sql_command = "SELECT email FROM users WHERE email = \"" + inserted_user + "\" AND password = \"" + inserted_password + "\";"
  connection.query(sql_command, (err,results)=>{
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
        //false = user doesn't exist, true = user found
        if(results[0] === null || results[0] === undefined){res.send(false)}
        else{res.send(true);}
    }
  })
});

//get links through a inserted keyword
app.get("/keyword_search", (req, res) => {
  const inserted_keyword = req.query.inserted_keyword
  const sql_command = "SELECT * FROM pages WHERE keyword = " + inserted_keyword + ";";
  connection.query(sql_command, (err,results)=>{
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
        if(results[0] === null || results[0] === undefined){res.send(false)}
        else{res.send(results);}
    }
  })
})


app.listen(9000, () => {
  console.log('Servidor rodando na porta 9000');
});
