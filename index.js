const btnEl = document.getElementById("calculate");
const billInput =document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalspan= document.getElementById("total");




function calculatetotal(){
   const billValue = billInput.value;
   const tipValue = tipInput.value;
   const totalValue = billValue *(1+tipValue/100);
   totalspan.innerText=totalValue;
}

btnEl.addEventListener("click",calculatetotal);