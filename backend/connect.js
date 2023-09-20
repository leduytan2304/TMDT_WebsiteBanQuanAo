import mysql from "mysql"

export const db = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12647819",
  database:'sql12647819',
  password: "dKdvrNRJlw",
  timezone: "TZ"
})