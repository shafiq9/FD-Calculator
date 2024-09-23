
function calculateMaturityAmount(){
    //Get input values from the form element
    const principle = parseFloat(document.getElementById("principle").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const tenure = parseFloat(document.getElementById("tenure").value);
    
    //Perform the calculation
    const maturityAmount = principle*(principle*interestRate*tenure)/100;

    //Display result
    document.getElementById("result").innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

//Attach the event listener to the calculate button
document.getElementById("calculateBtn").addEventListener("click", calculateMaturityAmount);