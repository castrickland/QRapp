
const { Axios } = require('axios');
//const { response } = require('express');
const bp = require('body-parser')
const express = require('express');
const app = express();
const mysql = require("mysql");

//app.use(express.json());

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'seatingplan'

}); 
// app.get('/deskUsernameCheck' , (req, res) => {
//     const usernameToUse = req.body.usernameToUse;
//     console.log(usernameToUse + "<--- back end")
//     db.query("SELECT * FROM desks WHERE username = ?", [usernameToUse], (err, result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             //console.log(result)
//             res.send(result)
//         }
//     })
// })

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
    const username = req.body.username;
    const desk_occupied = req.body.desk_occupied;
    db.query("UPDATE desks SET desk_occupied = ?, username = ? WHERE desk_name = ?", [desk_occupied, username, desk_name], (err, result) => {
        if (err) {
            
            console.log(err)
        } else {
            console.log(result + "<--update 1")
            res.send(result)
        }
    });
});
app.put('/deskUpdate2' , (req, res) =>{
    
    const username = req.body.username;
    const desk_occupied = req.body.desk_occupied;
    db.query("UPDATE desks SET desk_occupied = ? WHERE username = ?", [desk_occupied, username], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result + "<--update 2")
            res.send(result)
        }
    });
});

app.listen(3001, ()=>{
    console.log("Server Running on port 3001")
})

