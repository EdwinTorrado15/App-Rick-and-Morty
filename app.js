//Vamos a consumir una api de Rick and Morty
const url = 'https://rickandmortyapi.com/api/character';

const app = document.querySelector('#app');
app.className = 'row'

//Consumimos la api
window
.fetch(url)
.then(respuesta => respuesta.json())
.then(responseJSON => {
    const personajes = [];
    responseJSON.results.forEach(item => {

        //Creamos la imagen
        const imagen = document.createElement('img');
        imagen.src = item.image;
        imagen.className = 'card-img-top';

        //Creamos el estado
        const estado = document.createElement('p');
        estado.textContent = item.status;

        //Creamos el nombre
        const nombre = document.createElement('h3');
        nombre.textContent = item.name;

        //Creamos la especie
        const especie = document.createElement('p');
        especie.textContent = item.species;

        //Creamos el genero
        const genero = document.createElement('p');
        genero.textContent = item.gender;

        // Creamos el origen
        const origen = document.createElement('p');
        origen.textContent = item.origin.name;
        origen.className = "origen";

        //Creamos el cuerpo de la carta
        const atributos = document.createElement('div')
        atributos.appendChild(nombre);
        atributos.appendChild(estado);
        atributos.appendChild(especie);
        atributos.appendChild(genero);
        atributos.appendChild(origen);
        atributos.className = 'card-body text-center'

        //Aca iran contenidos las cartas
        const carta = document.createElement('div')
        carta.appendChild(imagen);
        carta.appendChild(atributos);
        carta.className = 'card'
        carta.style = 'width: auto; margin:auto;'

        //Aca se crean los divs para hacer las col
        const contenedorColumnas = document.createElement('div')
        contenedorColumnas.appendChild(carta);
        contenedorColumnas.className = 'col-6 col-xl-3 col-lg-4 col-md-4 col-sm my-4'

        personajes.push(contenedorColumnas);
    })
    app.append(...personajes);
})

