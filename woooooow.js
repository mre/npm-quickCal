

    //globals for viewing and interacting with calendar
    let currentDate = new Date();
    let currentDayG = 1;
    let currentIndexOfMonthG = null; 
    let currentMonthNameG = null;
    let currentYearG = null;
    
    
    
    
    //stores times taken already...pushed from function at end of display calendar -- updated every hit
    let alottedSlots = [];
	
	
	
	
    //getting month and index from date string
    let amountOfDays = {
        jan: {
            month: 31,
            index: 0
        },
        feb: {
            month: ((currentYearG % 4 == 0) && (currentYearG % 100 != 0)) || (currentYearG % 400 == 0) ? 29 : 28,
            index: 1
        },
        mar: {
            month: 31,
            index: 2
        },
        apr: {
            month: 30,
            index: 3
        },
        may: {
            month: 31,
            index: 4
        },
        jun: {
            month: 30,
            index: 5
        },
        jul: {
            month: 31,
            index: 6
        },
        aug: {
            month: 31,
            index: 7
        },
        sep: {
            month: 30,
            index: 8
        },
        oct: {
            month: 31,
            index: 9
        },
        nov: {
            month: 30,
            index: 10
        },
        dec: {
            month: 31,
            index: 11
        },
    };
    
    
    
    
    //just starts things off
    getCalendar(currentDate); 
    

    //display calendar
    function getCalendar(date) {
    
        
        currentMonthNameG = date.toString().split(" ")[1].toLowerCase(); 

        currentYearG = parseInt(date.toString().split(" ")[3].toLowerCase());

        currentIndexOfMonthG = amountOfDays[currentMonthNameG].index; 

    
        var startOn = new Date(currentYearG, currentIndexOfMonthG, 1).toString().split(" ")[0].toLocaleLowerCase(); 

        var arrayOfDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]; 

        startOn = arrayOfDays.indexOf(startOn) + 1;

    
        document.getElementById("calendar").innerHTML = ``;

        var elem = document.getElementById("calendar");

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
    
        let days = amountOfDays[currentMonthNameG].month; 
    
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

            th.onclick = () => { showForm(i, currentYearG, currentIndexOfMonthG, currentMonthNameG); };

            th.onmouseover = () => { addNumber(i); eliminateBookedEvents(i, currentYearG, currentIndexOfMonthG, currentMonthNameG);  }

            tr.append(th);

            thCount+=1; 

        }
        
        elem.append(tr)

        document.getElementById("date").innerText = `${currentIndexOfMonthG+1}/${currentYearG} | ${currentMonthNameG.toUpperCase()} ${currentDayG} ${currentYearG}`;

        loadInTakenTimes();

    }
    
    
    //go to today
    document.getElementById("today").onclick = today;

    function today() {

        var date = new Date();

        var day = date.toString().split(" ")[2];

        getCalendar(date);

        var string = "highlight-"+day;

        document.getElementById(string).style.backgroundColor = "lightblue";

    }
    
    
    //move next in calendar
    document.getElementById("next").onclick = moveNext;

    function moveNext() {

        currentIndexOfMonthG === 11 ? (currentYearG += 1, currentIndexOfMonthG = 0) : (currentIndexOfMonthG += 1);

        getCalendar(new Date(currentYearG, currentIndexOfMonthG, 1));

    }
    
    
    //move back in calendar
    document.getElementById("back").onclick = moveBack;

    function moveBack() {

        currentIndexOfMonthG === 0 ? (currentYearG -= 1, currentIndexOfMonthG = 11) : (currentIndexOfMonthG -= 1);

        getCalendar(new Date(currentYearG, currentIndexOfMonthG, 1));

    }
    
    
    //pass in a date
    function goToDate(val) {

        var month = val.split("-")[1].charAt(0) === "0" ? parseInt(val.split("-")[1].charAt(1)) : parseInt(val.split("-")[1]); 

        var year = parseInt(val.split("-")[0]);

        var day = parseInt(val.split("-")[2]); 

        var string = "highlight-" + day.toString();

        getCalendar(new Date(year, month-1, day));

        document.getElementById(string).style.backgroundColor = "lightblue";

    }
    
    
    //replace number in string on hover
    function addNumber(pushNum) {

        var dateString = document.getElementById("date");

        var arr = dateString.innerText.split(" ");

        arr[3] = pushNum;

        arr = arr.join(" ");

        document.getElementById("date").innerText = arr;

    }
    
    
    //load in taken times for this month and year
    function loadInTakenTimes() {
        
        $.ajax({

            type: "POST",

            url: "scheduleAppointment.php",

            data: {

                getBooked: "getBooked",

                globalYear: currentYearG,

                globalMonthIndex: currentIndexOfMonthG

            },

            dataType: "json",

            success: function(result, status, xhr) {
                
                alottedSlots = [];
                
                for(let i = 0; i < result.length; i++) {
                    
                    alottedSlots.push({ //change to objet to reduce lookup

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
    
    
    //on hover get booked events for each day
    function eliminateBookedEvents(day, year, monthIndex, monthName) {
        
        var date = new Date();

        var todayYear = parseInt(date.toString().split(" ")[3]);

        var todayMonthIndex = amountOfDays[date.toString().split(" ")[1].toLowerCase()].index; 

        var todayDay = parseInt(date.toString().split(" ")[2]);

        
        var b = document.getElementById("errorBooked");
            

        if((monthIndex < todayMonthIndex && year === todayYear) ||

            (year < todayYear) || 

            (monthIndex === todayMonthIndex && year === todayYear && day < todayDay)) {

            b.innerText = "X"; b.style.color = "red";

            return;

        }

        var stopCount = 0;

        var originalSet = ["6am", "9am", "3pm", "7pm"];  
                  
        for(let i = 0; i < alottedSlots.length; i++) { //change array to object to reduce from N to O(1)*4 ...change indexOf to push to reduce 'N' to O(1) -- not really n^2

            if(stopCount === originalSet.length) { break; }

            if(alottedSlots[i].day === day) { 

                originalSet.splice(originalSet.indexOf(alottedSlots[i].time), 1); 

                stopCount++;

            } 

        };
        
            
        if(originalSet.length === 0) { b.innerText = "Booked"; b.style.color = "red";  } else { b.innerText = "Appointments available"; b.style.color = "green";  }

    }
    
    
    //displayForm when click on cell
    function showForm(day, year, monthIndex, monthName) {
        
        var date = new Date();

        var todayYear = parseInt(date.toString().split(" ")[3]);

        var todayMonthIndex = amountOfDays[date.toString().split(" ")[1].toLowerCase()].index; 

        var todayDay = parseInt(date.toString().split(" ")[2]);
            

        if((monthIndex < todayMonthIndex && year === todayYear) ||  (year < todayYear) ||  (monthIndex === todayMonthIndex && year === todayYear && day < todayDay)) {

            var element = document.getElementById("errorShake");

            TweenMax.to(element, 0.1, {x:"+=20", yoyo:true, repeat:5});

            return;

        }
            
        document.getElementById("toggleDisplayB").style.display = "block";

        document.getElementById("toggleDisplay").style.display = "none";

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

        var originalSet = ["6am", "9am", "3pm", "7pm"];  

        var stopCount = 0;

        for(let i = 0; i < alottedSlots.length; i++) {  //change array to object to reduce from N to O(1)*4 ...change indexOf to push to reduce 'N' to O(1) -- not really n^2
		
            if(stopCount === originalSet.length) { break; };

            if(alottedSlots[i].day === day) {  originalSet.splice(originalSet.indexOf(alottedSlots[i].time), 1); stopCount+=1; } 

        };
                  
        if(originalSet.length === 0) { back(); return; } 
                  
        for(let i = 0; i < originalSet.length; i++) {

            temp +=`
            <input type="radio" id="${originalSet[i]}" name="timeS" value="${originalSet[i]}" class="form-check-input xx"> 
            <label for="${originalSet[i]}">${originalSet[i]}</label><br>`; 

        };
                  
        temp += `<p></p>
        <p>Lets have some coffee ☕ ...over zoom</p>
        </div>
        <input id = "emailS" class = "form-control" placeholder = "email" style = "width: 40%; height: 40px; margin: auto">
        <p id = "emailError" style = "color: red"> </p>
        <input id = "passwordS" class = "form-control" placeholder = "password" style = "width: 40%; height: 40px; margin: auto">
        <small> optional for viewing and canceling appointment </small>
        <p id = "passwordErrorS" style = "color: red"> </p>
        <br>
        <button class = "btn btn-lg" style = "color: white; background-color: lightcoral; border-radius: 0px; font-size: 24px; box-shadow: 2px 2px 2px black" onclick = "submit()" >Schedule!</button>
        <br>
        <br>
        <small onclick = "back()" style = "cursor: pointer; font-weight: bold" >calendar</small>
        </div>`;
                   
        document.getElementById("toggleDisplayB").innerHTML = temp;

        document.getElementById("emailS").focus();

        document.getElementById("emailS").select();

    }
    
    
    //go back to the calendar    
    function back() {

        document.getElementById("toggleDisplayB").style.display = "none";

        document.getElementById("toggleDisplay").style.display = "block";

    }
    
    
    //check errors and submit form
    function submit() {
        
        var day = document.getElementById("dayS");

        var dayName = document.getElementById("dayNameS");

        var monthName = document.getElementById("monthNameS");

        var monthIndex = document.getElementById("monthIndexS");

        var year = document.getElementById("yearS");

        var email = document.getElementById("emailS");

        var time = $('input[name="timeS"]:checked' ).val();

        
        var count = 0;

        if(time === undefined) { count++; alert("please select a time") };

        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) { count++; document.getElementById("emailError").innerText = "*Please enter a valid email"; };
        

        if(count > 0) { return; }
        

        $.ajax({

            type: "POST",

            url: "scheduleAppointment.php", 

            data: {

                insertInto: "insertInto",

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
                
                location.replace("index.html?show='please check your email for your appointment, if you forget search for your email on the same page and your appointment will show up for you'");
                
            },
            error: function(xhr, status, error) {

                console.log(error);

            },
        });
        
    }
    
    
    //search if an email exists and show appointment time and password and cancel button
    function searchEmail(email) {
        
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {  

            document.getElementById("removePassword") ? document.getElementById("removePassword").remove() : ""; 

            return;

        };

        $.ajax({

            type: "POST",

            url: "scheduleAppointment.php", 

            data: {

                displayAppointmentTime: "displayAppointmentTime",

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
    function showOrHidePasswordAndCancelButton(showOrHide) {
        
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
    
    
    function showPassword() {}
    
    
    function removeAppointment() {}
    
    
    function keepSearchTriesOnServerOverLoadRedirect() {}





    

