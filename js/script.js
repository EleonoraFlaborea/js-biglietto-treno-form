/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che la milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

bonus:
- Aggiungere il tasto annulla per riportare i campi al valore originale
- Usare una select per inserire l'età
- Stampare sul biglietto un numero di carrozza e un numero di biglietto casuali
Buon divertimento! */


//1: fare due imput per chiedere nome e cognome, e un button. Richiamali nella pagina
//2: fare p e richiamrli nella pagina
//3: recuperare gli imput dell'user e metterli nella pagina
//4: 






console.log('JS OK');

// recupero elemento in pagina
const inputName = document.getElementById('input-name');
const inputKms = document.getElementById('input-kms');
const button = document.getElementById('button');

const passengerName = document.getElementById('passenger-name')
const passengerDiscount = document.getElementById('passenger-discount')
const passengerSeat = document.getElementById('passenger-seat')
const passengerCode = document.getElementById('passenger-code')
const passengerPrice = document.getElementById('passenger-price')

const underage = document.getElementById('underage')
const adult = document.getElementById('adult')
const senior = document.getElementById('senior')



//
button.addEventListener('click', function() {
    //recupero il valore input nome
    const Name = inputName.value.trim();
    console.log(Name)
    //recupero il valore input cognome
    const Kms = inputKms.value.trim();
    console.log(Kms)
    //recupero il valore input age
    const age = underage.value.trim();
    console.log(age) 
   




    //inserisco nella p-name
    passengerName.innerText = inputName.value;  

    //inserisco nella p-discount
    passengerDiscount.innerText = inputKms.value;  

    //inserisco nella p-age
    underage.innerText = underage.value;  

});

