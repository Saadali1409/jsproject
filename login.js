//   let login=()=>{
//     let inpname=document.querySelector("#inpname").value
//     let inppass=document.querySelector("#inppass").value


//     let errname=document.querySelector("#errname")
//     let errpass=document.querySelector("#errpass")

//     if(inpname ==""){
//         errname.innerHTML="Please enter name"
//         return false 
//     }
    
//     if (inppass =="") {
//         errpass.innerHTML = "Please enter Password";
//         return false
//     }



//     localStorage.setItem("Name", inpname)
//     localStorage.setItem("Password", inppass)

//     location.href="index.html"

//     return false
    
//         }




let login = () => {
    let loginemail = document.querySelector("#loginname").value
    let loginpasss = document.querySelector("#loginpass").value
    console.log(loginpasss);
    
    let localname = localStorage.getItem("Name");
    let localpasss = localStorage.getItem("Pass");
      console.log("pass",localpasss);

      
    // if (!localemail || !localpass) {
    //     alert("No account found. Please register first.");
    //     return;
    // }

    if (loginname==localname && localpasss==loginpasss) {
        location.href = "/index.html";
    } else {
        alert("Invalid Name or Password");
    }
  return false
}