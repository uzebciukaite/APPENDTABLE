"use strict"

let vardas = document.getElementById("vardas")
let pavarde = document.getElementById("pavarde")
let amzius = document.getElementById("amzius")
var forma = document.querySelector("form")



var prideti = document.getElementById("prideti")
var deleteFirst = document.getElementById("delete-first")
var deleteLast = document.getElementById("delete-last")

//sukurti funkcija, kad "prideti mygtukas" priimtu duomenis
   
forma.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(vardas.value, pavarde.value, amzius.value)
    amzius.value = Number(amzius.value)
    console.log(pavarde.value, vardas.value, amzius.value)
    
if (vardas.value == "" || pavarde.value == "" || amzius.value == ""){ alert ("Please fill in all fields")
}  else if (amzius.value <=0  || isNaN(amzius.value) ){
alert("Incorrect age")
}
else {
    var table = document.getElementById("table");
    var newRow = table.insertRow();
    var vardasData = newRow.insertCell(0);
    var pavardeData = newRow.insertCell(1);
    var amziusData = newRow.insertCell(2);
    vardasData.innerText = vardas.value
    pavardeData.innerText = pavarde.value
    amziusData.innerText = amzius.value
    vardas.value = ""
    pavarde.value = ""
    amzius.value = ""
}

})

deleteLast.addEventListener("click", function(){
    if(table.rows[1]){
table.deleteRow(-1)
    }
    deleteLast.disabled = true

    deleteLast.disabled = false
   
})

deleteFirst.addEventListener("click", function(){
    if(table.rows[1]){
table.deleteRow(1)
    }
    deleteFirst.disabled = true
    
    deleteFirst.disabled = false
    
})

function amziusCheck (){

  amzius= Number(amzius)
if (amzius <= 0){
    alert("blogai")
}
}