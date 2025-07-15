
 actualizarCarrito(); 
 iniciarBotones();
  function iniciarBotones(){
        const botonesAgregar = document.querySelectorAll(".boton-agregar");
        console.log(botonesAgregar);

      botonesAgregar.forEach(function (boton) {
        boton.addEventListener("click", function (e) {
          const btnclic = e.currentTarget;
          const card = btnclic.closest(".card-content");
          console.log(card);
          // sube hasta el contenedor del producto
          if(!card) return;
            const titulo = card.querySelector("h3").textContent; // toma el título
          
           // const precioTexto = card.querySelector(".price").textContent.replace("$", "");//tomo el precio
           const precioTexto = card.querySelector(".price").textContent.match(/[\d.]+/)[0]; 
           const precio = parseFloat(precioTexto);//lo paso a numero

            const producto = {
              id: titulo.toLowerCase().replace(/\s+/g, "-"), // 
              nombre: titulo,
              precio: precio
            };

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarCarrito(); 

            btnclic.textContent = "Agregado ✅";
            btnclic.disabled = true; // desactivo el botón
        });
  });
  }

    function actualizarCarrito() {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const listaCarrito = document.getElementById("lista-carrito");
        if(!listaCarrito) return; //no hace nada si está vacío
          listaCarrito.innerHTML = ""; // limpia la lista anterior

          carrito.forEach(producto => {
          const li = document.createElement("li");
          li.textContent = `${producto.nombre} - $${producto.precio}`;
          listaCarrito.appendChild(li);
          console.log(li);
           });
           //suma total con toFixed para tener 2 decimales
          const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
          const resumenFinal = document.createElement("div");
          resumenFinal.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong><br>`;
          listaCarrito.appendChild(resumenFinal);
      }
  const vaciarCarrito =  document.getElementById("vaciar-carrito")
  if(vaciarCarrito){
      vaciarCarrito.addEventListener("click", () => {
      localStorage.removeItem("carrito");
      actualizarCarrito();
      }); 
  } 
    
  const btnArriba = document.getElementById("btn-volver-arriba");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btnArriba.style.display = "block";
    } else {
      btnArriba.style.display = "none";
    }
  });

  btnArriba.addEventListener("click", () => {
  const scrollStep = -window.scrollY / 30; // para más lento aumentar el divisor
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15); // tiempo en milisegundos
  });
  


