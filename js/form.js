"use strict";

/* 
   Author: Angel Chey Ee Zia
   Date: 2 Aug 2022 
 
   Filename:   form.js     

   Use to create form interaction
*/


// email will only be required when viewer checked the mailMe? box
function getChecked() {

  if (document.getElementById('mailMe').checked) {
    document.getElementById("email").setAttribute("required", "");
    document.getElementById("emailID").innerHTML = "Email* :";

  }else{
    document.getElementById("email").removeAttribute("required", "");
    document.getElementById("emailID").innerHTML = "Email :";
  }
}

//alert when submiting form
function submitForm(){
  alert("Thank you for your feedback. All your response and information will be kept confidential.");
}




