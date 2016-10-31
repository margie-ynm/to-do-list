// Business logic
function Task(task, things, time) {
  this.taskName = task;
  this.thingsName = things;
  this.timeName = time;
}


//User interface
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTaskName = $("input#new-task-name").val();
    var inputtedThingsName = $("input#new-things-name").val();
    var inputtedTimeName = $("input#new-time-name").val();

    var newTask = new Task(inputtedTaskName, inputtedThingsName, inputtedTimeName);

    $("ul#tasks").append("<li><span class='stuff'>" + newTask.taskName + "</span></li>");

    $(".stuff").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.taskName);
      $(".task-name").text(newTask.taskName);
      $(".things-name").text(newTask.thingsName);
      $(".time-name").text(newTask.timeName);
    });

    $(".form-control").val("");
  });
});
