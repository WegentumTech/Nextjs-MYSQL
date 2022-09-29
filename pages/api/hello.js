import mysql from "mysql2"

export default function handler(req, res) {


    // Server: sql6.freemysqlhosting.net
    // Name: sql6522284
    // Username: sql6522284
    // Password: WKfhZYZxRc
    // Port number: 3306
    const dbConnection = mysql.createConnection({
        host: 'sql6.freemysqlhosting.net',
        user: 'sql6522284',
        database: 'sql6522284',
        password: 'WKfhZYZxRc',
        port: '3306'
    });


    dbConnection.query(
        "INSERT INTO NahiBatayenge (id, Name, Address, Pata, Naya) VALUES ('1', 'Nitesh',' Mobile', 'Computer',' Hat')",
        function(err, results, fields) {
            console.log(results);


            res.status(200).json(results)
            console.log(err)

        }
    );















}