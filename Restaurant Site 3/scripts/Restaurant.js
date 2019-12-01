/*
    Name: Kevin Lehman
    Date Created: 11/25/2019
    Most recent revision: 11/31/2019
*/

$(document).ready(function() {
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000  // 2 seconds
});

function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["contactUs"].elements.length;
        loopCounter++) {
        if (document.forms["contactUs"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["contactUs"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    location.reload();

}

function validateItems() {
    clearErrors();
    var name = document.forms["contactUs"]["name"].value;
    var email = document.forms["contactUs"]["email"].value;
    var phone = document.forms["contactUs"]["phone"].value;
    if (name == "") {
        alert("Name must be filled out.");
        document.forms["contactUs"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contactUs"]["name"].focus();
        resetForm();
        return false;
    }
   if (email == "")  {
       alert("An email address must be provided.");
       document.forms["contactUs"]["email"]
          .parentElement.className = "form-group has-error"
       document.forms["contactUs"]["email"].focus();
       resetForm();
       return false;
   }
   if (phone == "") {
      alert("A contact number must be provided.");
      document.forms["contactUs"]["phone"].parentElement.className= "form-group has-error"
      document.forms["contactUs"]["phone"].focus();
      resetForm();
   }

   alert("Your contact information has been sent successfully!");

   return false;
}
