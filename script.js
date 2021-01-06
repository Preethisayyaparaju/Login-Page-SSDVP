function validateForm()
{
    var username=document.getElementById("email");
    var password=document.getElementById("Password");
    if(email.value=="Preethi" && Password.value=="Preethi@123"){
        return true;
        
    }
    else{
        alert("Wrong id or password");
        return false;
    }
}