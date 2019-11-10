// Logic for Api goes in this file only
$(function() {
    $(".change-hunger").on("click", function(event) {
      var id = $(this).data("id");
      var newhunger = $(this).data("newhunger");
  
      var newhungryState = {
        hungry: newhunger
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newhungryState
      }).then(
        function() {
          console.log("changed hungry to", newhunger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newburger = {
        name: $("#ca").val().trim(),
        hungry: $("[name=hungry]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  