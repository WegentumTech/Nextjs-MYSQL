import mysql from "mysql2"

export default function handler(req, res) {

    if (req.method == "GET") {
        getValue(req, res)
    }


    if (req.method == "POST") {
        createUser(req, res)
    }



    if (req.method == "DELETE") {
        deleteUser(req, res)
    }






}


const getValue = (req, res) => {


    const dbConnection = mysql.createConnection({
        host: 'sql484.main-hosting.eu',
        user: 'u734134334_nexttesh',
        database: 'u734134334_nexttesh',
        password: 'Nexttesh1'
    });



    dbConnection.query(
        "SELECT * FROM User",
        function(err, results, fields) {
            console.log(results);


            res.status(200).json(results)
            console.log(err)

        }
    );


}


const createUser = (req, res) => {


    const { Name, Age, Wallete } = req.body;
    console.log(Name, Age, Wallete)


    const dbConnection = mysql.createConnection({
        host: 'sql484.main-hosting.eu',
        user: 'u734134334_nexttesh',
        database: 'u734134334_nexttesh',
        password: 'Nexttesh1'
    });




    dbConnection.query(
        `INSERT INTO User (Name, Age, Wallete) VALUES ('${Name}', '${Age}', '${Wallete}');`,
        function(err, results, fields) {
            console.log(results);
            res.status(200).json(results)
            console.log(err)

        }
    );


















}


const deleteUser = (req, res) => {




}