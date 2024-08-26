import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "carapp"
})

con.connect(function(err) {
    if(err) {
        console.log("Erro conexão")
    } else {
        console.log("Conectado")
    }
})

export default con;