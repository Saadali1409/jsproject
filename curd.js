let fetchData= async()=>{
    
    let url="http://localhost:3000/hotel"

    let res= await fetch(url,{method:"GET"})

    let data= await res.json()

    console.log(data);


    let display=document.querySelector("#display")
    data.map( (e)=> {

        display.innerHTML +=`

        <tbody>
        <td> ${e.name} </td>
        <td> ${e.age} </td>
        <td> ${e.city} </td>
        <td> ${e.adharno} </td>
        <td> ${e.number} </td>
        <td> ${e.person} </td>
        <td> ${e.delete} </td>
        <td> ${e.update} </td>
        <td> ${e.price*e.person} </td>
        <td onclick="deletee('${e.id}')">Delete </td>
        </tbody>

        `


    })


}

// fetchData()
let deletee=(id)=>{
    let url=`http://localhost:3000/hotel/${id}`
    fetch(url,{method:"DELETE"})
 

};
// data();
let userInput=()=>{
    let inpname=document.querySelector("#name").value
 let inpnumber=document.querySelector("#number").value
let inpperson=document.querySelector("#Person").value
let inpage=document.querySelector("#age").value
let inpcity=document.querySelector("#city").value
let inpaadhar=document.querySelector("#aadhar").value
let url="http://localhost:3000/hotel"
fetch(url,{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        name:inpname,
        contact:inpnumber,
        person:inpperson,
        age:inpage,
        city:inpcity,
        aadhar:inpaadhar,
        price:5000
    })
})
location.href='./curd.html';
return false
}
