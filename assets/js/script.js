$(function () {
  var getDate = dayjs()
  var currentHour = getDate.format('H')

  $("#currentDay").text(getDate.format('dddd, MMMM D'))

  console.log(currentHour)

  for (let i = 9; i <= 17; i++) {
    var hourBlockDiv = $("#"+i);

    console.log(hourBlockDiv)
    if (i < currentHour) {
      hourBlockDiv.addClass('past')
      hourBlockDiv.removeClass('present')
      hourBlockDiv.removeClass('present')
    } else if (i === currentHour) {
      hourBlockDiv.removeClass('past')
      hourBlockDiv.addClass('present')
      hourBlockDiv.removeClass('future')
    } else {
      hourBlockDiv.removeClass('past')
      hourBlockDiv.removeClass('present')
      hourBlockDiv.addClass('future')
    }
  } 
  
  $(".saveBtn").on("click", function() {
    var description = $(this).siblings(".description").val();
    var timeBlockId = $(this).parent().attr("id");

    localStorage.setItem(timeBlockId, description);
  });
  

});
