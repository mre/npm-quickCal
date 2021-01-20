
//add an extra condition for when they click today .. splice any times past the current

//add a helper function to remove past appointments -- sql

//convert to react

//implement a drag and drop

//maybe load in all events for the year at once... would avoid reading more data... if year change load in...

//increase cell size on onclick...append form... onhover decrease cell size if not reference element... func(focus) { !elem ? decrease }


class quickCalFrontEnd {
      
    
    /*

        configure everthing
        
    */
       

    //default configuration that allows every functionality of calendar -- add place
    defaultConfig = (getBookedFile, apptFile, searchAppointmentFile, redirectUrl, timeList, redirectMessage, greetingMessage) => {
        this.fileToGetBooked = getBookedFile; 
        this.fileToPushAppointment = apptFile; 
        this.searchAppointmentFilePath = searchAppointmentFile, 
        this.hideBackButton = true; 
        this.hidePastDays = true; 
        this.redirectUrl = redirectUrl; 
        this.displayForm = true; //have to set this
        this.timeList = timeList;
        this.redirectMessage = redirectMessage;
        this.greetingMessage = greetingMessage;
        this.triggerStart();
    }

        
    //your pre configured set for calendar
    config = (getBookedFile, apptFile, searchAppointmentFile, hidePastDays, hideBackButton, timeList, redirectUrl, redirectMessage, greetingMessage, dontShowForm) => {
        this.fileToGetBooked = getBookedFile; 
        this.fileToPushAppointment = apptFile; 
        this.searchEmailFilePath = searchAppointmentFile,  
        this.hideBackButton = hideBackButton; 
        this.hidePastDays = hidePastDays; 
        this.redirectUrl = redirectUrl; 
        this.displayForm = dontShowForm; 
        this.timeList = timeList; 
        this.redirectMessage = redirectMessage;
        this.greetingMessage = greetingMessage;
        this.triggerStart();
    }
    

    //your configuration for styling calendar
    configStyle = (
        cssNextButton,
        cssBackButton,
        cssTodayButton, 
        cssSubmitButton, 
        cssSearchEmailInput, 
        cssEmailInput, 
        cssMessageInput, 
        cssPasswordInput, 
        cssCells, 
        cssDateText, 
        cssDayText, 
        cssGreetingMessage) => {
        document.getElementById("nextButton").style.cssText = `${cssNextButton}`;
        document.getElementById("backButton").style.cssText = `${cssBackButton}`;
        document.getElementById("todayButton").style.cssText = `${cssTodayButton}`;
        document.getElementById("submitButton").style.cssText = `${cssSubmitButton}`;
        document.getElementById("submitButton").style.cssText = `${cssSubmitButton}`;
        document.getElementById("searchEmailInput").style.cssText = `${cssSearchEmailInput}`;
        document.getElementById("nextButton").style.cssText = `${cssNextButton}`;
        document.getElementById("backButton").style.cssText = `${cssBackButton}`;
        document.getElementById("today").style.cssText = `${cssTodayButton}`;
        document.getElementById("submitButton").style.cssText = `${cssSubmitButton}`;
        document.getElementById("submitButton").style.cssText = `${cssSubmitButton}`;
        document.getElementById("searchEmailInput").style.cssText = `${cssSearchEmailInput}`;
        document.getElementById("submitButton").style.cssText = `${cssSubmitButton}`;
        document.getElementById("searchEmailInput").style.cssText = `${cssSearchEmailInput}`;
    }


