fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => { console.log(data);
  const product = { title: 'New Product', price: 29.99 };
  const contenedor = document.getElementById ("ejemplos");
    data.forEach(producto => {
    contenedor.innerHTML +=`<div class="card-content">
    <img class="imgApi" src="${producto.image}" alt="${producto.title}"><h3>${producto.title} </h3>
    <p class="price">Precio: $${producto.price}</p>
    <button class="btn boton-agregar" type="button">Comprar</button>
    </div>`    
    });
    })
    .catch((error)=> console.error("Error al obtener datos de API:", error));





/*fetch('https://fakestoreapi.com/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
  .then(response => response.json())
  .then(data => console.log(data)); */