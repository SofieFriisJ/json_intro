/* 

DOGS

- Opret container variabel
- Opret JSON fil
- Opret template function
- fetch (forklar fetch og promise)
- Loop over med forEach

*/




/* Objekt - da init arbejder med objekter */
const app = {};

app.init = () => {

    const dogContainer = document.querySelector('.dog-container');

    const dogTmpl = (dog) => 
        `<div> 
            <p><b>Navn: </b>${dog.name}</p>
            <p><b>Race: </b>${dog.type}</p>
            <p><b>Alder: </b>${dog.age} år</p>
            <p><b>Farve: </b>${dog.color}</p> 
            <br>
        </div>`;



    /* Henter data fra json filen, så det kan bruges i denne fil */
    fetch('../data/dogs.json').then(response => response.json()).then(dogdata => {
        
            dogdata.forEach(dog => {

                dogContainer.insertAdjacentHTML('beforeend', dogTmpl(dog));

            });
    } )


} /* slut på app.init function */

app.init(); // Kører functionen