

const searchBar = document.getElementById('search');
const selector = document.createElement('select');
selector.id = 'titulo';

const book_year = document.getElementById('book_year');
const book_author = document.getElementById('book_author');

searchBar.addEventListener('keyup', function (event) {
  const tituloBuscado = event.target.value;
  if (tituloBuscado.length > 2) {
    setTimeout(() => {
      if (tituloBuscado !== searchBar.value) return;
      busqueda(tituloBuscado);
    }, 100);
  }
});

function busqueda(tituloBuscado) {
  tituloBuscado = tituloBuscado.replace(/ /g, "+");
  fetch(`https://openlibrary.org/search.json?title=${tituloBuscado}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const docs = data.docs;
      selector.innerHTML = ''; // Clear the select options
      book_year.innerHTML = '';
      docs.forEach(book => {
        const option = document.createElement('option');
        option.value = book.title;
        option.textContent = book.title;
        selector.appendChild(option);
      });
      selector.addEventListener('change', function(event) {
        const libro_seleccionado = event.target.value;
        busqueda_year(libro_seleccionado);
        busqueda_autor(libro_seleccionado);
        //book_year.innerHTML = 'Año de publicación: ' + year;
    });
      const divLista = document.getElementById('divLista');
      if (!divLista) {
        const container = document.getElementById('books');
        divLista = document.createElement('div');
        divLista.id = 'divLista';
        container.appendChild(divLista);
      }
      divLista.innerHTML = ''; // Clear the previous content
      const labelTitulos = document.createElement('label');
      labelTitulos.textContent = 'Los títulos posibles son:';
      divLista.appendChild(labelTitulos);
      divLista.appendChild(selector);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
}


function busqueda_year(titulo){
  titulo = titulo.replace(/ /g, "+");
  fetch(`https://openlibrary.org/search.json?title=${titulo}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const year = data.docs[0].first_publish_year;
      console.log(year);
      book_year.innerHTML = 'Año de publicación: ' + year;
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });  
}

function busqueda_autor(titulo){
  titulo = titulo.replace(/ /g, "+");
  fetch(`https://openlibrary.org/search.json?title=${titulo}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const author = data.docs[0].author_name[1];
      book_author.innerHTML = 'Autor: ' + author;
      console.log(author);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });  
}