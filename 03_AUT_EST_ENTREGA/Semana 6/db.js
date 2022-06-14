const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const bodyParser = require('body-parser');
const app = express();

const database = new sqlite3.Database('./dbcurriculo.db') //nova instância para pegar o banco de dados

const urlencodedParser = bodyParser.urlencoded({ extended: true });
const port = 3000;
const hostname = '127.0.0.1';
const DBPATH = 'dbcurriculo.db';
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("front/"));
app.use(express.json())

app.get('/eu', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Importante para evitar o erro de CORS
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM infos ORDER BY nome COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});
app.listen(port, hostname, () => {
    console.log(`BD server running at http://${hostname}:${port}/`);
  });








