import mysql from "mysql"

export const db = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12643980",
  database:'sql12643980',
  password: "hlbMxF3J5t",
  timezone: "TZ"
})