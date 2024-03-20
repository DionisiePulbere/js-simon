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

goBtn.addEventListener("click", function() {
    // creare in maniera random un array di 5 numeri da visulizzare nel DOM
    const randArray = generateRandom(5, 1 , 20);
    numberShow.innerHTML = randArray.join(" ");
    console.log(randArray);

    // impostare un timer di 30 secondi dopo i quali viene pulito il DOM
    setTimeout(() => numberShow.innerHTML = '', 30000);

    setTimeout(() =>{
        //array di numeri azzeccati 
        const correctNumber = [];
        // chiedere all'utente di inserire i 5 numeri singolarmente 
        for (let i = 0; i < 5; i++ ) {
            const userNumber = parseInt(prompt('inserire i numeri singolarmente'));
            // userNumberArray.push(userNumber);

            // controllare se i numeri corrispondono o meno 
            if (randArray.includes(userNumber) && !correctNumber.includes(userNumber)) {
                correctNumber.push(userNumber);
            }
        };

        console.log(`Hai indovinato ${correctNumber.length} numeri: ${correctNumber}`); 
    }   
    , 31000);
});

// FUNCTIONS
function generateRandom(arrayLength, numMin, numMax) {
    // numeri all'interno di un'arrey 
    const generateRandom = [];
    // controllo che non ci siano altri numeri uguali 
    while(generateRandom.length < arrayLength) {
        const randomNum = getRndInteger(numMin, numMax);
        if (!generateRandom.includes(randomNum)) {
            generateRandom.push(randomNum);
        }
    }
    return generateRandom;
}
// funzione per generare numeri x casuali da un min a un max 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

