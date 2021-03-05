# npm-quickCal

**this package is not complete**

This will generate an accurate calendar for you where you can to load, save, remove and display CORRECT information for every user all the way down to the time of the appointment... times do not have to be formatted in any way but recommended is just saying [1am, 1:30am] ect.. the list of times can be anything you want them to be but must be strings.

# How to use

call class calendar 

```js
let calendar = new Calendar()
```

Next decide your configuration. You have two options, default or your own

## for default type:

```js
calendar.default(getBookedFile, apptFile, searchEmailFile, redirectUrl, timeList, redirectMessage)
```

default parameters are

*   getBookedFile: file path for server side to get list of bookings dynamically loaded -- the attached if statement variable is **getBooked** -- type is string
*   apptFile: file path for server side to insert a new appointment -- the attached if statement is **insertIntoAppointment** -- type is string
*   searchEmailFile: file path to check if email exists so user can remove their appointment -- the attached if statement is **displayAppointmentTime** -- type is string
*   redirectUrl: url to redirect to -- will probablt get rid of this and just show check mark -- type is string
*   timeList: list of times you decide in array format -- type is array
*   redirectMessage: header message for redirect. I dont think i am going to add this -- type string

## for configured type:

```js
calendar.configure(getBookedFile, apptFile, searchEmailFile, hidePastDays, hideBackButton, timelist, redirectUrl, redirectMessage, dontshowForm)
```

*   getBookedFile: file path for server side -- using ajax -- the attached if statement variable is <u>getBooked</u> -- type is string
*   apptFile: file path for server side -- using ajax -- the attached if statement is <u>insertIntoAppointment</u> -- type is string
*   searchEmailFile: file path to check if email exists so you can remove email -- the attached if statement is <u>displayAppointmentTime</u> -- type is string
*   redirectUrl: url to redirect to -- will probablt get rid of this and just show check mark -- type is string
*   timeList: list of times you decide in array format -- type is array
*   redirectMessage: header message for redirect. I dont think i am going to add this -- type string
*   hideBackbutton: boolean for hiding back button on month and year
*   hidePassedDays: boolean for hiding passed days on this month and year
*   dontshowform: boolean for only displaying calendar

# Styling

To style different elements call `calendar.style(cssNext, cssBack, cssToday, cssInput, cssTableCell, cssMessageInput, cssPassword, cssEmail, cssSubmitButton, cssRadioTimes)`

you can define the cssText for each element by typeing the css string for example "display: block; cursor: pointer" ... ect

there will be a default and configured style configuration option as well as a class configured option. `let calendar = new Calendar(); calendar.defaultStyle("display: block; margin: cool", "margin-top: awesome") calendar.classes(["btn", "btn-lg"])` prob dont need arry for this.... but whatver not important

# SERVER SIDE

one table with seven rows

day, time, month, monthName, year, email[client email], message[client message]

and thats it - server side files will only be in node js ... but can easily be dine in other languages

# Stripe

There will be a payment configuration object available to accept payment that integrates with the back end and stripe

# chat

not guarenteed but chat available under calendar

# Dashboard

dashboard to manage all chat and appointments

# Time complexity

every move in the calendar meaning pressing button today next and back will result in a new set loaded in.

It is a dynamic set with the upper bound of rows being (the dynamic amount of days for the year and month from db) * (the amount of times allocated in your configuration for each day in db)

so if the amount of days in the month is 30 and your configuration has 3 times set that is... daysN*timesN or up to 90 sets loaded in at once if a booked schedule

alloted slots is all the rows loaded in. it is an array now but i will change to reduce look up from N to O(1)*timeslist

db: days * timelist -- 2n with larger second -- monthly

search: o(1)alottedslots * O(N)timelist - monthly

reads has a count attached incase the user decides to keep pressing...it will set a session and return "STOP THAT" =\|/=

# Working Example

A working example will be shown when complete

# Dependencies

* [jQuery](https://jquery.com/)
* gsap
* bootstrap recommended
