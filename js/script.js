// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


let kilometres = parseInt(prompt('I chilometri che vuoi percorrere sono?'));
let age = parseInt(prompt('quanti anni hai?'));
if(age <= 17){
    let priceTotal = Math.round((0.21 * kilometres) * 0.20 * 100) / 100;
    console.log('Il prezzo totale è:' , priceTotal + '€');
} else if(age >= 65) {
    let priceTotal = Math.round((0.21 * kilometres) * 0.40 * 100) / 100;
    console.log('Il prezzo totale è:' , priceTotal + '€');
}
else {
    let priceTotal = Math.round(kilometres * 0.21 * 100) / 100;
    console.log('Il prezzo totale è:' , priceTotal + '€');
}