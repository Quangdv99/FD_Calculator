function calculateMaturityAmount () {
    //Get ipput values from the form elemnents
    const princple = parseFloat(document.getElementById("principle").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const tenure = parseFloat(document.getElementById("tenure").value);

    //Perform the Calulcation
    const maturityAmount = princple  +  (princple * interestRate *tenure) / 100;

    //Display the result
    document.getElementById("result").innerText =  `Maturity Amount : ${maturityAmount.toFixed(2)}` ;

}


//Attack event listening to the calculate Button
document.getElementById("calculateBtn").addEventListener('click', calculateMaturityAmount);
