// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo con massimo due decimali.

let passeggeroEta, passeggeroKm, prezzoBiglietto;

passeggeroEta = parseInt(prompt("Quanti anni ha l'utente?"));

passeggeroKm = parseInt(prompt("Quanti km deve percorrere l'utente ")); 

prezzoBiglietto = parseFloat(0.21 * passeggeroKm)

if (passeggeroEta < 18){
    prezzoBiglietto = prezzoBiglietto - (0.2 * prezzoBiglietto)
}

else if (passeggeroEta > 65){
    prezzoBiglietto = prezzoBiglietto - (0.4 * prezzoBiglietto)
}

else{
    prezzoBiglietto = prezzoBiglietto
}

document.getElementById("price").innerHTML = `${prezzoBiglietto.toFixed(2)} € `