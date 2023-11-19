import mysql2 from 'mysql2/promise';

const con = mysql2.createConnection({

host: process.env.HOST ,
database: process.env.MYSQL_DATABASE,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_PASSWORD
})

export {con};