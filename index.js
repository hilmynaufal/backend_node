// import mysql from 'mysql'
const mysql = require('mysql')
const express = require('express')
const { env } = require('process')
const bodyParser = require('body-parser')
const app = express()


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "products",
    port: "3306"
})

const port = 3000

app.use(bodyParser.json())

app.get('/handphone', (req, res) => {
    const q = "SELECT * FROM handphone"
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err)
        }
        return res.json({data: data})
    })
    // res.send('Hello World')
})

app.post('/handphone', (req, res) => {
    console.log(req.body)
    const q = "INSERT INTO handphone (`name`, `brand`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.brand
    ]

    db.query(q, [values], (e, data) => {
        if (e) return res.json(e)
        return res.json("ok")
    })
    // res.status(200).send("ok")
})


app.post('/login', (req, res) => {
    console.log(req.body)
    res.send("login berhasil")
})

app.listen(port, () => {
    console.log(`tai on port = ${port}`);
})

module.exports = app