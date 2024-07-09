/* 
---------------------------------------Instructions--------------------------------------------------------------

1. Creare un'array vuoto che conterrà cinque numeri generati casualmente
    >> Creare una funzioni che generi questi cinque numeri casuali e che li inserisca all'interno dell'array 
2. Mostrare i numeri sulla pagina
   >> Attraverso l'uso di un timer, i numeri, spariranno dopo 30 secondi.
3. Chiedere all'utente di inserire i numeri precedentemente scomparsi tramite prompt
    >> Raccogliere i dati inseriti dall'utente in un nuovo array 
       (l'obbiettivo è quello di scrivere esattamente gli stessi numeri)
4. Confrontare i numeri apparsi all'inizio con quelli inseriti dall'utente
5. Restituire in pagina quanti e quali numeri sono stati indovinati

---------------------------------------------------------------------------------------------------------------
*/

//Creo un array vuoto per i primi numeri
const numList = [];

//creo un array vuoto per i numeri inseriti dall'utente
const userNums = [];

//creo un array vuoto per i numeri indovinati
let guessed = [];

//Creo cinque numeri casuali e li inserisco in numList 
NumGen();
console.log(numList)

// Recupero elementi dal DOM
const numField = document.getElementById('first-target');
const result = document.getElementById('second-target');

//Mando a schermo i numeri generati casualmente
numField.append(numList)

//Faccio sparire i numeri precedentemente mandati a schermo .
setTimeout(function(){
 numField.remove(numList);
}, 5000);

//Faccio partire la richiesta di inserimento dei numeri un secondo dopo
setTimeout(function(){
    askfor()
    console.log(userNums)
},6000);

//Faccio partire la funzione che decreta il risultato
setTimeout(function(){
    decreting();
    console.log(guessed)
    result.append('hai indovinato i seguenti numeri = ' + guessed)
},7000);

//----------Functions----------------

//Creo una funzione che generi cinque numeri casuali unici e li inserisca dentro numList[]
function NumGen(){
    while (numList.length < 5){
        let uniqueNum = Math.floor(Math.random() *100 ) + 1;

        if (! numList.includes(uniqueNum)){
            numList.push(uniqueNum);
        }
    }
    return numList;
}

//creo una funzione che chieda cinque volte all'utente di inserire un numero e lo inserisca all'interno di userNums
function askfor(){
    while (userNums.length < 5){
        let userNumber = prompt('Inserisci qui i numeri uno alla volta');
        userNums.push(parseInt(userNumber));
    }
    return userNums;
}

//creo una funzione per confrontare i due array 
function decreting(){
    for (i = 0; i < numList.length; i++){
        if (numList.includes(userNums[i])){
            guessed.push(userNums[i])
        } 
    }
}