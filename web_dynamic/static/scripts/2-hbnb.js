$(document).ready(function () {
    $("input[type=checkbox]").click(function () {
      const list = [];
      const id = [];
      $("input[type=checkbox]:checked").each(function () {
        list.push($(this).attr("data-name"));
        id.push($(this).attr("data-id"));
      });
      if (list.length == 0) {
        $(".amenities h4").html("&nhsp;");
      }
      console.log(id);
    });
});
    $.get("http://0.0.0.0:5001/api/v1/status/", function(data) {
      if (data == "OK")
        $("div#api_status").addClass(".available")
      else if (data != "OK" && $("div#api_status").hasClass("available"))
        $("div#api_status").removeClass(".available");
    });
