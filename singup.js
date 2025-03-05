

  
let sub=()=>{
    

    let inpname=document.querySelector("#name").value
    let inpnum=document.querySelector("#number").value
    let inpemail=document.querySelector("#email").value
    let inppass=document.querySelector("#pass").value
    let inpcpass=document.querySelector("#cpass").value
    
    
    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnum")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")
    
    if(inpname ==""){
        errname.innerHTML="Please enter name"
        return false 
    }
    
    if (inpnum =="") {
     errnum.innerHTML = "Please enter phone number";
        return false
    }
    
    
    if (inpemail =="") {
        erremail.innerHTML = "Please enter EMAIL";
        return false
    }
    
    
    
    if (inppass =="") {
        errpass.innerHTML = "Please enter password ";
        return false
    }
    
    
    if (inpcpass =="") {
        errcpass.innerHTML = "Please enter confirm password";
        return false
    }
    
     localStorage.setItem("Name", inpname)

     localStorage.setItem("Number", inpnum)

     localStorage.setItem("Email",inpemail )

     localStorage.setItem("password", inppass)
     
     localStorage.setItem("password", inpcpass)

    location.href="locallogin.html"

return false

    }