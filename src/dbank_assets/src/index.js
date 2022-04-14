import {dbank} from "../../declarations/dbank";

window.addEventListener("load", async ()=>{
  // console.log("finseh lo");
  const currentAmount =await dbank.checkBalance();
  document.getElementById("value").innerText = currentAmount.toFixed(2);
});

document.querySelector("form").addEventListener("submit", async (event)=>{
  // console.log("Submited");
  const inputAmount =parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdraw-amount").value);


  await dbank.topUp(inputAmount);
  const currentAmount =await dbank.checkBalance();
  document.getElementById("value").innerText = currentAmount.toFixed(2);
})