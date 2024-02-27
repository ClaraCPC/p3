

const searchBar = document.getElementById('search');
const selector = document.createElement('select');
selector.id = 'titulo';

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
  fetch(`https://openlibrary.org/search.json?q=${tituloBuscado}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const docs = data.docs;
      selector.innerHTML = ''; // Clear the select options
      docs.forEach(book => {
        const option = document.createElement('option');
        option.value = book.title;
        option.textContent = book.title;
        selector.appendChild(option);
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