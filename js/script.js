// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
// da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// stabilire le costanti 
const numberShow = document.querySelector('#number');
const goBtn = document.querySelector('#start-button')
const correctNumber = [];

goBtn.addEventListener("click", function() {
    const userNumberArray = [];
    // creare in maniera random un array di 5 numeri da visulizzare nel DOM
    const randArray = generateRandom(5, 1 , 20);
    console.log(randArray);
    numberShow.innerHTML = randArray.join(" ");

    // impostare un timer di 30 secondi per la visulizzazione 
    setTimeout(() => numberShow.innerHTML = '', 3000);

    setTimeout(() => {

         // chiedere all'utente di inserire i 5 numeri singolarmente 
         console.log(userNumberArray);
        for (let i = 0; i < randArray.length; i++ ) {
            const userNumber = parseInt(prompt('inserire i numeri singolarmente'));
            userNumberArray.push(userNumber);

            // controllare se i numeri corrispondono o meno 
            if (userNumberArray.includes(randArray)) {
                correctNumber.push(userNumberArray);
                console.log(correctNumber);
                alert("corrisponde")
            }
        };

        alert(`Hai indovinato ${correctNumber.length} numeri: ${correctNumber}`); 

    }, 3100);
    

    // stampare il risultato 

});

// function
function generateRandom(arrayLength, numMin, numMax) {

    // numeri all'interno di un'arrey 
    const generateRandom = [];

    while(generateRandom.length < arrayLength) {
        const randomNum = getRndInteger(numMin, numMax);
        if (!generateRandom.includes(randomNum)) {
            generateRandom.push(randomNum);
        }
    }
    return generateRandom;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

