# npm-quickCal
a quickly configured calendar that saves all data
<p> <b>this package is not complete</b> </p>
<p> This will generate an accurate calendar for you where you have 10 configuration settings set to load, save, remove and display CORRECT information for every user all the way down to the time of the appointment you set for each user to select... times do not have to be formatted in any weird way but recommended is just saying [1am, 1:30am] ect.. the list of times can be anything you want them to be but must be strings.  </p>
<h1>How to use </h1>
<p>call class calendar <code> let calendar = new Calendar() </code></p>
<p>Next decide your configuration. You have two options, default or your own</p>
<h2> for default type: </h2>
<p> <code> calendar.default(getBookedFile, apptFile, searchEmailFile, redirectUrl, timeList, redirectMessage) </code>  </p>
<p>default parameters are </p>
<ul>
<li>getBookedFile: file path for server side -- the attached if statement variable is <b>getBooked</b> -- type is string</li>
<li>apptFile: file path for server side -- the attached if statement is <b>insertIntoAppointment</b> -- type is string</li>
<li>searchEmailFile: file path to check if email exists so you can remove email -- the attached if statement is <b>displayAppointmentTime</b> -- type is string</li>
<li>redirectUrl: url to redirect to -- will probablt get rid of this and just show check mark -- type is string</li>
<li>timeList: list of times you decide in array format -- type is array</li>
<li>redirectMessage: header message for redirect. I dont think i am going to add this -- type string</li>
</ul>
<h2> for configured type: </h2>
<p> <code> calendar.configure(getBookedFile, apptFile, searchEmailFile, hidePastDays, hideBackButton, timelist, redirectUrl, redirectMessage, dontshowForm) </code> </p>
<ul>
<li>getBookedFile: file path for server side -- using ajax -- the attached if statement variable is <u>getBooked</u> -- type is string</li>
<li>apptFile: file path for server side -- using ajax -- the attached if statement is <u>insertIntoAppointment</u> -- type is string</li>
<li>searchEmailFile: file path to check if email exists so you can remove email -- the attached if statement is <u>displayAppointmentTime</u> -- type is string</li>
<li>redirectUrl: url to redirect to -- will probablt get rid of this and just show check mark -- type is string</li>
<li>timeList: list of times you decide in array format -- type is array</li>
<li>redirectMessage: header message for redirect. I dont think i am going to add this -- type string</li>
<li>hideBackbutton: boolean for hiding back button on month and year</li>
<li>hidePassedDays: boolean for hiding passed days on this month and year </li>
<li>dontshowform: boolean for only displaying calendar </li>
</ul>
 
<h1>
  Styling
</h1>
<p>
  To style different elements call <code> calendar.style(cssNext, cssBack, cssToday, cssInput, cssTableCell, cssMessageInput, cssPassword, cssEmail, cssSubmitButton, cssRadioTimes) </code>
</p>
<p>you can define the cssText for each element by typeing the css string for example "display: block; cursor: pointer" ... ect</p>

<h1>
  SERVER SIDE
</h1>
<p>
  one table with seven rows
</p>
<p> day, time, month, monthName, year, email[client email], message[client message] </p>
<p> and thats it - server side files will be shown in more than one language... c#, php, nodejs, java ..maybe Go but i doubt it </p>
