$(document).ready(function () {
 $("input[type=checkbox]").click(function () {
   const list = [];
   const id = [];
   $("input[type=checkbox]:checked").each(function () {
     list.push($(this).attr("data-name"));
     id.push($(this).attr("data-id));
   });
   if (list.length == 0) {
     $(".amenities h4").html("&nhsp;");
   }
   console.log(id);
 });
});
