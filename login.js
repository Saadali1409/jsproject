// VANTA.GLOBE({
//     el: "#doctor",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00
//   })

  let sub=()=>{
    let inpname=document.querySelector("#name").value
    let inppass=document.querySelector("#pass").value


    let errname=document.querySelector("#errname")
    let errpass=document.querySelector("#errpass")

    if(inpname ==""){
        errname.innerHTML="Please enter name"
        return false 
    }
    
    if (inppass =="") {
        errpass.innerHTML = "Please enter Password";
        return false
    }



    localStorage.setItem("Name", inpname)
    localStorage.setItem("Password", inppass)

    location.href="index.html"

    return false
    
        }