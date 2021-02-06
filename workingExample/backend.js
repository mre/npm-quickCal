
class quickCalBackEnd  {
      
    //do this globally inside route  
    config = (configHits, configTimer, configDatabase) => { 
           this.max = configHits;
           this.cooler = configTimer;
           this.db = configDatabase;
    }
    
    reads = () => {
          this.readAmount = 0;
    }
     

    checkReads = () => {

        if(req.session.errStatus === true) {
            return false
        }

        if(this.readAmount > this.max) { 
            req.session.errStatus = true;
            return false;
        }

        return true;

    }
     
    resetHits = () => { 
        req.session.errorStatus = false;
        this.readAmount = 0;
    }

    //return a string for the database
    databaseString(string, type) {


        if(string === "mySql") {

            if(type === "insertInto") {
                return 'INSERT INTO appointments ("day", "dayName", "monthName", "monthIndex", "year", "email", "time", "password", "message") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
            } else if(type === "select") {
                return 'SELECT * FROM appointments WHERE "monthIndex" = $1 AND "year" = $2';
            } else if(type === "displayAppointment") {
                return 'SELECT "email", "time", "day", "dayName", "year", "monthName", "monthIndex" FROM appointments WHERE "password" = $1 AND "email" = $2';
            }
        
        } else if(string === "postgres") {

            if(type === "insertInto") {
                return 'INSERT INTO appointments ("day", "dayName", "monthName", "monthIndex", "year", "email", "time", "password", "message") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
            } else if(type === "select") {
                return 'SELECT * FROM appointments WHERE "monthIndex" = $1 AND "year" = $2';
            } else if(type === "displayAppointment") {
                return 'SELECT "email", "time", "day", "dayName", "year", "monthName", "monthIndex" FROM appointments WHERE "password" = $1 AND "email" = $2';
            }

        } else if(string === "x") {

            if(type === "insertInto") {
                return 'INSERT INTO appointments ("day", "dayName", "monthName", "monthIndex", "year", "email", "time", "password", "message") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
            } else if(type === "select") {
                return 'SELECT * FROM appointments WHERE "monthIndex" = $1 AND "year" = $2';
            } else if(type === "displayAppointment") {
                return 'SELECT "email", "time", "day", "dayName", "year", "monthName", "monthIndex" FROM appointments WHERE "password" = $1 AND "email" = $2';
            }

        }

    }

    
    //insert into database iif time not in timelist return.
    insertInto = (day, dayName, monthName, monthIndex, year, email, time, password, message) => {
        const text = this.databaseString(this.configDatabase, "InsertInto");
        const values = [day, dayName, monthName, monthIndex, year, email, time, password, message];
        conn.query(text, values, (err, response) => {
            if (err) {
                console.log(err.stack)
            } else {
                return response.rows[0];
            }
        });
    }


    //grab booked appointments -- select where month and year -- 
    getBooked = (globalMonthIndex, globalYear) => {

        if(!this.checkReads()) {  
            return "Please give 'timer(seconds)' before making any more requests to the server. Thanks";
        };

        const text = this.databaseString(this.configDatabase, "select");
        const values = [globalMonthIndex, globalYear];
        conn.query(text, values, (err, response) => {
            if (err) {
                console.log(err.stack);
            } else {
                this.readAmount += response.rows.length; //checking reads
                return response.rows;
            }
        });
    }


    //search the appointments set
    displayAppointment = (password, email) => {
        const text = this.databaseString(this.configDatabase, "displayAppointment");
        const values = [password, email];
        conn.query(text, values, (err, response) => {
            if (err) {
                console.log(err.stack);
            } else {
                return response;
            }
        });
    }


    decision = (decision, body, db) => {

        let mainResponse;
          
        switch(decision) {
            case "insertIntoAppointment":
            mainResponse = this.insertInto(
                db,
                body.day,
                body.dayName,
                body.monthName,
                body.monthIndex,
                body.year,
                body.email,
                body.time,
                body.password,
                body.message);
            break;
            case "getBooked":
            mainResponse = this.getBooked(
                db,
                body.globalMonthIndex, 
                body.globalYear);
            break;
            case "displayAppointmentInformation":
            mainResponse = this.displayAppointment(
                db,
                body.password,
                body.email);
            break;
            default: console.log("different file");

            return mainResponse;

        }

    }


    stripeKey() {

    }


    stripeCharge() {

    }


    endConn = () => {
        conn.end();
    }

    
}


module.exports = quickCalBackEnd;
