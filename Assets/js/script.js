//Get time block and save icon elements by id using jquery
var saveBtn = $('.save-icon')
var blockContainerEl = $('.blockContainer')
var block9am = $('#9AM')
var block10am = $('#10AM')
var block11am = $('#11AM')
var block12pm = $('#12PM')
var block1pm = $('#1PM')
var block2pm = $('#2PM')
var block3pm = $('#3PM')
var block4pm = $('#4PM')
var block5pm = $('#5PM')

// defines array for text elements
var blocksElArray = {
    block9am,
    block10am,
    block11am,
    block12pm,
    block1pm,
    block2pm,
    block3pm,
    block4pm,
    block5pm,
};



//uses moment.js to update time on page
function timeUpdater() {

    var today = moment();
    //gets html element by id and asigns inner text with moment.js 
    $('#jumboClock').text(today.format('dddd, MMMM, Do YYYY, h:mm:ss'))
}

timeUpdater();
//calls the timeUpdater function every second
setInterval(timeUpdater, 1000); 