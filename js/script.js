// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var rightNow = (moment().format("LT"));
var hourCheck = $(".taskD");
var timeAttached = $(".taskT");
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
    var clockedTime = $(timeAttached[i]);
    //console.log(clockedTime);
    //console.log(rightNow);

    if (clockedTime > rightNow) {
        currentHour.addClass("table-success")
    } else if(clockedTime === rightNow) {
            currentHour.addClass("table-danger")
        }
        else { 
            currentHour.addClass("table-secondary")
    }
};
// WHEN I click into a time block
// THEN I can enter an event
$(".task-d").on("click", "div", function() {
    var text = $(this)
    .text()
    .trim();
    var taskInput = $("<textarea>")
    .addClass("col-8")
    .val(text);
    $(this).replaceWith(taskInput);
    taskInput.trigger("focus");
});

// $(".task-d").on("blur", "textarea", function() {
//     var text = $(this)
//     .val()
//     .trim();

//     var place = $(this)
//     .closest(".task.d")
//     .attr("id")
//     .replace("hour-", "");

//     var index = $(this)
//     .closest(".task-d")
//     .index();

//     tasks[place][index].text = text;
//     saveTasks();

//     var newTask = $("<div>")
//     .addClass("col-8")
//     .text(text);

//     $(this).replaceWith(newTask);
//});
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
// WHEN I refresh the page
// THEN the saved events persist
var checkTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if(!tasks) {
        tasks = {};
    }
};