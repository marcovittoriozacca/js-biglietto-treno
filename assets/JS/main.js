let kmNumber, psgAge, fullPrice, discount20, discount40;
const priceForkm = 0.21;

function getValues(){
    kmNumber = document.getElementById("numeroKM").value;
    psgAge = document.getElementById("etaPsg").value;

    if ((kmNumber.length == 0 || psgAge.length == 0) || (kmNumber <= 0 || psgAge <= 0)){
        document.getElementById("error").innerHTML = "Compila tutti i campi correttamente!";
    }
    else{
        document.getElementById("error").innerHTML = null;
        fullPrice = kmNumber * priceForkm;
        fullPrice = fullPrice;
        
        if(psgAge < 18){
            discount20 = fullPrice * 20 / 100;
            discount20 = fullPrice - discount20;
            discount20 = discount20.toFixed(2);
            document.getElementById("finalPrice").innerHTML = `il prezzo del biglietto sarà di: ${discount20}€ <p>Al prezzo è stato applicato uno sconto del 20%! <p>`
        }
        else if (psgAge >= 65){
            discount40 = fullPrice * 40 / 100;
            discount40 = fullPrice - discount40;
            discount40 = discount40.toFixed(2);
            document.getElementById("finalPrice").innerHTML = `il prezzo del biglietto sarà di: ${discount40}€ <p>Al prezzo è stato applicato uno sconto del 40%! <p>`
        }
        else{
            fullPrice = fullPrice.toFixed(2);
            document.getElementById("finalPrice").innerHTML = `il prezzo del biglietto sarà di: ${fullPrice}€`
        }
    }


}

function resetAll(){
    kmNumber = document.getElementById("numeroKM").value = null;
    psgAge = document.getElementById("etaPsg").value = null;
    document.getElementById("error").innerHTML = null;
    document.getElementById("finalPrice").innerHTML = null;
}

// bottone per prendere i dati collegato alla funzione getValues()
let buttonValues = document.getElementById("submitValues");
buttonValues.addEventListener("click", getValues);

// bottone per resettare tutto collegato alla funzione reset()
let buttonReset = document.getElementById("reset-all");
buttonReset.addEventListener("click", resetAll);

