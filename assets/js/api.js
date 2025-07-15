document.addEventListener("DOMContentLoaded",() => {
 fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => { console.log(data);
  
  const contenedor = document.getElementById ("ejemplos");
    data.forEach(producto => {
    contenedor.innerHTML +=`<div class="card-content">
    <img class="imgApi" src="${producto.image}" alt="${producto.title}"><h3>${producto.title} </h3>
    <p class="price">Precio: ${producto.price}</p>
    <button class="btn boton-agregar" type="button">Comprar</button>
    </div>`    
    });
        if (typeof iniciarBotones === "function") {
      iniciarBotones(); 
    }
    })
    .catch((error)=> console.error("Error al obtener datos de API:", error));
        //me fijo si la funcion iniciarBotones existe y si es una función la ejecuto

 
});


/*fetch('https://fakestoreapi.com/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
  .then(response => response.json())
  .then(data => console.log(data)); */