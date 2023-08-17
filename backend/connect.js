import mysql from "mysql"

export const db = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6637195",
  database:'sql6637195',
  password: "EZUmHNNy3R",
  timezone: "TZ"
})