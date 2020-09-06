// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var rightNow = (moment("ha z").format("LT"));
var hourCheck = $(".taskD");
var timeAttached = $(".taskT");
var taskList = JSON.parse(localStorage.getItem("masterList")) || [];
$("#currentDay").text(moment().format("MMMM Do YYYY"));
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
$("#hour-1").text(moment(9, "ha z").format('LT'));
$("#hour-2").text(moment(10, "ha z").format("LT"));
$("#hour-3").text(moment(11, "ha z").format("LT"));
$("#hour-4").text(moment(12, "ha z").format("LT"));
$("#hour-5").text(moment(13, "ha z").format("LT"));
$("#hour-6").text(moment(14, "ha z").format("LT"));
$("#hour-7").text(moment(15, "ha z").format("LT"));
$("#hour-8").text(moment(16, "ha z").format("LT"));

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
for (var i = 0; i <= hourCheck.length; i++) {
    var currentHour = $(hourCheck[i]);
    var clockedTime = $(timeAttached[i]).text();
    //console.log(clockedTime);
    //console.log(rightNow);

    if (clockedTime === rightNow) {
        currentHour.addClass("table-danger")
    } else if(clockedTime < rightNow) {
            currentHour.addClass("table-success")
        }
        else { 
            currentHour.addClass("table-secondary")
    }
};
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
$("#save").on("click", function(event){
    event.preventDefault();

    //I need to append the hour's id to the description
    var taskAttach = $("#task-description")
    .val()
    .trim();

    var taskId = $(this)
    .closest("div")
    .text();

    console.log(taskId);
    taskList.push({
        text: taskAttach,
        id: taskId
        });

    localStorage.setItem("masterList", JSON.stringify(taskList));
});
// WHEN I refresh the page
// THEN the saved events persist
function taskCheck() {
    var savedTask = localStorage.getItem("text");
    $(".taskD").each(function() {
        var logTask = $(this);
        $(this).text(savedTask);
    })
};