const express = require('express');
const path = require('path');
const hbs = require('hbs');

const sql = require('./utils/sql');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  //res.render('index', {title: "HouseCom | ThermoSecurity System"});
  sql.getConnection((err, connection) => {
    // Error handling
    if (err) {
      return console.log(err.message);
    }

    // If successful
    let hero = `SELECT * FROM tbl_hero`;
    let features = `SELECT * FROM tbl_features`;
  

    sql.query(hero, (err, rows) => {
      // Release connection
      connection.release();

      if (err) {
        return console.log(err.message);
      }

      res.render('index', rows[0]);
    });

    connection.query(features, (err, rows) => {
      const title = rows[0].title;
    });

  })
})

// app.get('/users', (req, res) => {
//   sql.getConnection((err, connection) => {
//     // Error handling
//     if (err) {
//       return console.log(err.message);
//     }

//     // If successful
//     let query = `SELECT * FROM tbl_card`;

//     sql.query(query, (err, rows) => {
//       // Release connection
//       connection.release();

//       if (err) {
//         return console.log(err.message);
//       }
      
//       res.render('user', rows[0]);
//     });
//   })
// })

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});