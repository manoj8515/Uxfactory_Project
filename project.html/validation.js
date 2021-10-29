function validation(){
     let password=document.myform.user_password.value;
     let cpassword=document.myform.confirm_password.value;
     if(password.length<6){
         alert("password must contain 6 characters");
         return false;
     }
     if(password===cpassword){
        return true;
     }
     else{
        alert("password and confirm password must be the same");
        return false;
     }
}
function validation(){
    let username= document.myform.user_name.value;
    if(username=="Null" || username==" "){
        alert("please provide correct input");
        return false;
    }
}
function validation(){
    let mobile=document.myform.user_number.value;
    if(mobile.length===10){
        return true;
    }
    else {
        alert("mobile number must be 10 numbers");
    }

}
