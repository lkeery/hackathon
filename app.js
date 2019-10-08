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
  sql.getConnection((err, connection) => {
    // Error handling
    if (err) {
      return console.log(err.message);
    }

    // If successful
    const hero = `SELECT * FROM tbl_hero`;
    //const features = `SELECT * FROM tbl_features`;
  

    sql.query(hero, (err, rows) => {
      // Release connection
      connection.release();

      if (err) {
        return console.log(err.message);
      }

      console.log(rows);

      const heading = rows[0].heading;
      const tagline = rows[0].tagline;

      res.render('index', {
        title: 'HOUSECOM | THERMOSECURITY SYSTEM',
        heading,
        tagline
        });
      
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