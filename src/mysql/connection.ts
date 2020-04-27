//import mysql from 'mysql'
import mysql2 from 'mysql2'

const config:any = {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DB || 'dwa'
}
const connection = mysql2.createPool(config).promise()

export {connection}