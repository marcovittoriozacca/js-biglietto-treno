let kmNumber, psgAge, fullPrice, discount20, discount40;
const priceForkm = 0.21;

function getValues(){
    kmNumber = document.getElementById("numeroKM").value;
    psgAge = document.getElementById("etaPsg").value;

    if (kmNumber.length == 0 || psgAge.length == 0){
        document.getElementById("error").innerHTML = "Compila tutti i campi!";
    }
    else{
        document.getElementById("error").innerHTML = null;
        fullPrice = kmNumber * priceForkm;        
        console.log(`Il prezzo intero del biglietto è ${fullPrice}€`);
    }


}


function resetAll(){
    kmNumber = document.getElementById("numeroKM").value = null;
    psgAge = document.getElementById("etaPsg").value = null;
    document.getElementById("error").innerHTML = null;
}

// bottone per prendere i dati collegato alla funzione getValues()
let buttonValues = document.getElementById("submitValues");
buttonValues.addEventListener("click", getValues);

// bottone per resettare tutto collegato alla funzione reset()
let buttonReset = document.getElementById("reset-all");
buttonReset.addEventListener("click", resetAll);

