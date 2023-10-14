import mysql from "mysql"

export const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12652969",
  database:'sql12652969',
  password: "AGuqxBadAH",
  timezone: "TZ"
})