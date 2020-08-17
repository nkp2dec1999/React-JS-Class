function All()
{
    document.getElementById("img1").src = "images/sweet1.jpg";
    document.getElementById("img2").src = "images/cupcake1.jpg";
    document.getElementById("img3").src = "images/cake1.jpg";
    document.getElementById("img4").src = "images/doughnut1.jpg";
    document.querySelector("#item1").innerHTML="Sweet "; 
    document.querySelector("#item2").innerHTML="Cupcake"; 
    document.querySelector("#item3").innerHTML="Cake";
    document.querySelector("#item4").innerHTML="Doughnut"; 

}

function Cake()
{
    document.getElementById("img1").src = "images/cake1.jpg";
    document.getElementById("img2").src = "images/cake2.jpg";
    document.getElementById("img3").src = "images/cake3.jpg";
    document.getElementById("img4").src = "images/cake4.jpg";
    var name=document.querySelectorAll(".itemName");  
    name.forEach((x) => x.innerHTML="Cake"); 
}

function CupCake()
{
    document.getElementById("img1").src = "images/cupcake1.jpg";
    document.getElementById("img2").src = "images/cupcake2.jpg";
    document.getElementById("img3").src = "images/cupcake3.jpg";
    document.getElementById("img4").src = "images/cupcake4.jpg";
    var name=document.querySelectorAll(".itemName");  
    name.forEach((x) => x.innerHTML="Cupcake"); 
}
function Sweet()
{
    document.getElementById("img1").src = "images/sweet1.jpg";
    document.getElementById("img2").src = "images/sweet2.jpg";
    document.getElementById("img3").src = "images/sweet3.jpg";
    document.getElementById("img4").src = "images/sweet4.jpg";
    var name=document.querySelectorAll(".itemName");  
    name.forEach((x) => x.innerHTML="Sweet"); 
}

function Doughnut()
{
    document.getElementById("img1").src = "images/doughnut1.jpg";
    document.getElementById("img2").src = "images/doughnut2.jpg";
    document.getElementById("img3").src = "images/doughnut3.jpg";
    document.getElementById("img4").src = "images/doughnut4.jpg";
    var name=document.querySelectorAll(".itemName");  
    name.forEach((x) => x.innerHTML="Doughnut"); 
}

function Search(){
    var val= document.getElementById("data").value;
    switch (val.toLowerCase()) {
        case 'all':
            Allfn();
            break;
        case 'cake':
            Cakefn();
            break;
        case 'cupcake':
            CupCakefn();
            break;
        case 'sweet':
            Sweetfn();
            break;
        case 'doughnut':
            Doughnutfn();
            break;
        default: 
           alert("Either Item Is Not Available or Incorrect Input");
           document.getElementById("data").value="";
            break;
    }
}