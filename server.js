var express = require('express');
var router = express.Router();
var conn = require("../db/conn");


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', {
        title: 'Express'
    });

});


//post method node js -- postgres database
router.post("/", function(req, res, next) {


    //insert into -- do insert ignore postgres -- or just select first to avoid multiple appointments -- leave phone number to call
    if (req.body.insertIntoAppointment === "true") {

        //var timelist = []...if !includes time get the fuck out

        const text = 'INSERT INTO appointments ("day", "dayName", "monthName", "monthIndex", "year", "email", "time", "password", "message") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
        const values = [req.body.day, req.body.dayName, req.body.monthName, req.body.monthIndex, req.body.year, req.body.email, req.body.time, req.body.password, req.body.message];
        conn.query(text, values, (err, response) => {
            if (err) {
                console.log(err.stack)
            } else {
                res.json({
                    result: response.rows[0]
                });
            }
            conn.end();
        })

    }

    //grab booked appointments -- select where month and year -- 
    if (req.body.getBooked === "true") {

        const query = {
            text: 'SELECT * FROM appointments',
            rowMode: 'array',
        }

        conn.query(query, (err, response) => {
            if (err) {
                console.log(err.stack);
            } else {
                return res.json({
                    rows: response.rows
                });
            }
            conn.end()
        });

    }

    //search the appointments set
    if (req.body.displayAppointmentInformation === "true") {

        const text = 'SELECT "email", "time", "day", "dayName", "year", "monthName", "monthIndex" FROM appointments WHERE password = $1 AND email = $2';
        const values = [req.body.password, req.body.email];

        conn.query(text, values, (err, response) => {
            if (err) {
                console.log(err.stack);
            } else {
                return res.json({ valid: response });
            }
            conn.end()
        });

    }


});



//do some shit with sockets


module.exports = router;
