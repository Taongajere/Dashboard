document.getElementById("search_input").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("search_form").submit();
    }
  });