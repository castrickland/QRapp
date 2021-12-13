
const { Axios } = require('axios');
const { response } = require('express');
const express = require('express')
const app = express()
const mysql = require("mysql")

app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'seatingplan'

}); 

app.get('/deskData' , (req, res) => {
    db.query("SELECT * FROM desks", (err, result) =>{
       if (err) {
           console.log(err)
       } else {
           res.send(result)
       }
    })
})
app.put('/deskUpdate' , (req, res) =>{
    const desk_name = req.body.desk_name;
    const desk_occupied = req.body.desk_occupied;
    db.query("UPDATE desks SET desk_occupied = ? WHERE desk_name = ?", [desk_occupied, desk_name], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
});

app.listen(3001, ()=>{
    console.log("Server Running on port 3001")
})

