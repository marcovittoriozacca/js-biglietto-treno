// Dichiarazione variabili e costanti
let kmNumber, psgAge, fullPrice, discount20, discount40;
const priceForkm = 0.21;

// Funzione che permette di prendere i valori numerici dai campi di input
function getValues(){

    // Asseggnazione dei valori contenuti nei campi numerici alle variabili
    kmNumber = document.getElementById("numeroKM").value;
    psgAge = document.getElementById("etaPsg").value;

    /* Controllo sui valori.
    Se i campi sono vuoti o se i valori sono uguali o inferiori a zero, la funzione darà esito negativo */
    if ((kmNumber.length == 0 || psgAge.length == 0) || (kmNumber <= 0 || psgAge <= 0)){
        // Cambio della classe d-none a d-flex per mostrare il messaggio di errore
        let classFlex = document.querySelector("#classChange");
        classFlex.classList.replace("d-none","d-flex");
        document.getElementById("result").innerHTML = '<p class="text-danger">Compila tutti i campi correttamente!</p>';
    }
    else{
        document.getElementById("result").innerHTML = null;
        // Calcolo del prezzo pieno del biglietto
        fullPrice = kmNumber * priceForkm;
        fullPrice = fullPrice;
        
        // Controllo sull'età inserità dall'utente per applicare eventuali sconti
        if(psgAge < 18){
            discount20 = fullPrice * 20 / 100;
            discount20 = fullPrice - discount20;
            discount20 = discount20.toFixed(2);
            let classFlex = document.querySelector("#classChange");
            classFlex.classList.replace("d-none","d-flex");
            document.getElementById("result").innerHTML = `<p>Prezzo biglietto: <span class="text-lime h5">${discount20}€</span></p><div class="opacity-50"><p>Al prezzo è stato applicato uno sconto del <span class="text-lime">20%</span></p><p>Prezzo originale: <span class="text-danger">${fullPrice.toFixed(2)}€</span></p>`
        }
        else if (psgAge >= 65){
            discount40 = fullPrice * 40 / 100;
            discount40 = fullPrice - discount40;
            discount40 = discount40.toFixed(2);
            let classFlex = document.querySelector("#classChange");
            classFlex.classList.replace("d-none","d-flex");
            document.getElementById("result").innerHTML = `<p>Prezzo biglietto: <span class="text-lime h5">${discount40}€</span></p><div class="opacity-50"><p>Al prezzo è stato applicato uno sconto del <span class="text-lime">40%</span></p><p>Prezzo originale: <span class="text-danger">${fullPrice.toFixed(2)}€</span></p>`
        }
        else{
            fullPrice = fullPrice.toFixed(2);
            let classFlex = document.querySelector("#classChange");
            classFlex.classList.replace("d-none","d-flex");
            document.getElementById("result").innerHTML = `<p>Prezzo biglietto: <span class="text-lime h5">${fullPrice}€</span></p><p class="opacity-50">Purtroppo non è previsto nessuno sconto al momento!</p>`
        }
    }
}
// Resetta ogni elemento per riportare la pagina allo stato iniziale
function resetAll(){
    kmNumber = document.getElementById("numeroKM").value = null;
    psgAge = document.getElementById("etaPsg").value = null;
    document.getElementById("result").innerHTML = null;
    let classFlex = document.querySelector("#classChange");
    classFlex.classList.replace("d-flex","d-none");
}

// bottone per prendere i dati collegato alla funzione getValues()
let buttonValues = document.getElementById("submitValues");
buttonValues.addEventListener("click", getValues);

// bottone per resettare tutto collegato alla funzione reset()
let buttonReset = document.getElementById("reset-all");
buttonReset.addEventListener("click", resetAll);

