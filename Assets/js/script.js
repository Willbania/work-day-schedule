//uses moment.js to update time on page
function timeUpdater() {

    var today = moment();
    //gets html element by id and asigns inner text with moment.js 
    $('#jumboClock').text(today.format('dddd, MMMM, Do YYYY, h:mm:ss'))
}

timeUpdater();
//calls the timeUpdater function every second
setInterval(timeUpdater, 1000); 