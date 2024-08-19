/* 

CARS

- app.init - Forklaring:
    -  'app' er et objekt, 'init' er en funktion - når den køres til sidst, kører vi funktionen

- Byg array med et object for hver bil - carData
- Opret container variabel
- Opret en template function - carTmpl()

- Loop igennem array med forEach
- for hvert element i array'et skal carTmpl() udskrives
- Erstat innerHTML med insertAdjacentHTML('beforeend', ... )

 */

 let carData = [
    {
        "brand": "Toyota",
        "model": "Yaris",
        "year": 1995,
        "color": "yellow"
    },
    {
        "brand": "Skoda",
        "model": "Octavia",
        "year": 2019,
        "color": "Silver Grey"
    },
    {
        "brand": "Fiat",
        "model": "Panda",
        "year": 2008,
        "color": "White"
    }
]

const app = {};

app.init = () => {


    const carContainer = document.querySelector('.car-container');
    
    
    const carTmpl = (car) => 
        `<div> 
            <p><b>Mærke: </b>${car.brand}</p>
            <p><b>Model: </b>${car.model}</p>
            <p><b>Årgang: </b>${car.year}</p>
            <p><b>Farve: </b>${car.color}</p> 
            <br>
        </div>`;
    
    
    carData.forEach(car => {
    
            carContainer.innerHTML += carTmpl(car);
            /* carContainer.insertAdjacentHTML('beforeend', carTmpl(car)); */
    
    
    })   
    



} /* slut på app.init function */

app.init(); // Kører functionen