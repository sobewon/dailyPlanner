
$(function () {
  var currentTime = dayjs(); //currently used in functions: currentDay,

  function changeTimeBlock (time) {
    var shortTime = time.format("HH");

    for (i=9; i <= 15; i++) {
      var curRowID = "hour-" + i
      const curRow = document.getElementById(curRowID);
      
      if (i < shortTime) {
        curRow.className = "row time-block past";
      }
      else if (i == shortTime) {
        curRow.className = "row time-block present";
      }
      else if (i > shortTime) {
        curRow.className = "row time-block future";
      }
    }
  }

  function saveData () {
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

  function loadData () {
    const timeBlocks = document.querySelectorAll(".time-block");

    for (i = 0; i < 9; i++) {
      const textarea = timeBlocks[i].querySelector("textarea");
      const hour = timeBlocks[i].id;
      textarea.textContent = localStorage.getItem(hour, textarea.value);
    }
  }

  function currentDay (day) {
    const currentDay = document.getElementById("currentDay");

    currentDay.textContent = day.format("dddd")
  }

  loadData()
  currentDay(currentTime);
  changeTimeBlock(currentTime);
  saveData()
});
