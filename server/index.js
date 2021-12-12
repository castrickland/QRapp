const { application } = require('express')
const express = require('express')
const App = express()
const mysql = require("mysql")
 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'seatingplan'

}); 

application.post('')

App.listen(3001, ()=>{
    console.log("Server Running on port 3001")
})

