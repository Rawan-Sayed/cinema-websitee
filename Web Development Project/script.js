var user_mail;
var user_pass;
var storedmail;
var storedpass;
var admin_mail = "admin_team@gmail.com";
var admin_pass ="ERROR404";

function check_info(){
    var  firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    user_mail = document.getElementById("newmail").value;
    user_pass = document.getElementById("newpass").value;
    var confirm_pass =document.getElementById("confirmpass").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var phone = document.getElementById("phone").value;

    if (firstname==""||lastname==""||user_mail==""){

        alert("please enter full information needed.");
    

    }else if(user_mail.indexOf("@")==-1 || user_mail.indexOf(".")==-1|| user_mail.indexOf(" ")!=-1){

            alert("please enter full account information correctly.");
        
            
    }else if(user_pass.length<8||user_pass.value==" "){
        
        alert("password must contain at least 8 characters.");
    

    }else if(confirm_pass!==user_pass){

        alert("please renter your password correctly.");


    }else if(!male&&!female || male&&female){

        alert("choose one gender.");

    }else if(phone ==""){

        alert("please enter phone number");

    }else{
        
        localStorage.setItem("sendm",user_mail);
        localStorage.setItem("sendp",user_pass);
        alert("all done saved!");
        window.location.href="login.html";
    }
   
}

function pass_info(){

    alert("password is recommended to include upper and lower case characters,numbers,special characters ex:@, _ ,$,etc. ");
    console.log(localStorage);
}

function takedata(){

    storedmail=localStorage.getItem("sendm");
    storedpass=localStorage.getItem("sendp");
}

function check() {

    if (document.getElementById("mail").value == storedmail && document.getElementById("pw").value == storedpass) {
        alert("you are now signed in");
        window.location.href = "Home2.html";

    } else if (document.getElementById("mail").value == "admin_team@gmail.com" && document.getElementById("pw").value == "ERROR404") {
        alert("welcome admin");
        window.location.href="Admin_Page.html";
    } else {
        alert("incorrect email or password");
    }
}

function checkradio2(){
    
    if(document.getElementById("male").checked==true){
        document.getElementById("male").checked=false;
    }
   
}
function checkradio2(){
    
    if(document.getElementById("female").checked==true){
        document.getElementById("female").checked=false;
    }
   
}