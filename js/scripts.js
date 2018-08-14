$(document).ready(function() {

  $("#Survey").submit(function(event) {


    $("input:checkbox[name=question-work]:checked").each(function () {

    alert($(this).val());
    });
    $("input:checkbox[name=non-question-work]:checked").each(function () {

    alert($(this).val());
    });


    event.preventDefault();
  });
});
