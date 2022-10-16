document.querySelector("button").onclick = function () {
    console.log("fun working");
    emailid = document.querySelector("#email").value;
    console.log("emailid");
    password = document.querySelector("password").value;
    console.log(password);
    regemail =/^([A-Za-0-9])([A-Za-z0-9_\.]+)?[A-Za-z0-9])@(([A-Za-z0-9]([A-Za-z0-9\-]+)?[A-Za-z0-9])\.([A-Za-z]{2,})(\.[A-Za-z]{2,})?)$/
    regpass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#\.\.^]).{4,8}$/
    if (!regemailid.test.(emailid)) {
        errormsg = "invalid email id"

    }
    elseif(!regpass.test(password)){
        errormsg = "password is invalid"
    }
}
else {
    errormsg = "valid user"
}
innerHTML="checking"
setTimeout{function()(
document.querySelector(".para");
innerHTML=errormsg),2000}
///////////////////////////
document.querySelector("x2").onchange=function()
{
    console.log("checkbox working");
    console.log("this stands for current");
    ans=this.ariaChecked?text:'password';
    console.log(ans);
    document.querySelector("password");
    this.setAttribute('type';)
}