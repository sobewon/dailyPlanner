// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {
  var currentTime = dayjs(); //currently used in functions: currentDay,


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?





  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function changeTimeBlock (time) {
    var shortTime = time.format("HH");

    for (i=9; i <= 15; i++) {
      var curRowID = "hour-" + i
      console.log(curRowID)
      const curRow = document.getElementById(curRowID);
      
      if (i < shortTime) {
        console.log("gray")
        curRow.className = "row time-block past";
      }
      else if (i == shortTime) {
        console.log("red")
        curRow.className = "row time-block present";
      }
      else if (i > shortTime) {
        console.log("green")
        curRow.className = "row time-block future";
      }
    }
  }

  function changeData () {
    const timeBlocks = document.querySelectorAll(".time-block");

    // GRADER PLEASE READ
    // is there a better way to do the for loop below? 
    //I feel like there is but I can't seem to figure out how it should be
    for (i = 0; i < 9; i++) {
      const textarea = timeBlocks[i].querySelector("textarea");
      const saveBtn = timeBlocks[i].querySelector("button");
      const hour = timeBlocks[i].id;

      saveBtn.addEventListener("click", function() {
        localStorage.setItem(hour, textarea.value);
      });
    }
  }



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?





  //
  // TODO: Add code to display the current date in the header of the page.
  function currentDay (day) {
    const currentDay = document.getElementById("currentDay");

    currentDay.textContent = day.format("dddd")
  }

  currentDay(currentTime);
  changeTimeBlock(currentTime);
  changeData()
});
