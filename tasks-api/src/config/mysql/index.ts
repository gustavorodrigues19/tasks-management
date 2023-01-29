/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
import mysql from 'mysql2'

const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export const connection = pool.promise()
