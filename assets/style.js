var nowHour = moment().hour();
var nowMoment = moment().format("dddd, MMMM Do YYYY");

$("#currentDay").text(nowMoment);
$(".mb-3").each(setBGColor);
$(".form-control").each(loadPlanner);

function loadPlanner() {
  var keyname = this.id;
  console.log(keyname);
  console.log(typeof(keyname));
  var storedPlanner = JSON.parse(localStorage.getItem(keyname));
  if (storedPlanner !== null) {
    $(this).text(storedPlanner);
    console.log(storedPlanner);
  }
};

function setBGColor() {
  var value = parseInt(this.id);
  if (value < nowHour) {
    $(this).addClass("past");
  } else if (value === nowHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
};

// function savePlanner(event) {
//   event.preventDefault
//   // Stringify and set "todos" key in localStorage to todos array
//   var plannerText = $.trim(keyname).val();
//   console.log(plannerText);
//   if (plannerText != "") {
//     // Show alert dialog if value is not blank
//     alert(plannerText);
//   }
  
//   localStorage.setItem(keyname, JSON.stringify(plannerText));
// };



$(".mb-3").on("click", function(event) {
  event.preventDefault();

  var keyname = $(this).children(".form-control").attr("id");
  var value = $(this).children(".form-control").val();
  var trimmedVal = $.trim(value);

  if (!trimmedVal) {
    alert("Please enter an event to save!")
  } else {
    localStorage.setItem(keyname, JSON.stringify(trimmedVal));
    alert("Planner updated!")
  }
  
  console.log(keyname);
  console.log(value);
  console.log(trimmedVal);



});

console.log($("textarea").val());