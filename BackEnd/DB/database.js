const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'leduytan.mysql.database.azure.com',
    user:'leduytan2304',
    password:'Thuongmaidientu#',
    database:'clothingstore'
})

// const result =  pool.query("SELECT * FROM clothingstore.color")
// console.log(result);

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });


connection.query('SELECT * FROM clothingstore.color',(error,results, fields)=>{
    if(error)
        throw error;
    else

        results.forEach( result => {
            console.log(result);
        })
        connection.end();
})