$(document).ready(function(){
  var title = $("#title").text();
  $("#msg").keyup(function () {
    var msg = $("#msg").val();
    $("#title").text(title+":"+msg);
  })
});