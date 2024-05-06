$(document).ready(function (){
    $.post("http://0.0.0.0:5001/api/v1/places_search/", 
        {},
        function(data) {
          let places = data;
          console.log(data);
          $.each(places, function(value) {
                $("section.places").textContent("<article>"
                    + value["name"] + "</article>"
                )
          }) 
        },
        "json")
})