    //your configuration for adding classes -- rid array
    configClasses = (                
        cssNextButtonArr,
        cssBackButtonArr,
        cssTodayButtonArr, 
        cssSubmitButtonArr, 
        cssSearchEmailInputArr, 
        cssEmailInputArr, 
        cssMessageInputArr, 
        cssPasswordInputArr, 
        cssCellsArrArr, 
        cssDateTextArr, 
        cssDayTextArr, 
        cssGreetingMessageArr) => {
        for(let i = 0; i < cssNextButtonArr.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < cssBackButtonArr.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < cssBackButtonArr.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < cssBackButtonArr.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < cssBackButtonArr.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < cssBackButtonArr.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < cssBackButtonArr.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < cssBackButtonArr.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < cssBackButtonArr.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < cssBackButtonArr.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < cssBackButtonArr.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
    }


    //default configuration settings for style
    defaultStyle = (color, font, input) => {
        document.getElementById("nextButton").style.cssText = `${cssNextButton}`;
        document.getElementById("backButton").style.cssText = `${cssBackButton}`;
        document.getElementById("today").style.cssText = `${cssTodayButton}`;
        document.getElementById("submitButton").style.cssText = `${cssSubmitButton}`;
        document.getElementById("submitButton").style.cssText = `${cssSubmitButton}`;
        document.getElementById("searchEmailInput").style.cssText = `${cssSearchEmailInput}`;
        document.getElementById("nextButton").style.cssText = `${cssNextButton}`;
        document.getElementById("backButton").style.cssText = `${cssBackButton}`;
        document.getElementById("today").style.cssText = `${cssTodayButton}`;
        document.getElementById("submitButton").style.cssText = `${cssSubmitButton}`;
        document.getElementById("submitButton").style.cssText = `${cssSubmitButton}`;
        document.getElementById("searchEmailInput").style.cssText = `${cssSearchEmailInput}`;
        document.getElementById("submitButton").style.cssText = `${cssSubmitButton}`;
        document.getElementById("searchEmailInput").style.cssText = `${cssSearchEmailInput}`;
        //info box = th.style.cssText = ` padding: 7px border: 1px solid black; width: 10px; height: 10px;`;
    }


    //default configuration for classes -- rid array
    defaultClasses = () => {
        var nextButton = ["btn", "btn-light"];
        var nextButton = ["btn", "btn-light"];
        var nextButton = ["btn", "btn-light"];
        var nextButton = ["btn", "btn-light"];
        var nextButton = ["btn", "btn-light"];
        var nextButton = ["btn", "btn-light"];
        var nextButton = ["btn", "btn-light"];
        var nextButton = ["btn", "btn-light"];
        var nextButton = ["btn", "btn-light"];
        var nextButton = ["btn", "btn-light"];
        for(let i = 0; i < nextButton.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < nextButton.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < nextButton.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < nextButton.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < nextButton.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < nextButton.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < nextButton.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < nextButton.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < nextButton.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < nextButton.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
        for(let i = 0; i < nextButton.length; i++) { document.getElementById("nextButton").classList.add(arr[i]); }
    }
    
    
    //set up a configuration in stripe
    stripeConfig = (pubKey, price, theme) => { 
        this.publicKey = pubKey;
        this.price = price;
        this.theme = theme;
    } 
        
    /*

        initing everything
        
    */
    
    //set events, globals then display calendar
    triggerStart = () => {
        this.events(); 
        this.globals();
        this.getCalendar(new Date());
    }

        
    //static event listeners -- stick events in react component 
    events = () => {
        this.skeleton = document.getElementById("skeleton");
        this.fillSkeleton(); 
        this.cal = document.getElementById("calendar");
        document.getElementById("today").onclick = this.today;
        document.getElementById("next").onclick = this.next;
        document.getElementById("back").onclick = this.back;  
        document.getElementById("searchMyAppointment").onclick = () => { 
            this.displayAppointmentInformation(
                document.getElementById("displayAppointmentEmail").value,
                document.getElementById("displayAppointmentPassword").value
            );
        }
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
        jan: { month: 31 },
        feb: { month: ((this.currentYearG % 4 == 0) && (this.currentYearG % 100 != 0)) || (this.currentYearG % 400 == 0) ? 29 : 28 },
        mar: { month: 31 },
        apr: { month: 30 },
        may: { month: 31 },
        jun: { month: 30 },
        jul: { month: 31 },
        aug: { month: 31 },
        sep: { month: 30 },
        oct: { month: 31 },
        nov: { month: 30 },
        dec: { month: 31 },
        }
    }

    
    //fill the calendar -- stick this john in react component
    fillSkeleton = () => {
          
         this.skeleton.style.cssText = `margin: auto; text-align: center; font-family: Times New Roman", Times, serif;`;
          
         this.skeleton.innerHTML = `

         <div id = "toggleDisplay">

              <div style = "margin-bottom: 0px;">
                  <button id = "back" class = "btn" style = "color: black; background-color: white; border: none; cursor: pointer; font-family: Times New Roman, Times, serif; font-size: 18px"><</button>
                  <button id = "next" class = "btn" style = "margin-left: 5px; color: black; background-color: white; border: none; cursor: pointer; font-family: Times New Roman, Times, serif; font-size: 18px ">></button>
                  <button id = "today" class = "btn" style = "margin-left: 5px; color: black; background-color: white; border: none; cursor: pointer; font-family: Times New Roman, Times, serif; font-size: 18px">today</button>
              </div>

              <div style = "margin-bottom: 10px;">
                  <small id = "date" style = "margin-left: 5px"></small>
                  <small id = "errorBooked"> </small>
              </div>

              <table class="table table-dark" style = "margin-right: auto; margin-left: auto; border-spacing: 0px;" id = "errorShake">

                    <thead>
                        <tr>
                        <th scope="col">mon</th>
                        <th scope="col">tue</th>
                        <th scope="col">wed</th>
                        <th scope="col">thu</th>
                        <th scope="col">fri</th>
                        <th scope="col">sat</th>
                        <th scope="col">sun</th>
                        </tr>
                    </thead>

                    <tbody id = "calendar"></tbody>

                    <tfoot></tfoot>

              </table>

              <div style = "margin-bottom: 10px; margin-top: 20px;">
                  <input placeholder = "email" type = "text" id = "displayAppointmentEmail"> </input>
                  <br>
                  <br>
                  <input placeholder = "password" id = "displayAppointmentPassword" type = "password"> </input>
                  <br>
                  <br>
                  <button id = "searchMyAppointment"> Search Appointment </button>
              </div>

              <div id = "appointmentInfo" hidden>
                  <p id = "time"></p>
                  <p id = "day"></p>
                  <p id = "month"></p>
                  <p id = "year"></p>
                  <p "message"></p>
                  <button id = "appointmentId"></button>
              </div>

         </div>

   <div id = "toggleDisplayB"></div>`;
          
   }

    
    /*

        functions of this calendar

    */
    
    //display calendar
    getCalendar = (date) => {
    
        this.currentMonthNameG = date.toString().split(" ")[1].toLowerCase(); 
        this.currentYearG = date.getFullYear(); 
        this.currentIndexOfMonthG = date.getMonth(); 

        var startOn = new Date(this.currentYearG, this.currentIndexOfMonthG, 1).getDay(); 

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
            th.innerText = i;
            th.onclick = () => { this.showForm(i, this.currentYearG, this.currentIndexOfMonthG, this.currentMonthNameG); };
            th.onmouseover = () => { this.addNumber(i); this.eliminateBookedEvents(i, this.currentYearG, this.currentIndexOfMonthG, this.currentMonthNameG);  }
            tr.append(th);
            thCount+=1; 

        }
        
        elem.append(tr)
        document.getElementById("date").innerText = `
        ${this.currentIndexOfMonthG+1}/${this.currentYearG} | ${this.currentMonthNameG.toUpperCase()} ${this.currentDayG} ${this.currentYearG}`;

        this.fileToGetBooked ? this.loadInTakenTimes() : this.showNoLoad("loading data not set.."); //doing this twice
        this.hideBackButton ? this.hideBackButtonNone() : this.showNoLoad("back button showing on same month and year..");
        this.hidePastDays ? this.hidePassedDaysNone() : this.showNoLoad("passed days not showing on month and year..");

    }
    
    
    //go to today
    today = () => {
        this.getCalendar(new Date());
        var string = "highlight-"+new Date().getDate();
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
    
    
    //hide back button
    hideBackButtonNone = () => {
        if(this.currentYearG <= this.todaysDate().year && this.currentIndexOfMonthG <= this.todaysDate().month) {
             document.getElementById("back").hidden = true;
         } else {
            document.getElementById("back").hidden = false;
         }
    }

    
    //hide passed days
    hidePassedDaysNone = () => { //consider doing this on the fly when loaded in...just "continue" inside of loop
        if(this.currentYearG == this.todaysDate().year && this.currentIndexOfMonthG == this.todaysDate().month) {
            for(let i = 1; i < this.todaysDate().day; i++) {
                document.getElementById(`highlight-${i}`).innerText = "x";
            }
        }
    }


    //on hover get booked events for each day -- if none showing up return appointments available -- consider running singleton operations
    eliminateBookedEvents = (day, year, monthIndex, monthName) => {
        
        var b = document.getElementById("errorBooked");

        if(this.alottedSlots.length === 0) {                  
            b.innerText = "Appointments available";
            b.style.color = "green";
            return; 
        }

        if(this.checkBeforeToday(day, year, monthIndex, monthName)) {
            b.innerText = "X"; 
            b.style.color = "red";
            return;
        }

        var originalSet = [...this.timeList]; 
                  
        for(let i = 0; i < this.alottedSlots.length; i++) { //change to object l.u
            if(this.alottedSlots[i].day === day) { 
                originalSet.splice(originalSet.indexOf(this.alottedSlots[i].time), 1); 
            } 
        };
            
        if(originalSet.length === 0) { 
            b.innerText = "Booked";
            b.style.color = "red"; 
        } else { 
            b.innerText = "Appointments available"; // consider displaying availabilities before onclick 
            b.style.color = "green"; 
        }

    }


    //displayForm when click on cell
    showForm = (day, year, monthIndex, monthName) => {

        if(this.displayForm === false)  return; 
            
        if(this.checkBeforeToday(day, year, monthIndex, monthName)) {
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
            <h1> ${getDayName} ${monthName} ${day} ${year} </h1>
        `;

        var originalSet = [...this.timeList];

        var compareDay = day.toString();

        for(let i = 0; i < this.alottedSlots.length; i++) {  
            if(this.alottedSlots[i].day === compareDay) {  
                 originalSet.splice(originalSet.indexOf(this.alottedSlots[i].time), 1); 
            } 
        };
        
        if(originalSet.length === 0) { return this.goBackToCalendar() };
                  
        for(let i = 0; i < originalSet.length; i++) {
            temp +=`
            <input type="radio" id="${originalSet[i]}" name="timeS" value="${originalSet[i]}" class="form-check-input xx"> 
            <label for="${originalSet[i]}">${originalSet[i]}</label><br>`; 
        };
                  
        temp += 
            `<p id = "timeErrorS" style = "color: red"></p>
            </div>
            <input id = "emailS" class = "form-control" placeholder = "email" style = "width: 40%; height: 40px; margin: auto">
            <p id = "emailErrorS" style = "color: red"> </p>
            <input id = "passwordS" class = "form-control" placeholder = "password" style = "width: 40%; height: 40px; margin: auto; margin-top: 10px">
            <p id = "passwordErrorS" style = "color: red"> </p>
            <textarea id = "messageS" class = "form-control" placeholder = "message" style = "width: 40%; height: 40px; margin: auto; margin-top: 10px" rows = "5"></textarea>
            <p id = "messageErrorS" style = "color: red"></p>
            <br>
            <br>
            <button id = "submitButton" class = "btn btn-lg" style = "" >Schedule!</button>
            <br>
            <br>
            <small id = "goBackToCalendar" style = "" >calendar</small>
            <p>Lets have some coffee ☕ ...over zoom</p>
            </div>
        `;
                   
        document.getElementById("toggleDisplayB").innerHTML = temp;
        document.getElementById("emailS").focus();
        document.getElementById("emailS").select();

        document.getElementById("toggleDisplayB").style.display = "block";
        document.getElementById("toggleDisplay").style.display = "none";
        document.getElementById("goBackToCalendar").onclick = this.goBackToCalendar;
        document.getElementById("submitButton").onclick = this.submit;

    }

    
    //go back to the calendar    
    goBackToCalendar = () => {
        document.getElementById("toggleDisplayB").style.display = "none";
        document.getElementById("toggleDisplay").style.display = "block";
    }
    

    //check errors and submit form
    submit = () => {

        if(this.fileToPushAppointment === false)  return; 
        
        var day = document.getElementById("dayS");
        var dayName = document.getElementById("dayNameS");
        var monthName = document.getElementById("monthNameS");
        var monthIndex = document.getElementById("monthIndexS");
        var year = document.getElementById("yearS");
        var email = document.getElementById("emailS");
        var password = document.getElementById("passwordS");
        var message = document.getElementById("messageS"); 
        var time = $('input[name="timeS"]:checked' ).val(); 

        document.getElementById("timeErrorS").innerText = ""; 
        document.getElementById("emailErrorS").innerText = "";
        document.getElementById("messageErrorS").innerText = "";
        document.getElementById("passwordErrorS").innerText = "";
        
        var count = 0;
        
        if(time === undefined) { 
            count++; 
            document.getElementById("timeErrorS").innerText = "Please select a time"; 
        };
        
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
            count++; 
            document.getElementById("emailErrorS").innerText = "*Please enter a valid email";
        };

        if(message.value.length < 10) { 
            count++;
            document.getElementById("messageErrorS").innerText = "Message must be more at least 10 characters";
         }

         if(password.value.length < 3) { 
            count++;
            document.getElementById("passwordErrorS").innerText = "Password must be at least 3 characters";
         }
        
         if(count > 0)  return;
        
         $.ajax({

            type: "POST",

            url: this.fileToPushAppointment, 

            data: {
                decision: "insertIntoAppointment",
                day: parseInt(day.value),
                dayName: dayName.value,
                monthName: monthName.value,
                monthIndex: parseInt(monthIndex.value),
                year: parseInt(year.value),
                email: email.value,
                time: time,
                password: password.value,
                message: message.value
            },

            dataType: "json",

            success: function(result, status, xhr) {

                alert("show check mark");
                
            },

            error: function(xhr, status, error) {

                console.log(error);

            },

        });
        
    }


    //grab and push in
    showCheckMark = () => {}
    

    //load in taken times for this month and year -- global affecting ajax request wtf
    loadInTakenTimes = () => {

        if(this.fileToGetBooked === false)  return;
        
        $.ajax({

            type: "POST",

            url: this.fileToGetBooked,

            data: {
                decision: "getBooked",
                globalYear: this.currentYearG,
                globalMonthIndex: this.currentIndexOfMonthG
            },

            dataType: "json",

            success: (result, status, xhr) => {

                this.alottedSlots = [];
                   
                for(let i = 0; i < result.rows.length; i++) { 
                    this.alottedSlots.push({ 
                        year: result.rows[i].year, 
                        monthName: result.rows[i].monthName,
                        monthIndex: result.rows[i].monthIndex,
                        day: result.rows[i].day,
                        time: result.rows[i].time
                    });   
                }
                
            },

            error: (xhr, status, error) => {

                console.log("error");

                this.alottedSlots =  [];
                
            },

        });

    }
    
    
    //search if an email exists and show appointment time and password and cancel button -- if password good, remove
    displayAppointmentInformation = (email, password) => {

        if(this.searchEmailFilePath === false) return; 
        
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {  
            return;
        };

        $.ajax({

            type: "POST",

            url: this.searchAppointmentFilePath, 

            data: {
                decision: "displayAppointmentInformation",
                email: email,
                password: password
            },

            dataType: "json",

            success: function(result, status, xhr) {

                //just display and add cancel in here

                console.log(result.valid.rows);
                 
            },

            error: function(xhr, status, error) {

                console.log(error);

            },

        });
        
    }


    //submit remove appointment if no good return error
    removeAppointment = () => {}

 
    /*

        EXTENSIONS
        
    */


    //whenevr you call new date refer to this
    todaysDate = () => {
        return {
            startDay: new Date().getDay(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            day: new Date().getDate()
        };
    }


    //check for before today 
    checkBeforeToday = (day, year, monthIndex, monthName) => {
        if((monthIndex === this.todaysDate().month && year === this.todaysDate().year && day < this.todaysDate().day) ||
           (monthIndex < this.todaysDate().month && year === this.todaysDate().year) ||
           (year < this.todaysDate().year)) {
            return true;
        }
            return false;
    }


    /*

        Show configuration properties not showing and set a configured cooler for too many requests
        
    */


    //prevent overload -- obf -- based off hits in server.. run this when count overloaded.
    keepSearchTriesOnServerOverLoadRedirect = () => {}


    //show configuration properties not showing
    showNoLoad = (message) => { console.log(message); }


}


    /*

        Backend.. run class and hit decision...easy as pie
        
    */

//database -- this is ugly. change this 
class quickCalBackEnd  {
      
      
    config = (configHits, configTimer, configDatabase) => { 
           this.max = configHits;
           this.cooler = configTimer;
           this.database = configDatabase;
    }
    
    
    hits = () => {
          this.hits = 0;
    }
     
     
    checkHits = () => {
           if(this.hits > this.max) { 
                 return false;
           }
                 return true;
    }
     
    
    resetHits = () => { 
           //listen for timer end and destroy timer and reset hits
    }

    //determine datavase being used
    database = () => {
    
    }
    
    
    //stripeConfig
    stripeConfig = () => {
    
    }

    
    //insert into database iif time not in timelist return.
    insertInto = (day, dayName, monthName, monthIndex, year, email, time, password, message) => {
        const text = 'INSERT INTO appointments ("day", "dayName", "monthName", "monthIndex", "year", "email", "time", "password", "message") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
        const values = [day, dayName, monthName, monthIndex, year, email, time, password, message];
        conn.query(text, values, (err, response) => {
            this.hits++;
            if (err) {
                console.log(err.stack)
            } else {
                return res.json({ result: response.rows[0] });
            }
        });
    }


    //grab booked appointments -- select where month and year -- 
    getBooked = (globalMonthIndex, globalYear) => {
        const text = 'SELECT * FROM appointments WHERE "monthIndex" = $1 AND "year" = $2'; //AND TIME LIST IN []
        const values = [globalMonthIndex, globalYear];
        conn.query(text, values, (err, response) => {
            this.hits++;
            if (err) {
                console.log(err.stack);
            } else {
                return res.json({ rows: response.rows });
            }
        });
    }


    //search the appointments set
    displayAppointment = (password, email) => {
        const text = 'SELECT "email", "time", "day", "dayName", "year", "monthName", "monthIndex" FROM appointments WHERE "password" = $1 AND "email" = $2'; 
        const values = [password, email];
        conn.query(text, values, (err, response) => {
            this.hits++;
            if (err) {
                console.log(err.stack);
            } else {
                return res.json({ valid: response });
            }
        });
    }


    //hit this decision -- hopefully 
    decision = (decision, body, db) => {
          
        //set a local and run a timer  
        if(!this.checkHits()) {  
              return res.json({ 
                    error: "Please give 'timer(seconds)' before making any more requests to the server. Thanks"
              });  
        };
          
        //make decisions on where to go  
        switch(decision) {
            case "insertIntoAppointment":
            this.insertInto(
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
            this.getBooked(
                db,
                body.globalMonthIndex, 
                body.globalYear);
            break;
            case "displayAppointmentInformation":
            this.displayAppointment(
                db,
                body.password,
                body.email);
            break;
            default: console.log("different file");
        }
    }


    endConn = () => {
        conn.end();
    }

    
}
 

module.exports = { quickCalFrontEnd, quickCalBackEnd };






