import mysql from "mysql"

export const db = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6640429",
  database:'sql6640429',
  password: "pYW1en94yq",
  timezone: "TZ"
})