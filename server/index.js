const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require ("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "bditens",
});

// READ
app.get("/itens", (req, res) =>{
    
    let SQL = "SELECT * from listaitens";

    db.query(SQL,(err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
});

// CREATE
app.post("/item", (req, res) => {
    const { item } = req.body;
    let SQL = "INSERT INTO listaitens ( itens ) VALUES (?)";
    db.query(SQL, item, (err, result) => {
        console.log(err);
    })
});

// DELETE
app.delete("/item/:id", (req, res) =>{

    const { id } = req.params;
    console.log("Informação: ", id)

    let SQL = "DELETE FROM listaitens WHERE (`id` = ?)";

    db.query(SQL, id, (err, result) => {
        console.log(err);
    })
});

app.listen(3001, () => {
    console.log("rodando servidor");
});