/*
-Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere 
- l'età del passeggero.
-Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
-L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
-quanti km
-eta utente
-0.21 per km
-sconto eta 

*/

let distance = parseInt (prompt('Quanti km devi percorrere?'));
let age =  parseInt (prompt('Quanti anni hai?'));
let costKm = distance * 0.21;
let sale;


// console.log(costKm)

if(age < 18){
     sale = (costKm / 100 * 80);

}else if(age > 65){
     sale = (costKm / 100 * 60);

}else{
    sale=costKm
}

let totalCost = sale.toFixed(2)

// console.log(totalCost)

document.writeln(`
Tratta da percorrere: ${distance} km <br>
Eta del passeggero: ${age} anni <br>
Costo del biglietto: ${totalCost} €
`)

