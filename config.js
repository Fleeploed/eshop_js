const mysql = require('mysql');

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: 'alisher2013',
    database: 'eshop',
})

module.exports = connectionPool;