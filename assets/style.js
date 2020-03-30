// VARIABLES: (time received from moment.js)
var nowHour = moment().hour();
var nowMoment = moment().format("dddd, MMMM Do YYYY");


$("#currentDay").text(nowMoment);
$(".mb-3").each(setBGColor);
$(".form-control").each(loadPlanner);

// FUNCTIONS:
// Accesses localStorage to display data entered in each $(".form-control") from previous sessions:
function loadPlanner() {
  var keyname = this.id;
  var storedPlanner = JSON.parse(localStorage.getItem(keyname));
  if (storedPlanner !== null) {
    $(this).text(storedPlanner);
  }
};

// Compares 24-hr clock value for each timeblock against current time and color-codes each timeblock as gray (past), coral (present), and green (future):
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

// When a $(".saveBtn") is clicked, data in $(".form-control") (if any) are saved in localStorage:
$(".mb-3").on("click", function(e) {
  e.preventDefault();
  // Verifies that save button was clicked:
  if (e.target && e.target.matches(".saveBtn")) {
    // Takes <textarea> data and formats for localStorage:
    var thisField = $(this).children(".form-control");
    var keyname = thisField.attr("id");
    var value = $.trim(thisField.val());
    if (!value) { // Prevents unwanted clear:
      blank = confirm("Are you sure you'd like to clear this hour?");
      if (blank) {
        localStorage.setItem(keyname, JSON.stringify(value));
      } else { // Restores old data:
        var restoreEntry = JSON.parse(localStorage.getItem(keyname));
        if (restoreEntry !== null) {
          thisField.val(restoreEntry);
        }
      }
    } else { // Sets new data:
      localStorage.setItem(keyname, JSON.stringify(value));
      alert("Planner updated!");
    }
  }
});