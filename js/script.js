/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco 
(attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali e inserirli in un array, in base al range della difficoltà prescelta 
(se abbiamo scelto facile l'array conterrà numeri casuali da 1 a 100, se invece abbiamo scelto difficile l'array dovrà contenerne da 1 a 49): questi rappreseranno le posizioni delle nostre bombe :bomba:.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
BONUS 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
*/

// inizializzo elementi HTML
const buttonElement = document.querySelector("#play");
const gridElement = document.querySelector("#grid");
let gridSize = 0;

// creo funzione che genera un numero diverso di caselle in base alla difficoltà scelta dall'utente
function gridGenerator(number) {
    for (let i = 0; i < number; i++) {
        const squareElement = document.createElement("div");
        squareElement.classList.add("square");

        // in base alla grandezza della griglia cambio la grandezza degli square
        if (number == 49) {
            squareElement.classList.add("square-7");
        } else if (number == 81) {
            squareElement.classList.add("square-9");
        } else if (number == 100) {
            squareElement.classList.add("square-10");
        }

        // all'interno di ogni square aggiungo il numero di quello square
        squareElement.innerText = i + 1;

        // al click il quadrato cambia colore, cliccando di nuovo torna del colore originale
        squareElement.addEventListener('click', function() {

            this.classList.add("active");
            console.log(this.innerText);
        })

        // aggiungo lo square alla griglia
        gridElement.append(squareElement);
    }
    return gridElement;
}



// creo funzione che genera un array di arrayLength numeri casuali da 1 a 16 tutti diversi tra loro
function randomNumbersArray(max) {
    const numbersArray = [];

    while (numbersArray.length < 16) {
        const RandomNumber = Math.floor(Math.random() * max + 1);
         if (! numbersArray.includes(RandomNumber)) {
            numbersArray.push(RandomNumber);
         }
    }
    return numbersArray;
}


// al click del bottone genero una griglia N celle in base alla difficoltà
buttonElement.addEventListener('click', function() {

    console.clear();
    gridElement.innerHTML = "";
    const selectElement = document.querySelector("#select");

    if (selectElement.value == 0) {
        const addDifficulty = document.createElement("h2");
        addDifficulty.innerHTML = "Scegli la Difficoltà per giocare"
        gridElement.append(addDifficulty);

    } else {

        // livello facile
        if (selectElement.value == 3) {
            gridSize = 49;
            gridElement.classList.add("w-700");
            gridElement.classList.remove("w-900");
            gridElement.classList.remove("w-1000");
    
        // livello normale 
        } else if (selectElement.value == 2) {
            gridSize = 81;
            gridElement.classList.remove("w-700");
            gridElement.classList.add("w-900");
            gridElement.classList.remove("w-1000");
    
        // livello difficile  
        } else if (selectElement.value == 1) {
            gridSize = 100;
            gridElement.classList.remove("w-700");
            gridElement.classList.remove("w-900");
            gridElement.classList.add("w-1000");
        }
    
        gridGenerator(gridSize);
        console.log(randomNumbersArray(gridSize));
    }


})
