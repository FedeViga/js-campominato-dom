/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

// inizializzo elementi HTML
const buttonElement = document.querySelector("#play");
const gridElement = document.querySelector("#grid");

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


// al click del bottone genero una griglia N celle in base alla difficoltà
buttonElement.addEventListener('click', function() {

    console.clear();
    gridElement.innerHTML = "";
    const selectElement = document.querySelector("#select");
    let gridSize;

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

})
