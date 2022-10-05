


//uses moment.js to update time on page
function timeUpdater() {

    let today = moment();
    //gets html element by id and asigns inner text with moment.js 
    $('#jumboClock').text(today.format('dddd, MMMM, Do YYYY, h:mm:ss'))


}   

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
var blocksElArray = [
    block9am,
    block10am,
    block11am,
    block12pm,
    block1pm,
    block2pm,
    block3pm,
    block4pm,
    block5pm,
];


//runs the render function
render();

//runs the time updater function
timeUpdater();
//calls the timeUpdater function every second
setInterval(timeUpdater, 1000); 

// render the textarea input data from local storage to the elements of blocksElArray

function render() {
    for (let element of blocksElArray) {
        element.val(localStorage.getItem('target block' + element.data('hour')))
    }

}





//click function

function submitForm(event) {
event.preventDefault();

let btnClick = $(event.currentTarget);
var textTarget = btnClick.siblings('textarea');
var targetBlock = textTarget.data('hour');
localStorage.setItem('target block' + targetBlock, textTarget.val());
}

saveBtn.on('click', submitForm)