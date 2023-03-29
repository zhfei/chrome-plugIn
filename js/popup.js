$(document).ready(function(){
  var total = $("#total").text();
  chrome.storage.sync.get('total',function (res) {
    $("#total").text(res.total);
    total = res.total;
  })
  
  $('#add').click(function () {
    var msg = $("#msg").val();
    var totalCount = 0;
    if (msg && total) {
      totalCount += parseFloat(msg);
      totalCount += parseFloat(total);
    } else if (msg) {
      totalCount += parseFloat(msg);
    }

    chrome.storage.sync.set({'total': totalCount});

    $("#total").text(totalCount);
    $("#msg").val('');

    console.log(totalCount)
  })
});