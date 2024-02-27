/*

const searchBar = document.getElementById("search");
searchBar = searchBar.replace(/ /g, "+");
const resultList = document.getElementById("results-list");
const bookDetails = document.getElementById("book-details");

searchBar.onkeyup = function() {
    const tituloBuscado = searchBar.value;
    if (tituloBuscado.length > 2) {
      // Para no lanzar peticiones innecesarias si el usuario está tecleando todavía
      setTimeout(() => {
        if (tituloBuscado !== searchBar.value) return;
        obtenTitulo(tituloBuscado);
        obtenYear(tituloBuscado);
        obtenAutor(tituloBuscado);
      }, 1000);
    }
  }

  const obtenTitulo = function(tituloBuscado) {
    fetch(`https://openlibrary.org/search.json?q=${tituloBuscado}`).then(respuesta => {
      if (respuesta.ok) {
        return respuesta.json();
      }
    }).then(objeto => {
      muestraGenero(objeto && objeto.dataa.title);
    }).catch(error => displayResults('Error'));
  }

  function displayResults(searchResults) {
    resultList.innerHTML = ""; // Clear previous results
    if (searchResults.length === 0) {
      resultList.innerHTML = "<li>No results found.</li>";
      return;
    }
    searchResults.forEach((book) => {
      const listItem = document.createElement("li");
      listItem.textContent = book.title;
      listItem.addEventListener("click", () => showBookDetails(book));
      resultList.appendChild(listItem);
    });
  }

  */

  /*
  const searchBar = document.getElementById("search");
  searchBar = searchBar.replace(/ /g, "+");
  const resultList = document.getElementById("results-list");
  const bookDetails = document.getElementById("book-details");

  const searchBooks = function(tituloBuscado) {
    fetch(`https://openlibrary.org/search.json?q=${tituloBuscado}`).then(respuesta => {
      if (respuesta.ok) {
        return respuesta.json();
      }
    }).then(objeto => {

    }).catch(error => displayResults('Error'));
  }


  function displayResults(searchResults) {
    resultList.innerHTML = ""; // Clear previous results
    if (searchResults.length === 0) {
      resultList.innerHTML = "<li>No results found.</li>";
      return;
    }
    searchResults.forEach((book) => {
      const listItem = document.createElement("li");
      listItem.textContent = book.title;
      listItem.addEventListener("click", () => showBookDetails(book));
      resultList.appendChild(listItem);
    });
  }
  
  function showBookDetails(selectedBook) {
    resultList.style.display = "none"; // Hide the list after selection
    bookDetails.innerHTML = `
      <h2>${selectedBook.title}</h2>
      <p><b>Author:</b> ${selectedBook.author}</p>
      <p>${selectedBook.info}</p>
      <ul>
        ${selectedBook.links.map((link) => `<li><a href="${link}">${link}</a></li>`).join("")}
      </ul>
      <p>Reviews: (This feature is not currently implemented)</p>
    `;
  }
  
  searchBar.addEventListener("keyup", () => {
    const searchTerm = searchBar.value.trim();
    const searchResults = searchBooks(searchTerm);
    displayResults(searchResults);
  });
  */

  //Defino las variables


//en vez de foto seria la tabla
/*
const nuevoDiv=document.createElement('div');
nuevoDiv.id='divFoto';
nuevoDiv.classList.add('contenedor-imagen'); 
*/
/*
const nuevoDiv=document.createElement('div');
nuevoDiv.id='tabla';
nuevoDiv.classList.add('contenedor-tabla'); 

const patata = document.getElementById('results-list');

//en vez de imagen, tabla again
//const nuevaImage=document.createElement('img');  
const nuevaTabla=document.createElement('table'); 

const divLista=document.createElement('div');
divLista.id='divLista';
*/
/*
const labelRazas=document.createElement('label');
labelRazas.textContent='Las razas son:';
*/
/*
const labelTitulos=document.createElement('label');
labelTitulos.textContent='Las titulos son posibles son:';

const selector=document.createElement('select');
selector.id='titulo';

searchBar.onkeyup = function() {
    const tituloBuscado = searchBar.value;
    tituloBuscado = tituloBuscado.replace(/ /g, "+");
    busqueda(tituloBuscado);
    if (tituloBuscado.length > 2) {
      // Para no lanzar peticiones innecesarias si el usuario está tecleando todavía
      setTimeout(() => {
        if (tituloBuscado !== searchBar.value) return;
        busqueda(tituloBuscado);
      }, 1000);
    }
  }

//Función de búsqueda
const busqueda= function () {
    fetch(`https://openlibrary.org/search.json?q=${tituloBuscado}`)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();           
    })
    .then(data => {
        //console.log(data);
        // Accede al objeto "message"
        const docs = data.docs; //lista con los {} de todos los libros    
        let opcion;
        // Itera sobre las claves (razas) del objeto "message"
        for (const book in docs) {   //         
            //console.log(`Raza: ${book}`);
            opcion=document.createElement('option');
            opcion.value=book.title;
            opcion.textContent=book.title;
            selector.appendChild(opcion);
            // Si hay subrazas, imprímelas también
            
            if (docs[book].length > 0) {
                docs[book].forEach(subBreed => {
                    console.log(`- ${subBreed}`);
                });
            }
            
        }
        //document.write("</select>");
        //document.write("</div>");
        divLista.appendChild(labelTitulos);
        divLista.appendChild(selector);
        document.body.appendChild(divLista);
        document.patata.textContent(opcion);
         //Funcion de cambio
        document.getElementById('titulo').addEventListener('change', function(event) {
            const seleccionado = event.target.value;
            busqueda_tabla(seleccionado);
        });
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
    }
   */
