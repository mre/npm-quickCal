# npm-quickCal
a quickly configured calendar that saves all data
<h1>How to use </h1>
<p>call class calendar <code> let calendar = new Calendar() </code></p>
<p>Next decide your configuration. You have two options, default or your own</p>
<h2> for default type: </h2>
<p> <code> calendar.default(getBookedFile, apptFile, searchEmailFile, redirectUrl, timeList, redirectMessage) </code>  </p>
<p> This wil generate an accurate calendar for you where you have 10 configuration settings set to load, save and display CORRECT information </p>
<p>default parameters are </p>
<ul>
<li>getBookedFile: file path for server side -- using ajax -- the attached if statement variable is <u>getBooked</u> -- type is string</li>
<li>apptFile: file path for server side -- using ajax -- the attached if statement is <u>insertIntoAppointment</u> -- type is string</li>
<li>searchEmailFile: file path to check if email exists so you can remove email | the attached if statement is <u>displayAppointmentTime</u>| type is string</li>
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

</p>
