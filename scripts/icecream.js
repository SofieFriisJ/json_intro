/* 

1. ICECREAM
- Byg array med et object for hver is - icecreamData
- Opret container variabel
- Loop igennem array med forEach


*/



let icecreamData = [
    {
        "name": "isbjørn",
        "brand": "Premier is",
        "taste": "Vanilje/Jordbær",
        "type": "Flødeis"

    },
    {
        "name": "Magnum",
        "brand": "Frisko",
        "taste": "Chokolade/Vanilje",
        "type": "Flødeis"
    },
    {
        "name": "Filur",
        "brand": "Frisko",
        "taste": "Appelsin/Hindbær",
        "type": "Sodavandsis"
    }

];



const icecreamContainer = document.querySelector('.icecream-container');

icecreamData.forEach(icecream => {
    icecreamContainer.innerHTML +=
    `<div> 
        <p><b>Navn: </b>${icecream.name}</p>
        <p><b>Fabrikant: </b>${icecream.brand}</p>
        <p><b>Smag: </b>${icecream.taste}</p>
        <p><b>Type: </b>${icecream.type}</p>
        <br>
    </div>`;

})