/*
     //Llamo ahora a la función para buscar foto del perrito
     const busqueda_tabla= function(raza) {
    fetch('https://dog.ceo/api/breed/'+raza+'/images')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();        
    })
    .then(data => {
        // Aquí puedes trabajar con los datos recibidos
        console.log(data);
        // Accede al objeto "message"
        const breed = data.message;
        console.log(breed);
        const indice=Math.floor(Math.random() * breed.length);
        //document.write("<div class=\"contenedor-imagen\"><img src="+breed[indice]+" alt=\"Imagen molona\" width=\"100%\" height=\"100%\"></div>");
       
                     
        nuevaImage.src=breed[indice];
        //nuevaImage.alt="perrito";
        nuevaImage.width=100;
        nuevaImage.height=100;
        nuevoDiv.appendChild(nuevaImage);        
        document.body.appendChild(nuevoDiv);               
        
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
    }

*/
/*
const nuevoDiv = document.createElement('div');
nuevoDiv.id = 'tabla';
nuevoDiv.classList.add('contenedor-tabla');

const patata = document.getElementById('results-list');

const nuevaTabla = document.createElement('table');

const divLista = document.createElement('div');
divLista.id = 'divLista';

const labelTitulos = document.createElement('label');
labelTitulos.textContent = 'Las titulos son posibles son:';

const selector = document.createElement('select');
selector.id = 'titulo';

searchBar.onkeyup = function () {
    let tituloBuscado = searchBar.value;
    tituloBuscado = tituloBuscado.replace(/ /g, "+");
    busqueda(tituloBuscado);
    if (tituloBuscado.length > 2) {
        setTimeout(() => {
            if (tituloBuscado !== searchBar.value) return;
            busqueda(tituloBuscado);
        }, 1000);
    }
}

const busqueda = function (tituloBuscado) {
    fetch(`https://openlibrary.org/search.json?q=${tituloBuscado}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const docs = data.docs;
            let opcion;
            for (const book of docs) { // Corrected iterating over docs
                opcion = document.createElement('option');
                opcion.value = book.title; // Corrected accessing title property
                opcion.textContent = book.title; // Corrected accessing title property
                selector.appendChild(opcion);
            }
            divLista.appendChild(labelTitulos);
            divLista.appendChild(selector);
            // Append divLista to a specific container in your HTML
            const container = document.getElementById('someContainerId'); // Specify the container id
            container.appendChild(divLista);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

document.getElementById('titulo').addEventListener('change', function (event) {
    const seleccionado = event.target.value;
    busqueda_tabla(seleccionado);
});
*/

const searchBar = document.getElementById('search');
const resultsList = document.getElementById('results-list');
const debounceTimeout = 500; // Debounce timeout in milliseconds

// Function to clear the results list
function clearResults() {
  resultsList.innerHTML = '';
}

// Function to display a title in the results list
function displayTitle(title) {
  const listItem = document.createElement('li');
  listItem.textContent = title;
  resultsList.appendChild(listItem);
}

// Function to debounce the search call
function debouncedSearch() {
  const name = searchBar.value.trim();
  name = name.replace(/ /g, "+");
  if (name) {
    clearResults();
    // Implement your logic to fetch titles based on the name
    // Substitute this placeholder with your actual implementation
    fetch(`https://openlibrary.org/search.json?q=${name}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          data.forEach(title => displayTitle(title));
        } else {
          displayTitle('No titles found.');
        }
      })
      .catch(error => {
        console.error('Error fetching titles:', error);
        displayTitle('Error fetching titles. Please try again later.');
      });
  }
}

// Debounce implementation using a timer
let timer;
searchBar.addEventListener('keyup', function() {
  clearTimeout(timer);
  timer = setTimeout(debouncedSearch, debounceTimeout);
});
