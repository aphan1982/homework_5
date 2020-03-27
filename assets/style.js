var nowMoment = moment().format("dddd, MMMM Do YYYY");
var currentDay = $("#currentDay").text(nowMoment);

var nowHour = moment().hour();

// var hourVals = parseInt($(".row").each().attr("id"));
// console.log(hourVals);

// // setColor();
// console.log(typeof(parseInt($(".row").attr("id"))));
  
function setBGColor() {
  var value = parseInt(this.id);
  console.log(value);
  if (value < nowHour) {
    $(this).addClass("past");
    console.log($(this));
  } else if (value === nowHour) {
    $(this).addClass("present");
    console.log($(this));
  } else {
    $(this).addClass("future");
    console.log($(this));
  }
};

$(".mb-3").each(setBGColor);