function submit(){
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var contact=document.getElementById("contact").value;
    var password=document.getElementById("password").value;
    var cnfmpsswd=document.getElementById("cnfmpsswd").value;
    
    
      var usernameCheck= /^[A-Z][a-z]*\s[A-Z][a-z]*$/;
      var emailCheck=/^[a-z]+[0-9._]+[a-z0-9]*[@][a-z]*[.][a-z]*/;
      var contactCheck=/^[6789][0-9]{9}$/
      var passwordCheck=/^[A-Za-z0-9!@#$%^&*_]*$/
   //username
   if(username==""){
    alert("username is *Required to fill");
   return false;
   }
   else if(!/^[A-Z][a-z]*\s[A-Z][a-z]*$/.test(username)){
      alert("Enter first letter capital for name and surname with space b/w name and surname & special characters aren't allowed!")
      return false;
   }

   //email
   if(email==""){
      alert("**Compulsory to fill this email field!")
      return false;
   }
else if(!/^[a-z]+[0-9._]+[a-z0-9]*[@][a-z]*[.][a-z]*/.test(email)){
   alert("your input should be matched from the given email credentials!");
   return false;
}
   //contact
   if(contact==""){
      alert("**Required to filling the contact");
      return false;
     }
     else if(!/^[6789][0-9]{9}$/.test(contact)){
        alert("Contact no. should be starts with digit 6,7,8,9 without whitespaces! & maximum digit should be 10")
        return false;
     }

   //Password
   if(password==""){
      alert("**Required to filling the password");
      return false;
     }
   else if(!/^[A-Za-z0-9!@#$%^&*_]*$/.test(password)){
        alert("**password can't have any whitespaces!")
        return false;
     }
   //confirm password
   if(cnfmpsswd==""){
      alert("** Required to fill this field!")
      return false;
   }
   else if(cnfmpsswd!=password){
      alert("cnfmpsswd should be equals to password")
      return false;
   }
   alert("Submitted your given details successfully!")
   return true;
}

function Clear(){
   document.getElementById("username").value= "";
   document.getElementById("email").value= "";
   document.getElementById("contact").value= "";
   document.getElementById("password").value= "";
   document.getElementById("cnfmpsswd").value= "";
   // document.getElementById("gender").value= "";
   console.log("hello");
}

