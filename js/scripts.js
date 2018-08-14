$(document).ready(function() {

  $("#Survey").submit(function(event) {

    var bad = 0;
    var good = 0;
    $("input:checkbox[name=question-warning]:checked").each(function () {
      bad += parseInt($(this).val());
    });
    $("input:checkbox[name=question-symptoms]:checked").each(function () {
      bad += parseInt($(this).val());
    });
    $("input:checkbox[name=question-relief]:checked").each(function () {
      good += parseInt($(this).val());
    });
    alert("good " + good + " bad:" + bad);
    var difference = good - bad;
    if (difference >= 3) {
      $("#output").text("You are going to live another 10+ years");
    } else if (difference >= 0) {
      $("#output").text("You are doing really well");
    } else if (difference === 0) {
      $("#output").text("Maybe you can work on some stress management techniques");
    } else if (difference === -1) {
      $("#output").text("Try harder to be lessed stressed.");
    } else if (difference >= -4) {
      $("#output").text("You need to go to the gym, badly");
    } else {
      $("#output").text("You only have 2 months to live.");
    }

    $("#result").show();
    $("#Survey").hide();
    event.preventDefault();
  });
});
