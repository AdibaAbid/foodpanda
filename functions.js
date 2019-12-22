function togglefunction( ) {
let button = document.getElementById("hidden");
  var showDiv = document.getElementById("show");

  if (showDiv.style.display === "none") {
    showDiv.style.display = "block";
    button.innerHTML = "Hide";
    button.style.backgroundColor ="#ddd";
  }
  else {
  showDiv.style.display = "none";
    button.innerHTML = "Click Here To Read More";
    button.style.backgroundColor = null;
    
  }

}
