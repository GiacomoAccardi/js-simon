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
const userNum = [];

//Creo cinque numeri casuali e li inserisco in numList 
NumGen();
console.log(numList)

// Recupero elementi dal DOM
const numField = document.getElementById('first-target');

//Mando a schermo i numeri generati casualmente
numField.append(numList)

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