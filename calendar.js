    //first construcor will be there own constructor 
    //next constructors will be default ones i create
    //cal is being hit twice. one time for table other for calendar. get rid of the hit for the table header..
    //chexk big o for split operations vs just using object functions for date
    //hit init first then define all buttons and stuff

    class Calendar {

        defaultConfig = (getBookedFile, apptFile, searchEmailFile, redirectUrl, timeList, redirectMessage) => {
            this.fileToGetBooked = false; //getBookedFile
            this.fileToPushAppointment = false; //appt file
            this.searchEmailFilePath = false,  //search email file
            this.hideBackButton = true; //hideBackButton -- boolean
            this.hidePastDays = true; //hidePassedDays -- boolean
            this.redirectUrl = null; //url to go to
            this.dontshowForm = true; //if you should show form
            this.timeList = []; //final
            this.redirectMessage = "";
            this.triggerStart();
        }

        //configure the calendar -- path: string, path: string, path: string, ui: boolean, ui: boolean, url: string message: string, dontshowForm: boolean -- leave regule to just show calendar
        config = (getBookedFile, apptFile, searchEmailFile, hidePastDays, hideBackButton, timelist, redirectUrl, redirectMessage, dontshowForm) => {
            this.fileToGetBooked = false; //getBookedFile
            this.fileToPushAppointment = false; //appt file
            this.searchEmailFilePath = false,  //search email file
            this.hideBackButton = false; //hideBackButton -- boolean
            this.hidePastDays = false; //hidePassedDays -- boolean
            this.redirectUrl = null; //url to go to
            this.dontshowForm = true; //if you should show form
            this.timeList = []; //final
            this.redirectMessage = "message you want to show to your user on submission";
            this.triggerStart();
        }
        

        triggerStart = () => {
            this.events(); 
            this.globals();
            this.getCalendar(new Date());
        }

        //onclicks tied to next three functions
        events = () => {
            this.skeleton = document.getElementById("skeleton");
            this.fillSkeleton(); 
            this.cal = document.getElementById("calendar");
            document.getElementById("today").onclick = this.today;
            document.getElementById("next").onclick = this.next;
            document.getElementById("back").onclick = this.back;  
            document.getElementById("searchKeyUp").onkeyup = (e) => { this.searchEmail(e.target.value); }; //loaded on set
        }

        //set the globals
        globals = () => {
            this.currentDate = new Date();
            this.currentDayG = 1;
            this.currentIndexOfMonthG = null; 
            this.currentMonthNameG = null;
            this.currentYearG = null;
            this.alottedSlots = [];
            this.amountOfDays = {
            jan: { month: 31, index: 0 },
            feb: { month: ((this.currentYearG % 4 == 0) && (this.currentYearG % 100 != 0)) || (this.currentYearG % 400 == 0) ? 29 : 28, index: 1 },
            mar: { month: 31, index: 2 },
            apr: { month: 30, index: 3 },
            may: { month: 31, index: 4 },
            jun: { month: 30, index: 5 },
            jul: { month: 31, index: 6 },
            aug: { month: 31, index: 7 },
            sep: { month: 30, index: 8 },
            oct: { month: 31, index: 9 },
            nov: { month: 30, index: 10 },
            dec: { month: 31, index: 11 },
        }
    }

    //define css properties dynamically -- must be after trigger....
    style = (cssNext, cssBack, cssToday) => {
        document.getElementById("nextButton").cssText = `${cssNext}`;
        document.getElementById("backButton").cssText = `${cssBack}`;
        document.getElementById("today").cssText = `${cssToday}`;
    }


    fillSkeleton = () => {
        this.skeleton.style.cssText = `margin: auto; text-align: center`;
        this.skeleton.innerHTML = `
        <div id = "toggleDisplay">
        <table class="table table-dark" style = "margin-right: auto; margin-left: auto; text-align: center; border-spacing: 0px;" id = "errorShake">
        <thead>
          <tr>
            <th scope="col">monday</th>
            <th scope="col">tuesday</th>
            <th scope="col">wednsday</th>
            <th scope="col">thursday</th>
            <th scope="col">friday</th>
            <th scope="col">saturday</th>
            <th scope="col">sunday</th>
          </tr>
          <tr>
          <button id = "next">next</button>
          <button id = "back" style = "margin-left: 5px">back</button>
          <button id = "today" style = "margin-left: 5px">today</button>
          <input type = "text" style = "margin-left: 5px" id = "searchKeyUp"> </input>
          <br>
          <br>
          <small id = "date" style = "margin-left: 5px"> </small>
          </tr>
        </thead>
        <tbody id = "calendar">
        </tbody>
      </table>
      </div>
      <div id = "toggleDisplayB"></div>
      `;
    }


    //display calendar
    getCalendar = (date) => {
    
        
        this.currentMonthNameG = date.toString().split(" ")[1].toLowerCase(); 
        this.currentYearG = parseInt(date.toString().split(" ")[3].toLowerCase());
        this.currentIndexOfMonthG = this.amountOfDays[this.currentMonthNameG].index; 

    
        var startOn = new Date(this.currentYearG, this.currentIndexOfMonthG, 1).toString().split(" ")[0].toLocaleLowerCase(); 
        var arrayOfDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]; 
        startOn = arrayOfDays.indexOf(startOn) + 1;

    
        this.cal.innerHTML = ``;
        var elem = this.cal;
        var thCount = 0;
        var tr = document.createElement("TR");

    
        for(let i = 1; i < startOn; i++) {  

            if(thCount === 7) { 
                elem.append(tr);
                var tr = document.createElement("TR"); 
                thCount = 0;
            };

            var th = document.createElement("TH");
            th.className = "infoBox";
            th.innerText = "x";
            th.style.cssText = `            
            padding: 7px;
            border: 1px solid black;
            width: 10px;
            height: 10px;`;
            tr.append(th); 
            thCount+=1; 

        }
    
        let days = this.amountOfDays[this.currentMonthNameG].month; 
    
        for(let i = 1; i <= days; i++) {

            if(thCount === 7) { 
                elem.append(tr); 
                var tr = document.createElement("TR");
                thCount = 0;
            };

            var th = document.createElement("TH");
            th.className = `infoBox`;
            th.id = `highlight-${i}`;
            th.style.cssText = `            
            padding: 7px;
            border: 1px solid black;
            width: 10px;
            height: 10px;`;
            th.innerText = i;
            th.onclick = () => { this.showForm(i, this.currentYearG, this.currentIndexOfMonthG, this.currentMonthNameG); };
            th.onmouseover = () => { this.addNumber(i); this.eliminateBookedEvents(i, this.currentYearG, this.currentIndexOfMonthG, this.currentMonthNameG);  }
            tr.append(th);
            thCount+=1; 

        }
        
        elem.append(tr)
        document.getElementById("date").innerText = `${this.currentIndexOfMonthG+1}/${this.currentYearG} | ${this.currentMonthNameG.toUpperCase()} ${this.currentDayG} ${this.currentYearG}`;

        this.fileToGetBooked ? this.loadInTakenTimes() : this.showNoLoad("loading data not set.."); //doing this twice
        this.hideBackButton ? this.hideBackButtonNone() : this.showNoLoad("back button showing on same month and year..");
        this.hidePassedDays ? this.hidePassedDaysNone() : this.showNoLoad("passed days not showing on month and year..");

    }

    //show configuration properties not showing
    showNoLoad = (message) => {
        console.log(message);
    }
    
    //go to today
    today = () => {
        var date = new Date();
        var day = date.toString().split(" ")[2];
        this.getCalendar(date);
        var string = "highlight-"+day;
        document.getElementById(string).style.backgroundColor = "lightblue";
    }
    
    
    //move next in calendar
    next = () => {
        this.currentIndexOfMonthG === 11 ? (this.currentYearG += 1, this.currentIndexOfMonthG = 0) : (this.currentIndexOfMonthG += 1);
        this.getCalendar(new Date(this.currentYearG, this.currentIndexOfMonthG, 1));
    }
    
    
    //move back in calendar
    back = () => {
        this.currentIndexOfMonthG === 0 ? (this.currentYearG -= 1, this.currentIndexOfMonthG = 11) : (this.currentIndexOfMonthG -= 1);
        this.getCalendar(new Date(this.currentYearG, this.currentIndexOfMonthG, 1));
    }
    

    //replace number in string on hover
    addNumber = (pushNum) => {
        var dateString = document.getElementById("date");
        var arr = dateString.innerText.split(" ");
        arr[3] = pushNum;
        arr = arr.join(" ");
        document.getElementById("date").innerText = arr;
    }
    
    
    //load in taken times for this month and year
    loadInTakenTimes = () => {

        if(this.fileToGetBooked === false) { return };
        
        $.ajax({
            type: "POST",
            url: this.fileToGetBooked,
            data: {
                getBooked: "true",
                globalYear: this.currentYearG,
                globalMonthIndex: this.currentIndexOfMonthG
            },
            dataType: "json",
            success: function(result, status, xhr) {
                
                this.alottedSlots = [];
    
                for(let i = 0; i < result.length; i++) { 
                    this.alottedSlots.push({ //change to object to reduce lookup -- { {day, time}, {} } -- do a search for these and return a boolean then add to times -- resuces to O(timelist)
                        year: result[i].year, 
                        monthName: result[i].monthName,
                        monthIndex: result[i].monthIndex,
                        day: result[i].day,
                        time: result[i].time
                    });
                    
                }
                
            },
            error: function(xhr, status, error) {
                console.log("no rows"); 
            },
        });
        
    }

    //hide back button
    hideBackButtonNone = () => {}

    //hide passed days
    hidePassedDaysNone = () => {}
    
    //on hover get booked events for each day
    eliminateBookedEvents = (day, year, monthIndex, monthName) => {

        if(this.alottedSlots.length === 0) { return }
        
        var date = new Date();
        var todayYear = parseInt(date.toString().split(" ")[3]);
        var todayMonthIndex = this.amountOfDays[date.toString().split(" ")[1].toLowerCase()].index; 
        var todayDay = parseInt(date.toString().split(" ")[2]);

        
        var b = document.getElementById("errorBooked");
            

        if((monthIndex < todayMonthIndex && year === todayYear) ||
            (year < todayYear) || 
            (monthIndex === todayMonthIndex && year === todayYear && day < todayDay)) {
            b.innerText = "X"; b.style.color = "red";
            return;
        }

        var originalSet = ["6am", "9am", "3pm", "7pm"];  //set this to the time set global
                  
        for(let i = 0; i < this.alottedSlots.length; i++) { //change array to object to reduce from N to O(1)*4 ...change indexOf to push to reduce 'N' to O(1) -- not really n^2 .. just do (day and time lookup for each in original set..if true then splice or push)
            if(this.alottedSlots[i].day === day) { 
                originalSet.splice(originalSet.indexOf(this.alottedSlots[i].time), 1); 
            } 
        };
        
            
        if(originalSet.length === 0) { b.innerText = "Booked"; b.style.color = "red";  } else { b.innerText = "Appointments available"; b.style.color = "green";  }

    }
    
    
    //displayForm when click on cell
    showForm = (day, year, monthIndex, monthName) => {

        if(this.dontshowForm === false) { return; }

        var date = new Date();
        var todayYear = parseInt(date.toString().split(" ")[3]);
        var todayMonthIndex = this.amountOfDays[date.toString().split(" ")[1].toLowerCase()].index; 
        var todayDay = parseInt(date.toString().split(" ")[2]);
            

        if((monthIndex < todayMonthIndex && year === todayYear) ||  (year < todayYear) ||  (monthIndex === todayMonthIndex && year === todayYear && day < todayDay)) {
            var element = document.getElementById("errorShake");
            TweenMax.to(element, 0.1, {x:"+=20", yoyo:true, repeat:5});
            return;
        }

        var getDayName = new Date(year, monthIndex, day).toString().split(" ")[0];

        var temp = ``;

        temp += `
        <div class = "row container" style = "text-align: center">
        <input hidden id = "monthIndexS" value = "${monthIndex}" />
        <input hidden id = "dayS" value = "${day}" />
        <input hidden id = "yearS" value = "${year}" />
        <input hidden id = "monthNameS" value = "${monthName}" />
        <input hidden id = "dayNameS" value = "${getDayName}" />
        <div class = "col-md-12">
        <h1>
        ${getDayName} ${monthName} ${day} ${year}
        </h1>`;

        var originalSet = ["6am", "9am", "3pm", "7pm"]; // set this to the timelist global  

        for(let i = 0; i < this.alottedSlots.length; i++) {  //change array to object to reduce from N to O(1)*4 ...change indexOf to push to reduce 'N' to O(1) -- not really n^2 .. just do (day and time lookup for each in original set..if true then splice or push)	
            if(this.alottedSlots[i].day === day) {  
                originalSet.splice(originalSet.indexOf(this.alottedSlots[i].time), 1); 
            } 
        };
                  
        if(originalSet.length === 0) { back(); return; } 
                  
        for(let i = 0; i < originalSet.length; i++) {
            temp +=`
            <input type="radio" id="${originalSet[i]}" name="timeS" value="${originalSet[i]}" class="form-check-input xx"> 
            <label for="${originalSet[i]}">${originalSet[i]}</label><br>`; 
        };
                  
        temp += 
        `<p></p>
            <p>Lets have some coffee ☕ ...over zoom</p>
            </div>
            <input id = "emailS" class = "form-control" placeholder = "email" style = "width: 40%; height: 40px; margin: auto">
            <p id = "emailError" style = "color: red"> </p>
            <input id = "passwordS" class = "form-control" placeholder = "password" style = "width: 40%; height: 40px; margin: auto">
            <br>
            <small> optional for viewing and canceling appointment </small>
            <p id = "passwordErrorS" style = "color: red"> </p>
            <br>
            <button class = "btn btn-lg" style = "" onclick = "submit()" >Schedule!</button>
            <br>
            <br>
            <small id = "goBackToCalendar" style = "" >calendar</small>
        </div>`;
                   
        //change
        document.getElementById("toggleDisplayB").innerHTML = temp;
        document.getElementById("emailS").focus();
        document.getElementById("emailS").select();

        //show
        document.getElementById("toggleDisplayB").style.display = "block";
        document.getElementById("toggleDisplay").style.display = "none";
        document.getElementById("goBackToCalendar").onclick = this.goBackToCalendar;

    }
    
    
    //go back to the calendar    
    goBackToCalendar = () => {
        document.getElementById("toggleDisplayB").style.display = "none";
        document.getElementById("toggleDisplay").style.display = "block";
    }
    
    
    //check errors and submit form
    submit = () => {

        if(this.fileToPushAppointment === false) { return; }
        
        var day = document.getElementById("dayS");
        var dayName = document.getElementById("dayNameS");
        var monthName = document.getElementById("monthNameS");
        var monthIndex = document.getElementById("monthIndexS");
        var year = document.getElementById("yearS");
        var email = document.getElementById("emailS");
        var time = $('input[name="timeS"]:checked' ).val(); //replace with loop and get checked to avoid loading in jquery -- moves to one dependency -- gsap
        
        var count = 0;

        if(time === undefined) { count++; alert("please select a time") };
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) { count++; document.getElementById("emailError").innerText = "*Please enter a valid email"; };
        
        if(count > 0) { return; }
        
        $.ajax({
            type: "POST",
            url: this.fileToPushAppointment, 
            data: {
                insertIntoAppointment: "true",
                day: parseInt(day.value),
                dayName: dayName.value,
                monthName: monthName.value,
                monthIndex: parseInt(monthIndex.value),
                year: parseInt(year.value),
                email: email.value,
                time: time
            },
            dataType: "json",
            success: function(result, status, xhr) {

                if(result === "This user already exists") { 
                    document.getElementById("emailError").innerText = "*Appointment already in place, please cancel.";
                    return;
                }
                
                location.replace(`${this.redirectUrl}?show='${this.redirectMessage}'`);
                
            },
            error: function(xhr, status, error) {
                console.log(error);
            },
        });
        
    }
    
    
    //search if an email exists and show appointment time and password and cancel button
    searchEmail = (email) => {

        if(this.searchEmailFilePath === false) { return; }
        
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {  
            document.getElementById("removePassword") ? document.getElementById("removePassword").remove() : ""; 
            return;
        };

        $.ajax({
            type: "POST",
            url: this.searchEmailFilePath, 
            data: {
                displayAppointmentTime: "true",
                email: email,
            },
            dataType: "json",
            success: function(result, status, xhr) {
                
                if(result.length > 0) { 
                    showOrHidePasswordAndCancelButton(result);
                } else if(result === 0) {
                    showOrHidePasswordAndCancelButton(0);
                } else {
                    showOrHidePasswordAndCancelButton(0);
                }
                
            },
            error: function(xhr, status, error) {
                alert(error);
            },

        });
        
    }
    
    
    //show or hide button -- 
    showOrHidePasswordAndCancelButton = (showOrHide) => {
        
        if(typeof(showOrHide) === "object") {   

            if(document.getElementsByClassName("checkAddedOnDelay")[0]) { return; } 

            var html = `
                <br>
                <h2>Your appointment is on <b> ${showOrHide[0].dayName} ${showOrHide[0].monthName} ${showOrHide[0].day} ${showOrHide[0].year} </b> at <b> ${showOrHide[0].time} </b> </h2>
                <button class = "btn" style = "background-color: red; border-radius: 0px; color: white; box-shadow: 2px 2px 2px black" id = "remove" onclick = "showPassword()">Remove Appointment</button>
            `;

            var elem = document.createElement("DIV"); //appending to avoid document re rendering
            elem.setAttribute("id", "removePassword");
            elem.classList.add("checkAddedOnDelay");
            elem.innerHTML = html;
            document.getElementById("pushPasswordOption").append(elem);

        } else {
            document.getElementById("removePassword") ? document.getElementById("removePassword").remove() : ""; 
            return;
        }
        
    }
    
    
    showPassword() {}
    
    
    removeAppointment() {}
    
    
    keepSearchTriesOnServerOverLoadRedirect() {}

    }
